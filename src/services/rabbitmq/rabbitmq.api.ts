import axios from 'axios'
import { config } from '@config/index'
import { Exchange } from '@services/rabbitmq/interfaces/exchange.interface'
import { Queue, QueueBindingConsumers, } from '@services/rabbitmq/interfaces/queue.interface'
import { Binding } from './interfaces/binding.interface'
import { Consumer } from './interfaces/consumer.interface'
import { Connection, Producer } from './interfaces/producer.interface'

export const rabbitMqApiService = axios.create({
  baseURL: config.rabbitMq.baseUrl,
  auth: {
    username: config.rabbitMq.username,
    password: config.rabbitMq.password
  }
})

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
  const consumerNames = consumers.map(consumer => consumer.channel_details.name)
  const connectionsFilterDiffConsumers = connections.filter(connection => !consumerNames.includes(connection.user))
  return connectionsFilterDiffConsumers
}