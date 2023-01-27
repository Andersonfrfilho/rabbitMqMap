import { exchangesPosition } from "../../../../src/services/rabbitmq/mocks/exchange.mock";
import { componentsPositions } from "../mocks/component.context.mock";
import { defineMessagePositions } from "@contexts/position/functions/defineMessagePositions";
import { producerPositionMessage, producersPositionMessagesPosition } from "../../../../src/services/rabbitmq/mocks/producer.mock";

describe('defineMessagePositions', () => {
  it('should be call defineMessagePositions and return info messages position', () => {
    // ARRANGE
    // ACT
    const componentMessagesPosition = defineMessagePositions({ queues: componentsPositions as any, exchanges: exchangesPosition as any, producers: producerPositionMessage as any })

    // ASSERT
    expect(componentMessagesPosition.length).toEqual(producersPositionMessagesPosition.length);
  })
})
