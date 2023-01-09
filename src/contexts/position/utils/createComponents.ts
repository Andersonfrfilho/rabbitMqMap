import { CONSUMER_DIMENSION, EXCHANGE_DIMENSION, PRODUCER_DIMENSION, QUEUE_DIMENSION } from "@constants/components.constant"
import { Components } from "@contexts/interfaces/components.interface"
import { componentDTO } from "@dtos/component.dto"
import { DEPTH } from "@enums/positions.enum"
import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface"
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface"
import { Producer } from "@services/rabbitmq/interfaces/producer.interface"
import { Queue, QueueBindingConsumerRegister } from "@services/rabbitmq/interfaces/queue.interface"

interface CreateComponentParams {
  consumers: Consumer[]
  exchanges: Exchange[]
  queues: QueueBindingConsumerRegister[]
  producers: Producer[]
}

export function createComponents({ consumers, exchanges, queues, producers }: CreateComponentParams): Components {
  return {
    consumer: componentDTO<Consumer>({
      items: consumers, depth: DEPTH.CONSUMER, dimensions: CONSUMER_DIMENSION
    }),
    exchange: componentDTO<Exchange>({ items: exchanges, depth: DEPTH.EXCHANGE, dimensions: EXCHANGE_DIMENSION }),
    queue: componentDTO<QueueBindingConsumerRegister>({ items: queues, depth: DEPTH.QUEUE, dimensions: QUEUE_DIMENSION }),
    producer: componentDTO<Producer>({ items: producers, depth: DEPTH.PRODUCER, dimensions: PRODUCER_DIMENSION }),
  }
}