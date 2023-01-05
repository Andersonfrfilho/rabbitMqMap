import { config } from '@config/index'
import { Exchange } from '@services/rabbitmq/interfaces/exchange.interface'
import { Queue, } from '@services/rabbitmq/interfaces/queue.interface'
import { Binding } from './interfaces/binding.interface'
import { Consumer } from './interfaces/consumer.interface'
import { Connection, Producer } from './interfaces/producer.interface'
import { Connection as ConnectionRabbit } from './interfaces/connection.interface'
import { Overview } from './interfaces/overview.interfaces'
import axios from 'axios'
import { Trace } from './interfaces/trace.interface'
import { v4 as uuidV4 } from 'uuid';
import { exchange } from 'src/schemas/exchange.schema'

export const rabbitMqApiService = function () {
  return axios.create({
    baseURL: config.rabbitMq.baseUrl,
    auth: {
      username: config.rabbitMq.username,
      password: config.rabbitMq.password
    }
  })
}();

export const getQueues = async (): Promise<Queue[]> => {
  const { data: queues } = await rabbitMqApiService.get<Queue[]>(`/api/queues/${encodeURIComponent(config.rabbitMq.vhost)}`);

  const queuesFormat = queues.map(({ arguments: argumentsQueue, name, node, vhost, type }) => ({ arguments: argumentsQueue, name, node, vhost, type }))
  const queuesWithConsumersBindings = await Promise.all(queuesFormat.map(async queue => {
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
  const { data: bindings } = await rabbitMqApiService.get<Binding[]>(`/api/bindings/${encodeURIComponent(config.rabbitMq.vhost)}`);

  const exchangesWithRouteKeys = exchanges.map(exchange => ({
    ...exchange,
    bindings: bindings.filter(binding => binding.source === exchange.name) || []
  }))

  return exchangesWithRouteKeys
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
  const connectionsFormat = connectionsFilterDiffConsumers.map(({ host, name, node, client_properties, user, user_who_performed_action, vhost, port, type }) => ({
    id: uuidV4(), host, name, node, user, client_properties, user_who_performed_action, vhost, port, type, messages: [{
      "exchange": "amq.direct",
      "routeKey": "",
      "time": 1,
      "payload": "{\n\"fila\":\"direct\"\n}",
      "id": "284d1cbc-b9c7-4d9e-baf9-1827dc1daae4",
      "color": "#7a2d16"
    },
    {
      "exchange": "amq.fanout",
      "routeKey": "",
      "time": 1,
      "payload": "{\n\"fila\":\"fanout\"\n}",
      "id": "e570d66e-5526-4013-9354-65a764e35d1d",
      "color": "#59b651"
    },
    {
      "exchange": "amq.headers",
      "routeKey": "",
      "time": 1,
      "payload": "{\n\"fila\":\"headers\"\n}",
      "id": "cf73c63e-8eb1-4d4e-b077-b07333ba810d",
      "color": "#1cc0c2"
    },
    {
      "exchange": "amq.match",
      "routeKey": "",
      "time": 1,
      "payload": "{\n\"fila\":\"match\"\n}",
      "id": "b1ebcb65-d165-4a39-b975-299f0706a146",
      "color": "#6e1e9d"
    },
    {
      "exchange": "amq.topic",
      "routeKey": "route-key-topic",
      "time": 1,
      "payload": "{\n\"fila\":\"route-key-topic\"\n}",
      "id": "063bb02b-dc70-443e-b9c7-76ab50d05404",
      "color": "#1ad1a6"
    },
    {
      "exchange": "exchange-queue-1-topic",
      "routeKey": "many.queue-3",
      "time": 1,
      "payload": "{\n\"fila\":\"route-key-topic\"\n}",
      "id": "063bb02b-dc70-443e-b9c7-76ab50d05674",
      "color": "#361c34"
    }]
  }))
  return connectionsFormat
}

export const getOverview = async (): Promise<Overview> => {
  const { data } = await rabbitMqApiService.get<Overview>('/api/overview')
  return data
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
