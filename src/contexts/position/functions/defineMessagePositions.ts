import { ExchangePosition } from "@services/rabbitmq/interfaces/exchange.interface"
import { createPointsBetweenTwoCoordinates } from "../utils/createPointsBetweenTwoCoordinates"
import { createTwoPointsCoordinateToLine } from "../utils/createTwoPointsCoordinateToLine"
import { Point } from "@contexts/interfaces/lines.interface"
import { ProducerPosition, ProducerPositionLinesMessagePosition } from "@services/rabbitmq/interfaces/producer.interface"
import { QueueBindingConsumerRegisterPosition } from "@services/rabbitmq/interfaces/queue.interface"
import { NUMBER_POINTS } from "@constants/components.constant"
import { ConsumerPosition } from "@services/rabbitmq/interfaces/consumer.interface"
import { MessagePoint } from "@services/rabbitmq/interfaces/message.interface"

export interface CreateMessagePositionsParams {
  exchanges: ExchangePosition[]
  producers: ProducerPosition[]
  queues: QueueBindingConsumerRegisterPosition[]
}

export function defineMessagePositions({ exchanges, producers, queues }: CreateMessagePositionsParams): ProducerPositionLinesMessagePosition[] {
  const producersMessageWithPosition = producers.map(producer => {
    const lines = [] as Point[]

    const messages = producer.messages.map(message => {
      const producerPosition = producer.position
      const exchange = exchanges.find(exchange => exchange.name === message.exchange)

      if (!!exchange && !lines.some(line => (
        line.positions[0][0] === producerPosition.position[0] && line.positions[0][1] === producerPosition.position[1] && line.positions[0][2] === producerPosition.position[2]
        &&
        line.positions[1][0] === exchange?.position[0] && line.positions[1][1] === exchange?.position[1] && line.positions[1][2] === exchange?.position[2]))) {
        const producerLinesBetweenExchange = createTwoPointsCoordinateToLine({
          initialPosition: {
            name: producerPosition.info.name,
            position: producerPosition.position,
            destination: exchange.position.info.name,
          }, lastPosition: {
            name: exchange.position.info.name,
            position: exchange.position.position,
            destination: exchange.position.info.name,
          },
        })
        lines.push(producerLinesBetweenExchange)
      }

      const producerBetweenExchangePoints = !!producerPosition && !!exchange && createPointsBetweenTwoCoordinates({ initialPosition: producerPosition, lastPosition: exchange.position, numberPoints: NUMBER_POINTS, payload: message.messagePayload }) || []

      const queuesFilter = !!exchange && queues.filter(queue => !!exchange.bindings && exchange.bindings.some(binding => binding.destination === queue.name)) || []

      const queuesPositionsFilter = queuesFilter.map(queue => queue.position) || []
      const exchangeBetweenQueuesPoints = !!exchange && queuesPositionsFilter.map(queuePosition => createPointsBetweenTwoCoordinates({ initialPosition: exchange.position, lastPosition: queuePosition, numberPoints: NUMBER_POINTS, payload: message.messagePayload })).reduce((accumulator: MessagePoint[], currentValue: MessagePoint[]): MessagePoint[] => [...accumulator, ...currentValue], []) || []

      const queuesToConsumersPoints = queuesFilter.reduce((accumulator: MessagePoint[], queue: QueueBindingConsumerRegisterPosition): MessagePoint[] => [...accumulator, ...queue.consumers_register.reduce((accumulatorConsumerParam: MessagePoint[], consumer: ConsumerPosition): MessagePoint[] => [...accumulatorConsumerParam, ...createPointsBetweenTwoCoordinates({ initialPosition: queue.position, lastPosition: consumer.position, numberPoints: NUMBER_POINTS, payload: message.messagePayload })], [])], []) || []

      return {
        ...message,
        positions: {
          producerBetweenExchange: producerBetweenExchangePoints,
          exchangeBetweenQueue: exchangeBetweenQueuesPoints,
          queueBetweenConsumer: queuesToConsumersPoints
        }
      }
    })
    return {
      ...producer,
      lines,
      messages
    }
  })

  return producersMessageWithPosition
}