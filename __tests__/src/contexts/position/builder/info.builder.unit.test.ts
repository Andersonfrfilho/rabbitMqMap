import { builderInfoComponent, infoConsumer, infoExchange, infoProducer, infoQueue } from "@contexts/position/builder/info.builder";
import { COMPONENT_INFO_TYPE } from "@enums/components.enum";

import { exchanges } from "../../../../src/services/rabbitmq/mocks/exchange.mock";
import { producers } from "../../../../src/services/rabbitmq/mocks/producer.mock";
import { queues } from "../../../../src/services/rabbitmq/mocks/queue.mock";
import { consumers } from "../../../../src/services/rabbitmq/mocks/consumers.mock";


describe('Info Builder', () => {
  describe('infoProducer', () => {
    it('builder info producer', () => {
      const result = infoProducer(producers[0])
      expect(result).toEqual({
        name: producers[0].user,
        type: producers[0].type,
        componentType: COMPONENT_INFO_TYPE.PRODUCER,
      })
    })
  })

  describe('infoExchange', () => {
    it('builder info exchange', () => {
      const result = infoExchange(exchanges[0])
      expect(result).toEqual({
        name: exchanges[0].name,
        type: exchanges[0].type,
        componentType: COMPONENT_INFO_TYPE.EXCHANGE,
      })
    })
  })

  describe('infoQueue', () => {
    it('builder info queue', () => {
      const result = infoQueue(queues[0])
      expect(result).toEqual({
        name: queues[0].name,
        type: queues[0].type,
        componentType: COMPONENT_INFO_TYPE.QUEUE,
      })
    })
  })

  describe('infoConsumer', () => {
    it('builder info consumer', () => {
      const result = infoConsumer(consumers[0])
      expect(result).toEqual({
        name: consumers[0].queue.name,
        type: consumers[0].channel_details.user,
        componentType: COMPONENT_INFO_TYPE.CONSUMER,
      })
    })
  })

  describe('builderInfoComponent', () => {
    it('builder info producer', () => {
      const result = builderInfoComponent({ componentName: COMPONENT_INFO_TYPE.PRODUCER, data: producers[0] })
      expect(result).toEqual({
        name: producers[0].user,
        type: producers[0].type,
        componentType: COMPONENT_INFO_TYPE.PRODUCER,
      })
    })

    it('builder info exchange', () => {
      const result = builderInfoComponent({ componentName: COMPONENT_INFO_TYPE.EXCHANGE, data: exchanges[1] })
      expect(result).toEqual({
        name: exchanges[1].name,
        type: exchanges[1].type,
        componentType: COMPONENT_INFO_TYPE.EXCHANGE,
      })
    })

    it('builder info queue', () => {
      const result = builderInfoComponent({ componentName: COMPONENT_INFO_TYPE.QUEUE, data: queues[0] })
      expect(result).toEqual({
        name: queues[0].name,
        type: queues[0].type,
        componentType: COMPONENT_INFO_TYPE.QUEUE,
      })
    })

    it('builder info consumer', () => {
      const result = builderInfoComponent({ componentName: COMPONENT_INFO_TYPE.CONSUMER, data: consumers[0] })
      expect(result).toEqual({
        name: consumers[0].queue.name,
        type: consumers[0].channel_details.user,
        componentType: COMPONENT_INFO_TYPE.CONSUMER,
      })
    })

    it('builder info consumer', () => {
      let result
      try {
        builderInfoComponent({ componentName: 'INVALID_TYPE', data: consumers[0] })
      } catch (error) {
        result = error
      }
      expect(result).toBeInstanceOf(Error)
    })
  })
})