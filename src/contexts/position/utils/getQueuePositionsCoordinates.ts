import { Position } from "@contexts/interfaces/positions.interface"
import { COMPONENT_TYPE } from "@enums/components.enum"
import { BindingPosition } from "@services/rabbitmq/interfaces/binding.interface"
import { ConsumerPosition } from "@services/rabbitmq/interfaces/consumer.interface"
import { QueueBindingConsumerRegisterPosition } from "@services/rabbitmq/interfaces/queue.interface"

export interface GetQueuePositionsParams {
  components: QueueBindingConsumerRegisterPosition[]
  componentType: COMPONENT_TYPE
}

export function getQueuePositionsCoordinates({ components, componentType }: GetQueuePositionsParams): Position[] {
  return components.reduce((accumulator: Position[], queue: QueueBindingConsumerRegisterPosition): Position[] => [...accumulator, ...queue[componentType].reduce((accumulatorComponent: Position[], component: BindingPosition | ConsumerPosition): Position[] => [...accumulatorComponent, component.position], [])], [])
}