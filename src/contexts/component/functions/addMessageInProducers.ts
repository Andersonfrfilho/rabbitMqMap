import { Producer } from "@services/rabbitmq/interfaces/producer.interface"
import { randomColor } from "@utils/random-color"
import { v4 } from 'uuid';

export interface MessageFormParam {
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
    const newMessage = {
      exchange: message.exchange,
      payload: message.payload,
      routeKey: message.routeKey,
      id: v4(), color: randomColor()
    }
    if (producer.id === message.producerId) {
      return {
        ...producer,
        messages: [...producer.messages, newMessage]
      }
    }
    return producer
  })
}
