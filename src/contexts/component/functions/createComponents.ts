import { CONSUMER_DIMENSION, EXCHANGE_DIMENSION, PRODUCER_DIMENSION, QUEUE_DIMENSION } from "@constants/components.constant"
import { Components } from "@contexts/interfaces/components.interface"
import { DEPTH } from "@enums/positions.enum"
import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface"
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface"
import { Producer } from "@services/rabbitmq/interfaces/producer.interface"
import { QueueBindingConsumerRegister } from "@services/rabbitmq/interfaces/queue.interface"
import { createComponent } from "../utils/createComponent"

export interface CreateComponentsParams {
  consumers: Consumer[]
  exchanges: Exchange[]
  queues: QueueBindingConsumerRegister[]
  producers: Producer[]
}

export function createComponents({ consumers, exchanges, queues, producers }: CreateComponentsParams): Components {
  return {
    consumer: createComponent<Consumer>({
      items: consumers, depth: DEPTH.CONSUMER, dimensions: CONSUMER_DIMENSION
    }),
    exchange: createComponent<Exchange>({ items: exchanges, depth: DEPTH.EXCHANGE, dimensions: EXCHANGE_DIMENSION }),
    queue: createComponent<QueueBindingConsumerRegister>({ items: queues, depth: DEPTH.QUEUE, dimensions: QUEUE_DIMENSION }),
    producer: createComponent<Producer>({ items: producers, depth: DEPTH.PRODUCER, dimensions: PRODUCER_DIMENSION }),
  }
}