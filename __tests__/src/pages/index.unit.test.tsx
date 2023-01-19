import React from 'react'
import { fireEvent, render, waitFor, act, } from '@testing-library/react'
import Home, { getStaticProps } from '@pages/index'
import { InferGetStaticPropsType } from 'next'
import { createComponentsMock, createPositionsComponentsMock, defineLinesQueuesBetweenExchangesConsumersMock, defineMessagePositionsMock, definePositionsComponentsMock, getConsumerMock, getLinksLinesCoordinatesMock, getQueuePositionsCoordinatesMock, usePositionMock } from '../contexts/position/mocks/position.context.mocks'
import { queues } from '../services/rabbitmq/mocks/queue.mock'
import { exchanges, exchangesPosition } from '../services/rabbitmq/mocks/exchange.mock'
import { producerPositionMessage, producers, producersPositionMessagesPosition } from '../services/rabbitmq/mocks/producer.mock'
import { consumers, consumersLines, positions as consumersPosition } from '../services/rabbitmq/mocks/consumers.mock'
import { components, componentsLines, componentsPositions } from '../contexts/position/mocks/component.context.mock'
import { COMPONENT_INFO_TYPE, COMPONENT_TYPE } from '@enums/components.enum'
import { useSchemaMock, verifyDiffContentMock } from '../contexts/schema/mocks/position.context.mocks'
import { changeAxiosConfigMock } from '../services/rabbitmq/rabbitmq.service.mock'
import * as RabbitMqService from '@services/rabbitmq/rabbitmq.service'
import { faker } from '@faker-js/faker'

jest.mock('@contexts/position/Position.context', () => {
  return {
    usePosition: () => usePositionMock
  }
})

jest.mock('@contexts/schema/Schema.context', () => {
  return {
    useSchema: () => useSchemaMock
  }
})

jest.mock('@services/rabbitmq/rabbitmq.service', () => {
  return {
    changeAxiosConfig: () => changeAxiosConfigMock()
  }
});

