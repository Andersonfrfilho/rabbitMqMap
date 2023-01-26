import { MessageFormParam, addMessageInProducers } from "@contexts/component/functions/addMessageInProducers"
import { faker } from "@faker-js/faker"
import { moreOneProducers, producers } from "../../../services/rabbitmq/mocks/producer.mock"
import { uuidV4Fake } from "../../../../mocks/uuid.mock";
import { colorFake } from "../../../utils/mocks/random-color.mock";

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

describe('addMessageInProducers', () => {
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
    const producersMessages = addMessageInProducers({
      message: newMessage, producers: moreOneProducers
    })

    // ASSERT
    expect(producersMessages[0].messages.pop()).toEqual(expectedMessage);
  })
})
