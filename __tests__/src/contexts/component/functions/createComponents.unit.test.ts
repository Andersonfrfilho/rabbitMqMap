import { producers } from "../../../services/rabbitmq/mocks/producer.mock"
import { uuidV4Fake } from "../../../../mocks/uuid.mock";
import { colorFake } from "../../../utils/mocks/random-color.mock";
import { createComponents } from "@contexts/component/functions/createComponents";
import { exchanges } from "../../../services/rabbitmq/mocks/exchange.mock";
import { queues } from "../../../services/rabbitmq/mocks/queue.mock";
import { consumers } from "../../../services/rabbitmq/mocks/consumers.mock";
import { createComponent } from "@contexts/component/utils/createComponent";
import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface";
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { QueueBindingConsumerRegister } from "@services/rabbitmq/interfaces/queue.interface";
import { Producer } from "@services/rabbitmq/interfaces/producer.interface";
import { DEPTH } from "@enums/positions.enum";
import { CONSUMER_DIMENSION, EXCHANGE_DIMENSION, PRODUCER_DIMENSION, QUEUE_DIMENSION } from "@constants/components.constant";

describe('createComponents', () => {
  it('should be call createComponents and return a components', () => {
    // ARRANGE
    const expectedResult = {
      consumer: createComponent<Consumer>({
        items: consumers, depth: DEPTH.CONSUMER, dimensions: CONSUMER_DIMENSION
      }),
      exchange: createComponent<Exchange>({ items: exchanges, depth: DEPTH.EXCHANGE, dimensions: EXCHANGE_DIMENSION }),
      queue: createComponent<QueueBindingConsumerRegister>({ items: queues, depth: DEPTH.QUEUE, dimensions: QUEUE_DIMENSION }),
      producer: createComponent<Producer>({ items: producers, depth: DEPTH.PRODUCER, dimensions: PRODUCER_DIMENSION }),
    }

    // ACT
    const components = createComponents({
      producers, consumers, exchanges, queues
    })

    // ASSERT
    expect(components).toEqual(expectedResult);
  })
})
