import { queues } from "../../../services/rabbitmq/mocks/queue.mock";
import { consumers } from "../../../services/rabbitmq/mocks/consumers.mock";
import { getConsumers } from "@contexts/component/functions/getConsumers";

describe('getConsumers', () => {
  it('should be call getConsumers and return info consumers', () => {
    // ARRANGE
    const expectedResult = consumers

    // ACT
    const result = getConsumers(queues)

    // ASSERT
    expect(result).toEqual(expectedResult);
  })
})
