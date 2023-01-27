import { createPositionsComponents } from "@contexts/position/functions/createPositionComponents";
import { components } from "../mocks/component.context.mock";

describe('createPositionsComponents', () => {
  it('should be call createPositionsComponents and return info position components', () => {
    // ARRANGE
    // ACT
    const componentsPositions = createPositionsComponents(components)

    // ASSERT
    expect(components.producer.quantity).toEqual(componentsPositions.producer.length);
    expect(components.exchange.quantity).toEqual(componentsPositions.exchange.length);
    expect(components.queue.quantity).toEqual(componentsPositions.queue.length);
    expect(components.consumer.quantity).toEqual(componentsPositions.consumer.length);
  })
})
