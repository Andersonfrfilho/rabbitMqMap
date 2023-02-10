import { Position } from "@contexts/interfaces/positions.interface"
import { COMPONENT_TYPE } from "@enums/components.enum"
import { componentsPositions } from "../mocks/component.context.mock"
import { getQueuePositionsCoordinates } from "@contexts/position/utils/getQueuePositionsCoordinates"
import { BindingPosition } from "@services/rabbitmq/interfaces/binding.interface"
import { ConsumerPosition } from "@services/rabbitmq/interfaces/consumer.interface"
import { QueueBindingConsumerRegisterPosition } from "@services/rabbitmq/interfaces/queue.interface"


describe('getQueuePositionsCoordinates', () => {
  it('should be call getQueuePositionsCoordinates and return lines to position', () => {
    // ARRANGE
    const bindingsCoordinates = componentsPositions.reduce((accumulator: Position[], queue: QueueBindingConsumerRegisterPosition): Position[] => [...accumulator, ...queue.bindings.reduce((accumulatorComponent: Position[], component: BindingPosition | ConsumerPosition): Position[] => [...accumulatorComponent, component.position], [])], [])

    // ACT
    const coordinates = getQueuePositionsCoordinates({
      components: componentsPositions, componentType: COMPONENT_TYPE.BINDING
    })

    // ASSERT
    expect(coordinates.length).toEqual(bindingsCoordinates.length);
  })
})
