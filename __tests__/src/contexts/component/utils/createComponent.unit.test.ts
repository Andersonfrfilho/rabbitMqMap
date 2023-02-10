import { createComponent } from "@contexts/component/utils/createComponent";
import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface";
import { DEPTH } from "@enums/positions.enum";
import { CONSUMER_DIMENSION } from "@constants/components.constant";
import { consumers } from "../../../../src/services/rabbitmq/mocks/consumers.mock";
import { Dimension } from "@contexts/interfaces/components.interface";

describe('createComponent', () => {
  it('should be call createComponent and return info component', () => {
    // ARRANGE
    const [widthDimension, heightDimension, depthDimension] = CONSUMER_DIMENSION
    const dimension: Dimension = {
      width: widthDimension, height: heightDimension, depth: depthDimension
    }
    const expectedComponent = { depth: DEPTH.CONSUMER, dimension, quantity: consumers.length, items: consumers }

    // ACT
    const componentConsumers = createComponent<Consumer>({
      items: consumers, depth: DEPTH.CONSUMER, dimensions: CONSUMER_DIMENSION
    })

    // ASSERT
    expect(componentConsumers).toEqual(expectedComponent);
  })
})
