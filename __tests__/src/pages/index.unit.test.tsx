import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Home, { getStaticProps } from '@pages/index'
import { InferGetStaticPropsType } from 'next'
import { createComponentsMock, createPositionsComponentsMock, defineLinesQueuesBetweenExchangesConsumersMock, defineMessagePositionsMock, definePositionsComponentsMock, getConsumerMock, getLinksLinesCoordinatesMock, getQueuePositionsCoordinatesMock, usePositionMock } from '../contexts/position/mocks/position.context.mocks'
import { queues } from '../services/rabbitmq/mocks/queue.mock'
import { exchanges, exchangesPosition } from '../services/rabbitmq/mocks/exchange.mock'
import { producerPositionMessage, producers, linesPositions as producersPositionMessagesLines, producersPositionMessagesPosition } from '../services/rabbitmq/mocks/producer.mock'
import { bindingsLines, consumers, consumersLines, positions as consumersPosition } from '../services/rabbitmq/mocks/consumers.mock'
import { components, componentsLines, componentsPositions } from '../contexts/position/mocks/component.context.mock'
import { COMPONENT_TYPE } from '@enums/components.enum'
import * as ReactHookForm from 'react-hook-form'


jest.mock('@contexts/position/Position.context', () => {
  return {
    usePosition: () => usePositionMock
  }
})
const registerBaseUrlMock = jest.fn()
describe('Home', () => {

  beforeEach(() => {
    getConsumerMock.mockReturnValue(consumers)
    createComponentsMock.mockReturnValue(components)
    createPositionsComponentsMock.mockReturnValue(componentsPositions)
    definePositionsComponentsMock.mockReturnValue({ queues: componentsPositions, exchanges: exchangesPosition, producers: producerPositionMessage })
    getQueuePositionsCoordinatesMock.mockReturnValue(consumersPosition)
    defineLinesQueuesBetweenExchangesConsumersMock.mockReturnValue(componentsLines)
    getLinksLinesCoordinatesMock.mockReturnValueOnce(consumersLines).mockReturnValueOnce(bindingsLines)
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

    const data: InferGetStaticPropsType<typeof getStaticProps> = { queues, exchanges, producers }

    // ACT
    render(<Home {...data} />)

    const container = screen.getByTestId('container')
    const heading = screen.getByTestId('header')
    const boxContent = screen.getByTestId('box-content')
    const boxEditor = screen.getByTestId('box-editor')
    const sendMessage = screen.getByTestId('send-message')
    const contentConfigs = screen.getByTestId("content-configs")
    const contentComponents = screen.getByTestId("content-components")
    const buttonInfoOutLine = screen.queryByTestId("button-infos-colorFull")
    const buttonPasswordSecret = screen.queryByTestId("button-secret-password")
    const inputPassword = screen.queryByTestId("input-password")

    const producerComponents = screen.queryByTestId("producer-component")
    const exchangeComponents = screen.queryByTestId("exchange-component")
    const queueComponents = screen.queryByTestId("queue-component")
    const consumerComponents = screen.queryByTestId("consumer-component")
    const lineComponents = screen.queryByTestId("line-component")
    const producerLineComponents = screen.queryByTestId("producer-line-component")
    const messagesComponents = screen.queryByTestId("message-line-component")


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
    const spyReactHookForm = jest.spyOn(ReactHookForm, 'useForm').mockReturnValue({
      register: () => ({
        baseUrl: {}
      }), handleSubmit: {}, formState: { errors: { baseUrl: 'uhull' } }
    })
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => [false, () => null])
      .mockImplementationOnce(() => [false, () => null])
    registerBaseUrlMock.mockReturnValue(["uhull"])
    const spyGetConsumers = jest.spyOn(usePositionMock, 'getConsumers')
    const spyCreateComponents = jest.spyOn(usePositionMock, 'createComponents')
    const spyCreatePositionsComponents = jest.spyOn(usePositionMock, 'createPositionsComponents')
    const spyDefinePositionsComponents = jest.spyOn(usePositionMock, 'definePositionsComponents')
    const spyGetQueuePositionsCoordinates = jest.spyOn(usePositionMock, 'getQueuePositionsCoordinates')
    const spyDefineLinesQueuesBetweenExchangesConsumers = jest.spyOn(usePositionMock, 'defineLinesQueuesBetweenExchangesConsumers')
    const spyGetLinksLinesCoordinates = jest.spyOn(usePositionMock, 'getLinksLinesCoordinates')
    const spyDefineMessagePositions = jest.spyOn(usePositionMock, 'defineMessagePositions')

    const data: InferGetStaticPropsType<typeof getStaticProps> = { queues, exchanges, producers }

    // ACT
    render(<Home {...data} />)

    const container = screen.getByTestId('container')
    const heading = screen.getByTestId('header')
    const boxContent = screen.getByTestId('box-content')
    const boxEditor = screen.getByTestId('box-editor')
    const sendMessage = screen.getByTestId('send-message')
    const contentConfigs = screen.getByTestId("content-configs")
    const contentComponents = screen.getByTestId("content-components")
    const buttonInfoOutLine = screen.getByTestId("button-infos-colorFull")
    const buttonPasswordSecret = screen.getByTestId("button-secret-password")
    const inputPassword = screen.getByTestId("input-password")
    const editorCode = screen.getByTestId("code-editor")

    const producerComponents = screen.queryByTestId("producer-component")
    const exchangeComponents = screen.queryByTestId("exchange-component")
    const queueComponents = screen.queryByTestId("queue-component")
    const consumerComponents = screen.queryByTestId("consumer-component")
    const lineComponents = screen.queryByTestId("line-component")
    const producerLineComponents = screen.queryByTestId("producer-line-component")
    const messagesComponents = screen.queryByTestId("message-line-component")

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

  it('should info places, when click infos to change icons', async () => {
    // ARRANGE
    const data: InferGetStaticPropsType<typeof getStaticProps> = { queues, exchanges, producers }

    // ACT
    render(<Home {...data} />)

    const buttonInfo = screen.getByTestId("button-infos")
    fireEvent(buttonInfo, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))

    const buttonInfoOutLine = screen.getByTestId("button-infos-outline")

    // ASSERT
    expect(buttonInfoOutLine).toBeInTheDocument()
  })

  it('should visible password when click button value', async () => {
    // ARRANGE
    const data: InferGetStaticPropsType<typeof getStaticProps> = { queues, exchanges, producers }

    // ACT
    render(<Home {...data} />)

    const buttonPassword = screen.getByTestId("button-change-type-input-password")

    fireEvent(buttonPassword, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))

    const inputPassword = screen.queryByTestId("input-password")
    const buttonPasswordSecret = screen.getByTestId("button-visible-password")
    // ASSERT
    expect(inputPassword).toBeInTheDocument()
    expect(inputPassword).toHaveAttribute("type", "text")
    expect(buttonPasswordSecret).toBeInTheDocument()
  })
})
