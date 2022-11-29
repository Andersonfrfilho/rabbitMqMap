import axios from 'axios'
import { config } from '@config/index'
import { Binding } from '@services/rabbitmq/interfaces/bindings.interface'
import { Exchange } from '@services/rabbitmq/interfaces/exchange.interface'
import { Queue, QueueBinding } from '@services/rabbitmq/interfaces/queue.interface'

export const rabbitMqApiService = axios.create({
  baseURL: config.rabbitMq.baseUrl,
  auth: {
    username: config.rabbitMq.username,
    password: config.rabbitMq.password
  }
})

export const getQueues = async (): Promise<QueueBinding[]> => {
  const { data: queues } = await rabbitMqApiService.get<Queue[]>('/api/queues');
  const queuesWithConsumers = await Promise.all(queues.map(async queue => {
    const bindings = await getBindings(queue.name)
    return {
      ...queue,
      bindings
    }
  }))
  return queuesWithConsumers
}

export const getExchanges = async (): Promise<Exchange[]> => {
  const { data: exchanges } = await rabbitMqApiService.get<Exchange[]>('/api/exchanges');
  return exchanges
}

export const getBindings = async (queueName: string): Promise<Binding[]> => {
  const { data: bindings } = await rabbitMqApiService.get<Binding[]>(`/api/queues/%2F/${queueName}/bindings`);
  return bindings
}