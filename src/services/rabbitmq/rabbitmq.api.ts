import { config } from '@config/index'
import { Exchange } from '@services/rabbitmq/interfaces/exchange.interface'
import { Queue, QueueBindingConsumers, } from '@services/rabbitmq/interfaces/queue.interface'
import { Binding } from './interfaces/binding.interface'
import { Consumer } from './interfaces/consumer.interface'
import { Connection, Producer } from './interfaces/producer.interface'
import { Connection as ConnectionRabbit } from './interfaces/connection.interface'
import { Overview } from './interfaces/overview.interfaces'
import axios from 'axios'
import { Trace } from './interfaces/trace.interface'

export const rabbitMqApiService = function () {
  return axios.create({
    baseURL: config.rabbitMq.baseUrl,
    auth: {
      username: config.rabbitMq.username,
      password: config.rabbitMq.password
    }
  })
}();

export const getQueues = async (): Promise<QueueBindingConsumers[]> => {
  const { data: queues } = await rabbitMqApiService.get<Queue[]>('/api/queues');

  const queuesWithConsumersBindings = await Promise.all(queues.map(async queue => {
    const bindings = await getBindings(queue.name)
    const consumers = await getConsumers(queue.name)

    return {
      ...queue,
      bindings,
      consumers_register: consumers
    }
  }))

  return queuesWithConsumersBindings
}

export const getExchanges = async (): Promise<Exchange[]> => {
  const { data: exchanges } = await rabbitMqApiService.get<Exchange[]>('/api/exchanges');
  return exchanges
}

export const getBindings = async (queueName: string): Promise<Binding[]> => {
  const { data: bindings } = await rabbitMqApiService.get<Binding[]>(`/api/queues/${encodeURIComponent(config.rabbitMq.vhost)}/${queueName}/bindings`);

  return bindings
}

export const getConsumers = async (queueName: string): Promise<Consumer[]> => {
  const { data: consumers } = await rabbitMqApiService.get<Consumer[]>(`/api/consumers/${encodeURIComponent(config.rabbitMq.vhost)}`)
  const consumersFilter = consumers.filter(consumer => consumer.queue.name === queueName)
  return consumersFilter
}

export const getProducers = async (): Promise<Producer[]> => {
  const [{ data: consumers }, { data: connections }] = await Promise.all([rabbitMqApiService.get<Consumer[]>(`/api/consumers/${encodeURIComponent(config.rabbitMq.vhost)}`), rabbitMqApiService.get<Connection[]>(`/api/connections`)])
  const consumerNames = consumers.map(consumer => consumer.channel_details.user)
  const connectionsFilterDiffConsumers = connections.filter(connection => !consumerNames.includes(connection.user))
  return connectionsFilterDiffConsumers
}

export const getOverview = async (): Promise<Overview> => {
  const { data } = await rabbitMqApiService.get<Overview>('/api/overview')
  return data
}

export const getConnections = async (): Promise<ConnectionRabbit[]> => {
  const { cluster_name } = await getOverview()
  const { data: connections } = await rabbitMqApiService.get<ConnectionRabbit[]>(`/api/vhosts/${encodeURIComponent(config.rabbitMq.vhost)}/connections`)
  const regex = new RegExp(cluster_name)
  const filterConnectionsWithoutTracing = connections.filter(connection => !regex.test(connection.name))
  return filterConnectionsWithoutTracing
}

export interface CreateTraceDTO {
  user: string;
  password: string;
  cluster: string;
  nameConnection: string;
  nameConnectionTrace: string;
  pattern?: string;
  node: string;
}

export const getTraces = async () => {
  const { data: trace } = await rabbitMqApiService.get<Trace[]>(`/api/traces/${encodeURIComponent(config.rabbitMq.vhost)}`)
  return trace
}

export const createTracer = async ({ user, password, cluster, nameConnectionTrace, nameConnection, node, pattern = '#' }: CreateTraceDTO): Promise<void> => {
  const data = {
    vhost: config.rabbitMq.vhost,
    name: nameConnection,
    format: 'json',
    tracer_connection_username: nameConnectionTrace,
    user,
    tracer_connection_password: password,
    pattern,
    node
  }

  try {
    await axios.put(
      'http://localhost:15672/api/traces/node/rabbit%40rabbit-mapper-host/%2F/project-nextjs-producer-trace',
      {
        'vhost': '/',
        'name': 'project-nextjs-producer-trace',
        'format': 'json',
        'tracer_connection_username': 'project-nextjs-producer',
        'tracer_connection_password': 'guest',
        'pattern': '#',
        'node': 'rabbit@rabbit-mapper-host'
      },
      {
        headers: {
          'Accept': '*/*',
          'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
          'Authorization': 'Basic Z3Vlc3Q6Z3Vlc3Q=',
          'Connection': 'keep-alive',
          'Cookie': '_ga=GA1.1.2090797514.1666754108; _gid=GA1.1.1033423893.1670903405; m=2258:Z3Vlc3Q6Z3Vlc3Q%253D',
          'Origin': 'http://localhost:15672',
          'Referer': 'http://localhost:15672/',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"'
        }
      }
    );

  } catch (error) {
    console.log(error)
  }
}
export interface LoginDTO {
  username: string;
  password: string;
}

export const login = async ({ username, password }: LoginDTO): Promise<boolean> => {

  const { data } = await rabbitMqApiService.get(`/api/whoami`, {
    auth: {
      username,
      password,
    }
  })
  return !!data.name
}