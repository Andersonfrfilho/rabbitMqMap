import { v4 as uuidV4 } from 'uuid';
import { ComponentsPositions } from "@contexts/interfaces/components.interface";
import { Exchange, ExchangePosition, } from "@services/rabbitmq/interfaces/exchange.interface";
import { Producer, ProducerPosition, } from "@services/rabbitmq/interfaces/producer.interface";
import { QueueBindingConsumerRegister, QueueBindingConsumerRegisterPosition } from "@services/rabbitmq/interfaces/queue.interface";
import { Position } from '@contexts/interfaces/positions.interface';

export interface DefinePositionsComponentsParams {
  queues: QueueBindingConsumerRegister[];
  positions: ComponentsPositions;
  producers: Producer[];
  exchanges: Exchange[];
}

export interface DefinePositionsComponentsResult { queues: QueueBindingConsumerRegisterPosition[], exchanges: ExchangePosition[], producers: ProducerPosition[] }

export const definePositionsComponents = ({ queues, positions, producers, exchanges }: DefinePositionsComponentsParams): DefinePositionsComponentsResult => {
  const producerPositions = positions.producer

  const exchangePositions = positions.exchange
  const consumerPositions = positions.consumer

  const exchangeWithPosition = exchanges.map(exchange => {
    const position = exchangePositions[0]
    exchangePositions.shift()
    return {
      id: uuidV4(),
      ...exchange,
      position
    }
  })

  const queuesWithPositions: QueueBindingConsumerRegisterPosition[] = queues.map((queue, index) => ({
    ...queue,
    id: uuidV4(),
    position: positions.queue[index],
    bindings: queue.bindings.map(binding => {
      const position = exchangeWithPosition.find(exchange => exchange.name === binding.source)?.position || {} as Position
      return {
        ...binding,
        position,
        id: uuidV4()
      }
    }),
    consumers_register: queue.consumers_register.map(consumer => {
      const position = consumerPositions[0]
      consumerPositions.shift()
      return {
        ...consumer,
        position,
        id: uuidV4()
      }
    })
  }))



  const producerWithPositions = producers.map((producer) => {
    const position = producerPositions[0]
    producerPositions.shift()
    return {
      ...producer,
      position: position
    }
  })

  return { queues: queuesWithPositions, exchanges: exchangeWithPosition, producers: producerWithPositions }
}
