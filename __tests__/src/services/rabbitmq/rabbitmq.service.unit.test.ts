import { getBindings, getExchanges, getQueues, rabbitMqApiService, getConsumers, getProducers, changeAxiosConfig } from "@services/rabbitmq/rabbitmq.service"

import { queues, bindingsQueues, bindings, exchanges, consumers, connections } from "./mocks/rabbitrmq.http.mock"
import { queues as queuesGetQueues } from "./mocks/queue.mock"
import { exchanges as exchangesGetExchanges } from "./mocks/exchange.mock"
import { producers as producersGetProducers } from "./mocks/producer.mock"

describe('RabbitMqService', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('getQueues', () => {
    it('should be return queues result', async () => {
      jest.spyOn(rabbitMqApiService, 'get').mockResolvedValueOnce({ data: queues })
        .mockResolvedValueOnce({ data: bindingsQueues["queue-1"] }).mockResolvedValueOnce({ data: bindingsQueues["queue-1-dead-letter"] }).mockResolvedValueOnce({ data: bindingsQueues["queue-2"] }).mockResolvedValueOnce({ data: bindingsQueues["queue-3"] }).mockResolvedValueOnce({ data: bindingsQueues["queue-4"] })
        .mockResolvedValueOnce({ data: consumers }).mockResolvedValueOnce({ data: [] }).mockResolvedValueOnce({ data: [] }).mockResolvedValueOnce({ data: [] }).mockResolvedValueOnce({ data: [] })

      const result = await getQueues()

      expect(result).toEqual(queuesGetQueues)
    })
  })

  describe('getExchanges', () => {
    it('should be return queues result', async () => {
      jest.spyOn(rabbitMqApiService, 'get')
        .mockResolvedValueOnce({ data: exchanges })
        .mockResolvedValueOnce({ data: bindings })

      const result = await getExchanges()

      expect(result).toEqual(exchangesGetExchanges)
    })
  })

  describe('getBindings', () => {
    it('should be return queues result', async () => {
      const queueName = "queue-1"
      const data = bindingsQueues[queueName]

      jest.spyOn(rabbitMqApiService, 'get')
        .mockResolvedValueOnce({ data })

      const result = await getBindings(queueName)

      expect(result).toEqual(data)
    })
  })

  describe('getConsumers', () => {
    it('should be return queues result', async () => {
      const queueName = "queue-1"

      jest.spyOn(rabbitMqApiService, 'get')
        .mockResolvedValueOnce({ data: consumers })

      const result = await getConsumers(queueName)

      expect(result).toEqual(consumers)
    })
  })

  describe('getProducers', () => {
    it('should be return queues result', async () => {
      jest.spyOn(rabbitMqApiService, 'get')
        .mockResolvedValueOnce({ data: consumers }).mockResolvedValueOnce({ data: connections })

      const result = await getProducers()

      expect(result.length).toEqual(producersGetProducers.length)
    })
  })

  describe('changeAxiosConfig', () => {
    it('should be return queues result getProducers', async () => {
      jest.spyOn(rabbitMqApiService, 'get').mockResolvedValueOnce({ data: queues })
        .mockResolvedValueOnce({ data: bindingsQueues["queue-1"] }).mockResolvedValueOnce({ data: bindingsQueues["queue-1-dead-letter"] }).mockResolvedValueOnce({ data: bindingsQueues["queue-2"] }).mockResolvedValueOnce({ data: bindingsQueues["queue-3"] }).mockResolvedValueOnce({ data: bindingsQueues["queue-4"] })
        .mockResolvedValueOnce({ data: consumers }).mockResolvedValueOnce({ data: [] }).mockResolvedValueOnce({ data: [] }).mockResolvedValueOnce({ data: [] }).mockResolvedValueOnce({ data: [] })
        .mockResolvedValueOnce({ data: exchanges })
        .mockResolvedValueOnce({ data: bindings })
        .mockResolvedValueOnce({ data: consumers })
        .mockResolvedValueOnce({ data: connections })

      const result = await changeAxiosConfig({ baseUrl: 'http://localhost:3000', username: 'guest', password: 'guest', vHost: '/' })

      expect(result.queues).toEqual(queuesGetQueues)
      expect(result.exchanges).toEqual(exchangesGetExchanges)
      expect(result.producers.length).toEqual(producersGetProducers.length)
    })
  })
})