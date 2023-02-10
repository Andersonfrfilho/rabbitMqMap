import { Producer } from "@services/rabbitmq/interfaces/producer.interface"


export interface RemoveMessageInProducersParams {
  producerId: string, messageId: string;
  producers: Producer[]
}

export function removeMessageInProducers({ producers, producerId, messageId }: RemoveMessageInProducersParams): Producer[] {
  return producers.map(producer => {
    if (producer.id === producerId) {
      return {
        ...producer,
        messages: producer.messages.filter(message => message.id !== messageId)
      }
    }
    return producer
  })
}

