import { defineLinesQueuesBetweenExchangesConsumers } from "@contexts/position/functions/defineLinesQueuesBetweenExchangesConsumers";
import { componentsLines, componentsPositions } from "../mocks/component.context.mock";

describe('defineLinesQueuesBetweenExchangesConsumers', () => {
  it('should be call defineLinesQueuesBetweenExchangesConsumers and return lines queues exchanges and consumers', () => {
    // ARRANGE
    // ACT
    const componentsPositionsResult = defineLinesQueuesBetweenExchangesConsumers(componentsPositions as any)

    // ASSERT
    expect(componentsPositionsResult.length).toEqual(componentsLines.length);
  })
})
