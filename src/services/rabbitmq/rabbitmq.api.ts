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
  const { data: exchanges } = await rabbitMqApiService.get<Exchange[]>(`/api/exchanges/${encodeURIComponent(config.rabbitMq.vhost)}`);
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
  const [{ data: consumers }, { data: connections }] = await Promise.all([rabbitMqApiService.get<Consumer[]>(`/api/consumers/${encodeURIComponent(config.rabbitMq.vhost)}`), rabbitMqApiService.get<Connection[]>(`/api/vhosts/${encodeURIComponent(config.rabbitMq.vhost)}/connections`)])
  const consumerNames = consumers.map(consumer => consumer.channel_details.user)
  const connectionsFilterDiffConsumers = connections.filter(connection => !consumerNames.includes(connection.user))
  const connectionsFormat = connectionsFilterDiffConsumers.map(({ host, name, node, client_properties, user, user_who_performed_action, vhost, port, type }) => ({ host, name, node, user, client_properties, user_who_performed_action, vhost, port, type }))
  return connectionsFormat
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
