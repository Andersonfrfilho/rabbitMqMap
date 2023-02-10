import { exchanges, exchangesPosition } from "../../../../src/services/rabbitmq/mocks/exchange.mock";
import { componentsPositions } from "../mocks/component.context.mock";
import { positions } from '../mocks/position.context.mocks'
import { producerPositionMessage, producers } from "../../../../src/services/rabbitmq/mocks/producer.mock";
import { definePositionsComponents } from "@contexts/position/functions/definePositionsComponents";
import { queues } from "../../../../src/services/rabbitmq/mocks/queue.mock";

describe('definePositionsComponents', () => {
  it('should be call definePositionsComponents and return info messages position', () => {
    // ARRANGE
    const expectResult = { queues: componentsPositions, exchanges: exchangesPosition, producers: producerPositionMessage }

    // ACT
    const result = definePositionsComponents({ positions, queues, producers, exchanges })

    // ASSERT
    expect(result.exchanges.length).toEqual(expectResult.exchanges.length);
    expect(result.producers.length).toEqual(expectResult.producers.length);
    expect(result.queues.length).toEqual(expectResult.queues.length);
  })
})