describe('Home', () => {
  const dataGetStaticProps: InferGetStaticPropsType<typeof getStaticProps> = { queues, exchanges, producers }


  beforeEach(() => {
    getConsumerMock.mockReturnValue(consumers)
    createComponentsMock.mockReturnValue(components)
    createPositionsComponentsMock.mockReturnValue(componentsPositions)
    definePositionsComponentsMock.mockReturnValue({ queues: componentsPositions, exchanges: exchangesPosition, producers: producerPositionMessage })
    getQueuePositionsCoordinatesMock.mockReturnValue(consumersPosition)
    defineLinesQueuesBetweenExchangesConsumersMock.mockReturnValue(componentsLines)
    getLinksLinesCoordinatesMock.mockReturnValue(consumersLines)
    defineMessagePositionsMock.mockReturnValue(producersPositionMessagesPosition)
  })

  it('should renders a index start page before useEffect page', () => {
    // ARRANGE
    const spyGetConsumers = jest.spyOn(usePositionMock, 'getConsumers')
    const spyCreateComponents = jest.spyOn(usePositionMock, 'createComponents')
    const spyCreatePositionsComponents = jest.spyOn(usePositionMock, 'createPositionsComponents')
    const spyDefinePositionsComponents = jest.spyOn(usePositionMock, 'definePositionsComponents')
    const spyGetQueuePositionsCoordinates = jest.spyOn(usePositionMock, 'getQueuePositionsCoordinates')
    const spyDefineLinesQueuesBetweenExchangesConsumers = jest.spyOn(usePositionMock, 'defineLinesQueuesBetweenExchangesConsumers')
    const spyGetLinksLinesCoordinates = jest.spyOn(usePositionMock, 'getLinksLinesCoordinates')
    const spyDefineMessagePositions = jest.spyOn(usePositionMock, 'defineMessagePositions')

    // ACT
    const { getByTestId, queryByTestId } = render(<Home {...dataGetStaticProps} />)

    const container = getByTestId('container')
    const heading = getByTestId('header')
    const boxContent = getByTestId('box-content')
    const boxEditor = getByTestId('box-editor')
    const sendMessage = getByTestId('send-message')
    const contentConfigs = getByTestId("content-configs")
    const contentComponents = getByTestId("content-components")
    const buttonInfoOutLine = queryByTestId("button-infos-colorFull")
    const buttonPasswordSecret = queryByTestId("button-secret-password")
    const inputPassword = queryByTestId("input-password")

    const producerComponents = queryByTestId("producer-component")
    const exchangeComponents = queryByTestId("exchange-component")
    const queueComponents = queryByTestId("queue-component")
    const consumerComponents = queryByTestId("consumer-component")
    const lineComponents = queryByTestId("line-component")
    const producerLineComponents = queryByTestId("producer-line-component")
    const messagesComponents = queryByTestId("message-line-component")

    // ASSERT
    expect(spyGetConsumers).toHaveBeenCalledWith(queues)
    expect(spyCreateComponents).toHaveBeenCalledWith({ queues, exchanges, producers, consumers })
    expect(spyCreatePositionsComponents).toHaveBeenCalledWith(components)
    expect(spyDefinePositionsComponents).toHaveBeenCalledWith({ positions: componentsPositions, queues, producers, exchanges })
    expect(spyGetQueuePositionsCoordinates).toHaveBeenCalledWith({ components: componentsPositions, componentType: COMPONENT_TYPE.CONSUMER })
    expect(spyDefineLinesQueuesBetweenExchangesConsumers).toHaveBeenCalledWith(componentsPositions)
    expect(spyGetLinksLinesCoordinates).toHaveBeenNthCalledWith(1, { componentLinks: componentsLines, componentType: COMPONENT_TYPE.CONSUMER })
    expect(spyGetLinksLinesCoordinates).toHaveBeenNthCalledWith(2, { componentLinks: componentsLines, componentType: COMPONENT_TYPE.BINDING })
    expect(spyDefineMessagePositions).toHaveBeenCalledWith({ queues: componentsPositions, exchanges: exchangesPosition, producers: producerPositionMessage })

    expect(container).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(boxContent).toBeInTheDocument()
    expect(boxEditor).toBeInTheDocument()
    expect(sendMessage).toBeInTheDocument()
    expect(boxContent).toBeInTheDocument()
    expect(contentConfigs).toBeInTheDocument()
    expect(contentComponents).toBeInTheDocument()
    expect(buttonInfoOutLine).toBeInTheDocument()
    expect(buttonPasswordSecret).toBeInTheDocument()
    expect(inputPassword).toBeInTheDocument()
    expect(inputPassword).toHaveProperty("type", "password")

    expect(producerComponents).toBeNull()
    expect(exchangeComponents).toBeNull()
    expect(queueComponents).toBeNull()
    expect(consumerComponents).toBeNull()
    expect(lineComponents).toBeNull()
    expect(producerLineComponents).toBeNull()
    expect(messagesComponents).toBeNull()
  })

  it('should define changes editor input code', () => {
    // ARRANGE
    const spyGetConsumers = jest.spyOn(usePositionMock, 'getConsumers')
    const spyCreateComponents = jest.spyOn(usePositionMock, 'createComponents')
    const spyCreatePositionsComponents = jest.spyOn(usePositionMock, 'createPositionsComponents')
    const spyDefinePositionsComponents = jest.spyOn(usePositionMock, 'definePositionsComponents')
    const spyGetQueuePositionsCoordinates = jest.spyOn(usePositionMock, 'getQueuePositionsCoordinates')
    const spyDefineLinesQueuesBetweenExchangesConsumers = jest.spyOn(usePositionMock, 'defineLinesQueuesBetweenExchangesConsumers')
    const spyGetLinksLinesCoordinates = jest.spyOn(usePositionMock, 'getLinksLinesCoordinates')
    const spyDefineMessagePositions = jest.spyOn(usePositionMock, 'defineMessagePositions')

    verifyDiffContentMock.mockReturnValueOnce(false).mockReturnValueOnce(false).mockReturnValueOnce(false)

    const spyVerifyDiffContent = jest.spyOn(useSchemaMock, 'verifyDiffContent')

    // ACT
    const { getByTestId, queryByTestId } = render(<Home {...dataGetStaticProps} />)

    const container = getByTestId('container')
    const heading = getByTestId('header')
    const boxContent = getByTestId('box-content')
    const boxEditor = getByTestId('box-editor')
    const sendMessage = getByTestId('send-message')
    const contentConfigs = getByTestId("content-configs")
    const contentComponents = getByTestId("content-components")
    const buttonInfoOutLine = getByTestId("button-infos-colorFull")
    const buttonPasswordSecret = getByTestId("button-secret-password")
    const inputPassword = getByTestId("input-password")

    const producerComponents = queryByTestId("producer-component")
    const exchangeComponents = queryByTestId("exchange-component")
    const queueComponents = queryByTestId("queue-component")
    const consumerComponents = queryByTestId("consumer-component")
    const lineComponents = queryByTestId("line-component")
    const producerLineComponents = queryByTestId("producer-line-component")
    const messagesComponents = queryByTestId("message-line-component")

    // ASSERT
    expect(spyGetConsumers).toHaveBeenCalledWith(queues)
    expect(spyCreateComponents).toHaveBeenCalledWith({ queues, exchanges, producers, consumers })
    expect(spyCreatePositionsComponents).toHaveBeenCalledWith(components)
    expect(spyDefinePositionsComponents).toHaveBeenCalledWith({ positions: componentsPositions, queues, producers, exchanges })
    expect(spyGetQueuePositionsCoordinates).toHaveBeenCalledWith({ components: componentsPositions, componentType: COMPONENT_TYPE.CONSUMER })
    expect(spyDefineLinesQueuesBetweenExchangesConsumers).toHaveBeenCalledWith(componentsPositions)
    expect(spyGetLinksLinesCoordinates).toHaveBeenNthCalledWith(1, { componentLinks: componentsLines, componentType: COMPONENT_TYPE.CONSUMER })
    expect(spyGetLinksLinesCoordinates).toHaveBeenNthCalledWith(2, { componentLinks: componentsLines, componentType: COMPONENT_TYPE.BINDING })
    expect(spyDefineMessagePositions).toHaveBeenCalledWith({ queues: componentsPositions, exchanges: exchangesPosition, producers: producerPositionMessage })
    expect(spyVerifyDiffContent).toHaveBeenNthCalledWith(1, { components: queues, componentsEditor: [], type: COMPONENT_INFO_TYPE.QUEUE })
    expect(spyVerifyDiffContent).toHaveBeenNthCalledWith(2, { components: exchanges, componentsEditor: [], type: COMPONENT_INFO_TYPE.EXCHANGE })
    expect(spyVerifyDiffContent).toHaveBeenNthCalledWith(3, { components: producers, componentsEditor: [], type: COMPONENT_INFO_TYPE.PRODUCER })

    expect(container).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(boxContent).toBeInTheDocument()
    expect(boxEditor).toBeInTheDocument()
    expect(sendMessage).toBeInTheDocument()
    expect(boxContent).toBeInTheDocument()
    expect(contentConfigs).toBeInTheDocument()
    expect(contentComponents).toBeInTheDocument()
    expect(buttonInfoOutLine).toBeInTheDocument()
    expect(buttonPasswordSecret).toBeInTheDocument()
    expect(inputPassword).toBeInTheDocument()
    expect(inputPassword).toHaveProperty("type", "password")

    expect(producerComponents).toBeNull()
    expect(exchangeComponents).toBeNull()
    expect(queueComponents).toBeNull()
    expect(consumerComponents).toBeNull()
    expect(lineComponents).toBeNull()
    expect(producerLineComponents).toBeNull()
    expect(messagesComponents).toBeNull()
  })

  it('should define changes editor input code when change only !queueIsEqual', () => {
    // ARRANGE
    const spyGetConsumers = jest.spyOn(usePositionMock, 'getConsumers')
    const spyCreateComponents = jest.spyOn(usePositionMock, 'createComponents')
    const spyCreatePositionsComponents = jest.spyOn(usePositionMock, 'createPositionsComponents')
    const spyDefinePositionsComponents = jest.spyOn(usePositionMock, 'definePositionsComponents')
    const spyGetQueuePositionsCoordinates = jest.spyOn(usePositionMock, 'getQueuePositionsCoordinates')
    const spyDefineLinesQueuesBetweenExchangesConsumers = jest.spyOn(usePositionMock, 'defineLinesQueuesBetweenExchangesConsumers')
    const spyGetLinksLinesCoordinates = jest.spyOn(usePositionMock, 'getLinksLinesCoordinates')
    const spyDefineMessagePositions = jest.spyOn(usePositionMock, 'defineMessagePositions')

    verifyDiffContentMock.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce(false)

    const spyVerifyDiffContent = jest.spyOn(useSchemaMock, 'verifyDiffContent')

    // ACT
    const { getByTestId, queryByTestId } = render(<Home {...dataGetStaticProps} />)

    const container = getByTestId('container')
    const heading = getByTestId('header')
    const boxContent = getByTestId('box-content')
    const boxEditor = getByTestId('box-editor')
    const sendMessage = getByTestId('send-message')
    const contentConfigs = getByTestId("content-configs")
    const contentComponents = getByTestId("content-components")
    const buttonInfoOutLine = getByTestId("button-infos-colorFull")
    const buttonPasswordSecret = getByTestId("button-secret-password")
    const inputPassword = getByTestId("input-password")

    const producerComponents = queryByTestId("producer-component")
    const exchangeComponents = queryByTestId("exchange-component")
    const queueComponents = queryByTestId("queue-component")
    const consumerComponents = queryByTestId("consumer-component")
    const lineComponents = queryByTestId("line-component")
    const producerLineComponents = queryByTestId("producer-line-component")
    const messagesComponents = queryByTestId("message-line-component")

    // ASSERT
    expect(spyGetConsumers).toHaveBeenCalledWith(queues)
    expect(spyCreateComponents).toHaveBeenCalledWith({ queues, exchanges, producers, consumers })
    expect(spyCreatePositionsComponents).toHaveBeenCalledWith(components)
    expect(spyDefinePositionsComponents).toHaveBeenCalledWith({ positions: componentsPositions, queues, producers, exchanges })
    expect(spyGetQueuePositionsCoordinates).toHaveBeenCalledWith({ components: componentsPositions, componentType: COMPONENT_TYPE.CONSUMER })
    expect(spyDefineLinesQueuesBetweenExchangesConsumers).toHaveBeenCalledWith(componentsPositions)
    expect(spyGetLinksLinesCoordinates).toHaveBeenNthCalledWith(1, { componentLinks: componentsLines, componentType: COMPONENT_TYPE.CONSUMER })
    expect(spyGetLinksLinesCoordinates).toHaveBeenNthCalledWith(2, { componentLinks: componentsLines, componentType: COMPONENT_TYPE.BINDING })
    expect(spyDefineMessagePositions).toHaveBeenCalledWith({ queues: componentsPositions, exchanges: exchangesPosition, producers: producerPositionMessage })
    expect(spyVerifyDiffContent).toHaveBeenNthCalledWith(1, { components: queues, componentsEditor: [], type: COMPONENT_INFO_TYPE.QUEUE })
    expect(spyVerifyDiffContent).toHaveBeenNthCalledWith(2, { components: exchanges, componentsEditor: [], type: COMPONENT_INFO_TYPE.EXCHANGE })
    expect(spyVerifyDiffContent).toHaveBeenNthCalledWith(3, { components: producers, componentsEditor: [], type: COMPONENT_INFO_TYPE.PRODUCER })

    expect(container).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(boxContent).toBeInTheDocument()
    expect(boxEditor).toBeInTheDocument()
    expect(sendMessage).toBeInTheDocument()
    expect(boxContent).toBeInTheDocument()
    expect(contentConfigs).toBeInTheDocument()
    expect(contentComponents).toBeInTheDocument()
    expect(buttonInfoOutLine).toBeInTheDocument()
    expect(buttonPasswordSecret).toBeInTheDocument()
    expect(inputPassword).toBeInTheDocument()
    expect(inputPassword).toHaveProperty("type", "password")

    expect(producerComponents).toBeNull()
    expect(exchangeComponents).toBeNull()
    expect(queueComponents).toBeNull()
    expect(consumerComponents).toBeNull()
    expect(lineComponents).toBeNull()
    expect(producerLineComponents).toBeNull()
    expect(messagesComponents).toBeNull()
  })

  it('should define changes editor input code when change only !exchangeIsEqual', () => {
    // ARRANGE
    const spyGetConsumers = jest.spyOn(usePositionMock, 'getConsumers')
    const spyCreateComponents = jest.spyOn(usePositionMock, 'createComponents')
    const spyCreatePositionsComponents = jest.spyOn(usePositionMock, 'createPositionsComponents')
    const spyDefinePositionsComponents = jest.spyOn(usePositionMock, 'definePositionsComponents')
    const spyGetQueuePositionsCoordinates = jest.spyOn(usePositionMock, 'getQueuePositionsCoordinates')
    const spyDefineLinesQueuesBetweenExchangesConsumers = jest.spyOn(usePositionMock, 'defineLinesQueuesBetweenExchangesConsumers')
    const spyGetLinksLinesCoordinates = jest.spyOn(usePositionMock, 'getLinksLinesCoordinates')
    const spyDefineMessagePositions = jest.spyOn(usePositionMock, 'defineMessagePositions')

    verifyDiffContentMock.mockReturnValueOnce(false).mockReturnValueOnce(true).mockReturnValueOnce(false)

    const spyVerifyDiffContent = jest.spyOn(useSchemaMock, 'verifyDiffContent')

    // ACT
    const { getByTestId, queryByTestId } = render(<Home {...dataGetStaticProps} />)

    const container = getByTestId('container')
    const heading = getByTestId('header')
    const boxContent = getByTestId('box-content')
    const boxEditor = getByTestId('box-editor')
    const sendMessage = getByTestId('send-message')
    const contentConfigs = getByTestId("content-configs")
    const contentComponents = getByTestId("content-components")
    const buttonInfoOutLine = getByTestId("button-infos-colorFull")
    const buttonPasswordSecret = getByTestId("button-secret-password")
    const inputPassword = getByTestId("input-password")

    const producerComponents = queryByTestId("producer-component")
    const exchangeComponents = queryByTestId("exchange-component")
    const queueComponents = queryByTestId("queue-component")
    const consumerComponents = queryByTestId("consumer-component")
    const lineComponents = queryByTestId("line-component")
    const producerLineComponents = queryByTestId("producer-line-component")
    const messagesComponents = queryByTestId("message-line-component")

    // ASSERT
    expect(spyGetConsumers).toHaveBeenCalledWith(queues)
    expect(spyCreateComponents).toHaveBeenCalledWith({ queues, exchanges, producers, consumers })
    expect(spyCreatePositionsComponents).toHaveBeenCalledWith(components)
    expect(spyDefinePositionsComponents).toHaveBeenCalledWith({ positions: componentsPositions, queues, producers, exchanges })
    expect(spyGetQueuePositionsCoordinates).toHaveBeenCalledWith({ components: componentsPositions, componentType: COMPONENT_TYPE.CONSUMER })
    expect(spyDefineLinesQueuesBetweenExchangesConsumers).toHaveBeenCalledWith(componentsPositions)
    expect(spyGetLinksLinesCoordinates).toHaveBeenNthCalledWith(1, { componentLinks: componentsLines, componentType: COMPONENT_TYPE.CONSUMER })
    expect(spyGetLinksLinesCoordinates).toHaveBeenNthCalledWith(2, { componentLinks: componentsLines, componentType: COMPONENT_TYPE.BINDING })
    expect(spyDefineMessagePositions).toHaveBeenCalledWith({ queues: componentsPositions, exchanges: exchangesPosition, producers: producerPositionMessage })
    expect(spyVerifyDiffContent).toHaveBeenNthCalledWith(1, { components: queues, componentsEditor: [], type: COMPONENT_INFO_TYPE.QUEUE })
    expect(spyVerifyDiffContent).toHaveBeenNthCalledWith(2, { components: exchanges, componentsEditor: [], type: COMPONENT_INFO_TYPE.EXCHANGE })
    expect(spyVerifyDiffContent).toHaveBeenNthCalledWith(3, { components: producers, componentsEditor: [], type: COMPONENT_INFO_TYPE.PRODUCER })

    expect(container).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(boxContent).toBeInTheDocument()
    expect(boxEditor).toBeInTheDocument()
    expect(sendMessage).toBeInTheDocument()
    expect(boxContent).toBeInTheDocument()
    expect(contentConfigs).toBeInTheDocument()
    expect(contentComponents).toBeInTheDocument()
    expect(buttonInfoOutLine).toBeInTheDocument()
    expect(buttonPasswordSecret).toBeInTheDocument()
    expect(inputPassword).toBeInTheDocument()
    expect(inputPassword).toHaveProperty("type", "password")

    expect(producerComponents).toBeNull()
    expect(exchangeComponents).toBeNull()
    expect(queueComponents).toBeNull()
    expect(consumerComponents).toBeNull()
    expect(lineComponents).toBeNull()
    expect(producerLineComponents).toBeNull()
    expect(messagesComponents).toBeNull()
  })


  it('should define changes editor input code when change only !exchangeIsEqual', () => {
    // ARRANGE
    const spyGetConsumers = jest.spyOn(usePositionMock, 'getConsumers')
    const spyCreateComponents = jest.spyOn(usePositionMock, 'createComponents')
    const spyCreatePositionsComponents = jest.spyOn(usePositionMock, 'createPositionsComponents')
    const spyDefinePositionsComponents = jest.spyOn(usePositionMock, 'definePositionsComponents')
    const spyGetQueuePositionsCoordinates = jest.spyOn(usePositionMock, 'getQueuePositionsCoordinates')
    const spyDefineLinesQueuesBetweenExchangesConsumers = jest.spyOn(usePositionMock, 'defineLinesQueuesBetweenExchangesConsumers')
    const spyGetLinksLinesCoordinates = jest.spyOn(usePositionMock, 'getLinksLinesCoordinates')
    const spyDefineMessagePositions = jest.spyOn(usePositionMock, 'defineMessagePositions')

    verifyDiffContentMock.mockReturnValueOnce(false).mockReturnValueOnce(true).mockReturnValueOnce(false)

    const spyVerifyDiffContent = jest.spyOn(useSchemaMock, 'verifyDiffContent')

    // ACT
    const { getByTestId, queryByTestId } = render(<Home {...dataGetStaticProps} />)

    const container = getByTestId('container')
    const heading = getByTestId('header')
    const boxContent = getByTestId('box-content')
    const boxEditor = getByTestId('box-editor')
    const sendMessage = getByTestId('send-message')
    const contentConfigs = getByTestId("content-configs")
    const contentComponents = getByTestId("content-components")
    const buttonInfoOutLine = getByTestId("button-infos-colorFull")
    const buttonPasswordSecret = getByTestId("button-secret-password")
    const inputPassword = getByTestId("input-password")

    const producerComponents = queryByTestId("producer-component")
    const exchangeComponents = queryByTestId("exchange-component")
    const queueComponents = queryByTestId("queue-component")
    const consumerComponents = queryByTestId("consumer-component")
    const lineComponents = queryByTestId("line-component")
    const producerLineComponents = queryByTestId("producer-line-component")
    const messagesComponents = queryByTestId("message-line-component")

    // ASSERT
    expect(spyGetConsumers).toHaveBeenCalledWith(queues)
    expect(spyCreateComponents).toHaveBeenCalledWith({ queues, exchanges, producers, consumers })
    expect(spyCreatePositionsComponents).toHaveBeenCalledWith(components)
    expect(spyDefinePositionsComponents).toHaveBeenCalledWith({ positions: componentsPositions, queues, producers, exchanges })
    expect(spyGetQueuePositionsCoordinates).toHaveBeenCalledWith({ components: componentsPositions, componentType: COMPONENT_TYPE.CONSUMER })
    expect(spyDefineLinesQueuesBetweenExchangesConsumers).toHaveBeenCalledWith(componentsPositions)
    expect(spyGetLinksLinesCoordinates).toHaveBeenNthCalledWith(1, { componentLinks: componentsLines, componentType: COMPONENT_TYPE.CONSUMER })
    expect(spyGetLinksLinesCoordinates).toHaveBeenNthCalledWith(2, { componentLinks: componentsLines, componentType: COMPONENT_TYPE.BINDING })
    expect(spyDefineMessagePositions).toHaveBeenCalledWith({ queues: componentsPositions, exchanges: exchangesPosition, producers: producerPositionMessage })
    expect(spyVerifyDiffContent).toHaveBeenNthCalledWith(1, { components: queues, componentsEditor: [], type: COMPONENT_INFO_TYPE.QUEUE })
    expect(spyVerifyDiffContent).toHaveBeenNthCalledWith(2, { components: exchanges, componentsEditor: [], type: COMPONENT_INFO_TYPE.EXCHANGE })
    expect(spyVerifyDiffContent).toHaveBeenNthCalledWith(3, { components: producers, componentsEditor: [], type: COMPONENT_INFO_TYPE.PRODUCER })

    expect(container).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(boxContent).toBeInTheDocument()
    expect(boxEditor).toBeInTheDocument()
    expect(sendMessage).toBeInTheDocument()
    expect(boxContent).toBeInTheDocument()
    expect(contentConfigs).toBeInTheDocument()
    expect(contentComponents).toBeInTheDocument()
    expect(buttonInfoOutLine).toBeInTheDocument()
    expect(buttonPasswordSecret).toBeInTheDocument()
    expect(inputPassword).toBeInTheDocument()
    expect(inputPassword).toHaveProperty("type", "password")

    expect(producerComponents).toBeNull()
    expect(exchangeComponents).toBeNull()
    expect(queueComponents).toBeNull()
    expect(consumerComponents).toBeNull()
    expect(lineComponents).toBeNull()
    expect(producerLineComponents).toBeNull()
    expect(messagesComponents).toBeNull()
  })

  it('should info places, when click infos to change icons', async () => {
    // ARRANGE
    // ACT
    const { getByTestId, queryByTestId } = render(<Home {...dataGetStaticProps} />)

    const buttonInfo = getByTestId("button-infos")
    fireEvent(buttonInfo, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))

    const buttonInfoOutLine = getByTestId("button-infos-outline")

    // ASSERT
    expect(buttonInfoOutLine).toBeInTheDocument()
  })

  it('should visible password when click button value', async () => {
    // ARRANGE
    // ACT
    const { getByTestId, queryByTestId } = render(<Home {...dataGetStaticProps} />)

    const buttonPassword = getByTestId("button-change-type-input-password")

    fireEvent(buttonPassword, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))

    const inputPassword = queryByTestId("input-password")
    const buttonPasswordSecret = getByTestId("button-visible-password")
    // ASSERT
    expect(inputPassword).toBeInTheDocument()
    expect(inputPassword).toHaveAttribute("type", "text")
    expect(buttonPasswordSecret).toBeInTheDocument()
  })

  it("should display required error when value is invalid", async () => {
    const changeConfigBaseUrl = jest.spyOn(RabbitMqService, 'changeAxiosConfig')

    const { getByTestId, findByTestId } = render(<Home {...dataGetStaticProps} />)

    const buttonSubmit = getByTestId("button-config-base-url")

    act(() => {
      fireEvent.click(buttonSubmit);
    })

    const textErrorBaseUrl = await findByTestId("text-error-baseUrl")
    const textErrorUsername = await findByTestId("text-error-username")
    const textErrorPassword = await findByTestId("text-error-password")
    const textErrorVHost = await findByTestId("text-error-vHost")

    await waitFor(() => {
      expect(textErrorBaseUrl).toBeDefined();
      expect(textErrorUsername).toBeDefined();
      expect(textErrorPassword).toBeDefined();
      expect(textErrorVHost).toBeDefined();

      expect(changeConfigBaseUrl).not.toBeCalled();
    });
  });

  it("should display matching error when baseUrl is invalid", async () => {
    const invalidBaseUrl = faker.name.firstName()

    const changeConfigBaseUrl = jest.spyOn(RabbitMqService, 'changeAxiosConfig')

    const { getByTestId, findByTestId } = render(<Home {...dataGetStaticProps} />)

    const inputBaseUrl = getByTestId("input-baseUrl")

    fireEvent.input(inputBaseUrl, {
      target: {
        value: invalidBaseUrl
      }
    })

    const buttonSubmit = getByTestId("button-config-base-url")

    act(() => {
      fireEvent.click(buttonSubmit);
    })

    const textErrorBaseUrl = await findByTestId("text-error-baseUrl")
    const textErrorUsername = await findByTestId("text-error-username")
    const textErrorPassword = await findByTestId("text-error-password")
    const textErrorVHost = await findByTestId("text-error-vHost")

    await waitFor(() => {
      expect(textErrorBaseUrl).toBeDefined();
      expect(inputBaseUrl).toHaveValue(invalidBaseUrl);
      expect(textErrorUsername).toBeDefined();
      expect(textErrorPassword).toBeDefined();
      expect(textErrorVHost).toBeDefined();

      expect(changeConfigBaseUrl).not.toBeCalled();
    });
  });

  it("should display matching error when username, password and vHost is empty", async () => {
    const baseUrl = "http://localhost:3000"

    const changeConfigBaseUrl = jest.spyOn(RabbitMqService, 'changeAxiosConfig')

    const { getByTestId, findByTestId } = render(<Home {...dataGetStaticProps} />)

    const inputBaseUrl = getByTestId("input-baseUrl")
    fireEvent.input(inputBaseUrl, {
      target: {
        value: baseUrl
      }
    })

    const buttonSubmit = getByTestId("button-config-base-url")

    act(() => {
      fireEvent.click(buttonSubmit);
    })

    const textErrorUsername = await findByTestId("text-error-username")
    const textErrorPassword = await findByTestId("text-error-password")
    const textErrorVHost = await findByTestId("text-error-vHost")

    await waitFor(() => {
      expect(inputBaseUrl).toHaveValue(baseUrl);
      expect(textErrorUsername).toBeDefined();
      expect(textErrorPassword).toBeDefined();
      expect(textErrorVHost).toBeDefined();

      expect(changeConfigBaseUrl).not.toBeCalled();
    });
  });

  it("should display matching error when password and vHost is empty", async () => {
    const baseUrl = "http://localhost:3000"
    const username = faker.name.firstName()

    const changeConfigBaseUrl = jest.spyOn(RabbitMqService, 'changeAxiosConfig')

    const { getByTestId, findByTestId } = render(<Home {...dataGetStaticProps} />)

    const inputBaseUrl = getByTestId("input-baseUrl")
    const inputUsername = getByTestId("input-username")

    fireEvent.input(inputBaseUrl, {
      target: {
        value: baseUrl
      }
    })
    fireEvent.input(inputUsername, {
      target: {
        value: username
      }
    })

    const buttonSubmit = getByTestId("button-config-base-url")
    act(() => {
      fireEvent.click(buttonSubmit);
    })

    const textErrorPassword = await findByTestId("text-error-password")
    const textErrorVHost = await findByTestId("text-error-vHost")

    await waitFor(() => {
      expect(inputBaseUrl).toHaveValue(baseUrl);
      expect(inputUsername).toHaveValue(username);
      expect(textErrorPassword).toBeDefined();
      expect(textErrorVHost).toBeDefined();

      expect(changeConfigBaseUrl).not.toBeCalled();
    });
  });

  it("should display matching error when vHost is empty", async () => {
    const baseUrl = "http://localhost:3000"
    const username = faker.name.firstName()
    const password = faker.internet.password()

    const changeConfigBaseUrl = jest.spyOn(RabbitMqService, 'changeAxiosConfig')

    const { getByTestId, findByTestId } = render(<Home {...dataGetStaticProps} />)

    const inputBaseUrl = getByTestId("input-baseUrl")
    const inputUsername = getByTestId("input-username")
    const inputPassword = getByTestId("input-password")

    fireEvent.input(inputBaseUrl, {
      target: {
        value: baseUrl
      }
    })
    fireEvent.input(inputUsername, {
      target: {
        value: username
      }
    })
    fireEvent.input(inputPassword, {
      target: {
        value: password
      }
    })

    const buttonSubmit = getByTestId("button-config-base-url")

    act(() => {
      fireEvent.click(buttonSubmit);
    })

    const textErrorVHost = await findByTestId("text-error-vHost")

    await waitFor(() => {
      expect(inputBaseUrl).toHaveValue(baseUrl);
      expect(inputUsername).toHaveValue(username);
      expect(inputPassword).toHaveValue(password);
      expect(textErrorVHost).toBeDefined();

      expect(changeConfigBaseUrl).not.toBeCalled();
    });
  });

  it("should display is success when information is valid", async () => {
    const baseUrl = "http://localhost:3000"
    const username = faker.name.firstName()
    const password = faker.internet.password()
    const vHost = faker.random.word()
    changeAxiosConfigMock.mockResolvedValue({
      queues, exchanges, producers
    })


    const { getByTestId } = render(<Home {...dataGetStaticProps} />)

    const inputBaseUrl = getByTestId("input-baseUrl")
    const inputUsername = getByTestId("input-username")
    const inputPassword = getByTestId("input-password")
    const inputVHost = getByTestId("input-vHost")

    act(() => {
      fireEvent.input(inputBaseUrl, {
        target: {
          value: baseUrl
        }
      })
      fireEvent.input(inputUsername, {
        target: {
          value: username
        }
      })
      fireEvent.input(inputPassword, {
        target: {
          value: password
        }
      })
      fireEvent.input(inputVHost, {
        target: {
          value: vHost
        }
      })
    })

    const buttonSubmit = getByTestId("button-config-base-url")

    act(() => {
      fireEvent.click(buttonSubmit);
    })

    await waitFor(() => {

      expect(inputBaseUrl).toHaveValue(baseUrl);
      expect(inputUsername).toHaveValue(username);
      expect(inputPassword).toHaveValue(password);
      expect(inputVHost).toHaveValue(vHost);
      expect(changeAxiosConfigMock).toBeCalled();
    });
  });
})
