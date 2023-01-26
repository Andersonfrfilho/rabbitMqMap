import { MessageFormParam, addMessageInProducers } from "@contexts/component/functions/addMessageInProducers"
import { faker } from "@faker-js/faker"
import { producers } from "../../../services/rabbitmq/mocks/producer.mock"
import { uuidV4Fake } from "../../../../mocks/uuid.mock";
import { colorFake } from "../../../utils/mocks/random-color.mock";
import { createPositionsComponents } from "@contexts/position/functions/createPositionComponents";
import { components } from "../mocks/component.context.mock";

jest.mock('uuid', () => {
  return {
    v4: () => uuidV4Fake
  }
});

jest.mock('@utils/random-color', () => {
  return {
    randomColor: () => colorFake
  }
})

describe('createPositionsComponents', () => {
  it('should be call addMessageInProducers and return info messages to producers', () => {
    // ARRANGE
    const newMessage: MessageFormParam = {
      exchange: faker.name.firstName(),
      payload: "{}",
      producerId: producers[0].id,
      routeKey: faker.name.firstName()
    }

    const expectedMessage = {
      exchange: newMessage.exchange,
      payload: "{}",
      routeKey: newMessage.routeKey,
      id: uuidV4Fake,
      color: colorFake,
    }
    // ACT
    const producersMessages = createPositionsComponents(components)

    // ASSERT
    expect(producersMessages).toEqual(expectedMessage);
  })
})
