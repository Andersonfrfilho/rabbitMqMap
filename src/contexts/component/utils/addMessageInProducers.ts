import { Producer } from "@services/rabbitmq/interfaces/producer.interface"
import { randomColor } from "@utils/random-color"
import { v4 as uuidV4 } from 'uuid';

interface MessageFormParam {
  exchange: string;
  routeKey: string;
  payload: string;
  producerId: string;
}

export interface AddMessageInProducersParams {
  message: MessageFormParam
  producers: Producer[]
}

export function addMessageInProducers({ producers, message }: AddMessageInProducersParams): Producer[] {
  return producers.map(producer => {
    if (producer.id === message.producerId) {
      return {
        ...producer,
        messages: [...producer.messages, { ...message, producerId: undefined, id: uuidV4(), color: randomColor() }]
      }
    }
    return producer
  })
}
