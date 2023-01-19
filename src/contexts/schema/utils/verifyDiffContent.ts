import { COMPONENT_INFO_TYPE } from "@enums/components.enum"
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface"
import { Producer } from "@services/rabbitmq/interfaces/producer.interface"
import { QueueBindingConsumerRegister } from "@services/rabbitmq/interfaces/queue.interface"

export interface VerifyDiffContentParams {
  components: QueueBindingConsumerRegister[] | Exchange[] | Producer[]
  componentsEditor: QueueBindingConsumerRegister[] | Exchange[] | Producer[]
  type: COMPONENT_INFO_TYPE
}

export function verifyDiffContent({ components, componentsEditor, type }: VerifyDiffContentParams): boolean {
  if (type === COMPONENT_INFO_TYPE.QUEUE || COMPONENT_INFO_TYPE.EXCHANGE) {
    return components.length >= 0 && componentsEditor.length >= 0 && componentsEditor.every((componentEditor: QueueBindingConsumerRegister | Exchange) => components.some((component: QueueBindingConsumerRegister | Exchange) => component.name === componentEditor.name))
  }

  return components.length >= 0 && componentsEditor.length >= 0 && componentsEditor.every((componentEditor: Producer) => components.some((component: Producer) => component.id === componentEditor.id && component.messages.length === componentEditor.messages.length))
}
