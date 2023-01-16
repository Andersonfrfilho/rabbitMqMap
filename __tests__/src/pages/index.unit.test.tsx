import { render, screen } from '@testing-library/react'
import Home, { getStaticProps } from '@pages/index'
import { InferGetStaticPropsType } from 'next'
import { createComponentsMock, createPositionsComponentsMock, defineLinesQueuesBetweenExchangesConsumersMock, defineMessagePositionsMock, definePositionsComponentsMock, getConsumerMock, getLinksLinesCoordinatesMock, getQueuePositionsCoordinatesMock, usePositionMock } from '../contexts/position/mocks/position.context.mocks'
import { queues } from '../services/rabbitmq/mocks/queue.mock'
import { exchanges, exchangesPosition } from '../services/rabbitmq/mocks/exchange.mock'
import { producerPositionMessage, producers, linesPositions as producersPositionMessagesLines, producersPositionMessagesPosition } from '../services/rabbitmq/mocks/producer.mock'
import { bindingsLines, consumers, consumersLines, positions as consumersPosition } from '../services/rabbitmq/mocks/consumers.mock'
import { components, componentsLines, componentsPositions } from '../contexts/position/mocks/component.context.mock'
import { COMPONENT_TYPE } from '@enums/components.enum'


jest.mock('@contexts/position/Position.context', () => {
  return {
    usePosition: () => usePositionMock
  }
})

describe('Home', () => {
  it('renders a index start page before useEffect page', () => {
    // ARRANGE
    getConsumerMock.mockReturnValue(consumers)
    createComponentsMock.mockReturnValue(components)
    createPositionsComponentsMock.mockReturnValue(componentsPositions)
    definePositionsComponentsMock.mockReturnValue({ queues: componentsPositions, exchanges: exchangesPosition, producers: producerPositionMessage })
    getQueuePositionsCoordinatesMock.mockReturnValue(consumersPosition)
    defineLinesQueuesBetweenExchangesConsumersMock.mockReturnValue(componentsLines)
    getLinksLinesCoordinatesMock.mockReturnValueOnce(consumersLines).mockReturnValueOnce(bindingsLines)
    defineMessagePositionsMock.mockReturnValue(producersPositionMessagesPosition)

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

    // ASSERT
    expect(getConsumerMock).toHaveBeenCalledWith(queues)
    expect(createComponentsMock).toHaveBeenCalledWith({ queues, exchanges, producers, consumers })
    expect(createPositionsComponentsMock).toHaveBeenCalledWith(components)
    expect(definePositionsComponentsMock).toHaveBeenCalledWith({ positions, queues, producers, exchanges })
    expect(getQueuePositionsCoordinatesMock).toHaveBeenCalledWith({ components: componentsPositions, componentType: COMPONENT_TYPE.CONSUMER })
    expect(defineLinesQueuesBetweenExchangesConsumersMock).toHaveBeenCalledWith(componentsPositions)
    expect(getLinksLinesCoordinatesMock).toHaveBeenNthCalledWith(1, { componentLinks: componentsLines, componentType: COMPONENT_TYPE.CONSUMER })
    expect(getLinksLinesCoordinatesMock).toHaveBeenNthCalledWith(2, { componentLinks: componentsLines, componentType: COMPONENT_TYPE.BINDING })
    expect(defineMessagePositionsMock).toHaveBeenCalledWith({ queues: componentsPositions, exchanges: exchangesPosition, producers: producerPositionMessage })

    expect(container).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(boxContent).toBeInTheDocument()
    expect(boxEditor).toBeInTheDocument()
    expect(sendMessage).toBeInTheDocument()
    expect(boxContent).toBeInTheDocument()
    expect(contentConfigs).toBeInTheDocument()
    expect(contentComponents).toBeInTheDocument()
  })

  it('renders a index page before useEffect', () => {
    // ARRANGE
    getConsumerMock.mockReturnValue(consumers)
    createComponentsMock.mockReturnValue(components)
    createPositionsComponentsMock.mockReturnValue(componentsPositions)
    definePositionsComponentsMock.mockReturnValue({ queues: componentsPositions, exchanges: exchangesPosition, producers: producerPositionMessage })
    getQueuePositionsCoordinatesMock.mockReturnValue(consumersPosition)
    defineLinesQueuesBetweenExchangesConsumersMock.mockReturnValue(componentsLines)
    getLinksLinesCoordinatesMock.mockReturnValueOnce(consumersLines).mockReturnValueOnce(bindingsLines)
    defineMessagePositionsMock.mockReturnValue(producersPositionMessagesPosition)

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
    const producerComponents = screen.findByTestId("producer-component")
    const exchangeComponents = screen.findByTestId("exchange-component")
    const queueComponents = screen.findByTestId("queue-component")
    const consumerComponents = screen.findByTestId("consumer-component")
    const lineComponents = screen.findByTestId("line-component")
    const producerLineComponents = screen.findByTestId("producer-line-component")
    const messagesComponents = screen.findByTestId("message-line-component")

    // ASSERT
    expect(getConsumerMock).toHaveBeenCalledWith(queues)
    expect(createComponentsMock).toHaveBeenCalledWith({ queues, exchanges, producers, consumers })
    expect(createPositionsComponentsMock).toHaveBeenCalledWith(components)
    expect(definePositionsComponentsMock).toHaveBeenCalledWith({ positions, queues, producers, exchanges })
    expect(getQueuePositionsCoordinatesMock).toHaveBeenCalledWith({ components: componentsPositions, componentType: COMPONENT_TYPE.CONSUMER })
    expect(defineLinesQueuesBetweenExchangesConsumersMock).toHaveBeenCalledWith(componentsPositions)
    expect(getLinksLinesCoordinatesMock).toHaveBeenNthCalledWith(1, { componentLinks: componentsLines, componentType: COMPONENT_TYPE.CONSUMER })
    expect(getLinksLinesCoordinatesMock).toHaveBeenNthCalledWith(2, { componentLinks: componentsLines, componentType: COMPONENT_TYPE.BINDING })
    expect(defineMessagePositionsMock).toHaveBeenCalledWith({ queues: componentsPositions, exchanges: exchangesPosition, producers: producerPositionMessage })

    expect(container).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(boxContent).toBeInTheDocument()
    expect(boxEditor).toBeInTheDocument()
    expect(sendMessage).toBeInTheDocument()
    expect(boxContent).toBeInTheDocument()
    expect(contentConfigs).toBeInTheDocument()
    expect(contentComponents).toBeInTheDocument()

    expect(producerComponents).not.toBeInTheDocument()
    expect(exchangeComponents).not.toBeInTheDocument()
    expect(queueComponents).not.toBeInTheDocument()
    expect(consumerComponents).not.toBeInTheDocument()
    expect(lineComponents).not.toBeInTheDocument()
    expect(producerLineComponents).not.toBeInTheDocument()
    expect(messagesComponents).not.toBeInTheDocument()
  })
})
