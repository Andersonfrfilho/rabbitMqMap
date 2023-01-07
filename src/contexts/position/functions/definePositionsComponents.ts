import { INITIAL_POSITION, Position } from "@constants/position.constant";
import { COMPONENTS, COMPONENT_TYPE, DEPTH, LINK_TYPE } from "@enums/positions.enum";
import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface";
import { Exchange, Type } from "@services/rabbitmq/interfaces/exchange.interface";
import { Producer, ProducerBetweenExchange, ProducerWithMessageWithPosition } from "@services/rabbitmq/interfaces/producer.interface";
import { BindingWithPosition, ConsumerWithPosition, Queue, QueueBindingConsumers } from "@services/rabbitmq/interfaces/queue.interface";
import { ComponentInfo, infoConsumer, infoExchange, infoProducer, infoQueue } from "../builder/info.builder";
import { v4 as uuidV4 } from 'uuid';
import { NUMBER_POINTS } from "@constants/components.constant";

export interface Dimension {
  width: number;
  height: number;
  depth: number;
}

export type ComponentWithPosition = {
  position: Position,
  info: ComponentInfo,
  id: string;
}
export interface PositionComponents {
  producer: ComponentWithPosition[];
  exchange: ComponentWithPosition[];
  queue: ComponentWithPosition[];
  consumer: ComponentWithPosition[];
}

export interface DefineComponentsDTO {
  queues: QueueBindingConsumers[];
  positions: PositionComponents;
  producers: Producer[];
  exchanges: Exchange[];
}

export interface ProducerWithPosition extends Producer {
  position: ComponentWithPosition;
}
export interface QueueWithPosition extends QueueBindingConsumers {
  position: ComponentWithPosition;
  id: string;
  bindings: BindingWithPosition[];
  consumers_register: ConsumerWithPosition[];
}

export interface ExchangeWithPosition extends Exchange {
  position: ComponentWithPosition,
  id: string;
}

export interface DefineComponentsResult { queues: QueueWithPosition[], exchanges: ExchangeWithPosition[], producers: ProducerWithPosition[] }

export const definePositionsComponents = ({ queues, positions, producers, exchanges }: DefineComponentsDTO): DefineComponentsResult => {
  const producerPositions = positions.producer

  const exchangePositions = positions.exchange
  const consumerPositions = positions.consumer

  const exchangeWithPosition = exchanges.map(exchange => {
    const position = exchangePositions[0]
    exchangePositions.shift()
    return {
      id: uuidV4(),
      ...exchange,
      position
    }
  })

  const queuesWithPositions: QueueWithPosition[] = queues.map((queue, index) => ({
    ...queue,
    id: uuidV4(),
    position: positions.queue[index],
    bindings: queue.bindings.map(binding => {
      const position = exchangeWithPosition.find(exchange => exchange.name === binding.source)?.position || {} as ComponentWithPosition
      return {
        ...binding,
        position,
        id: uuidV4()
      }
    }),
    consumers_register: queue.consumers_register.map(consumer => {
      const position = consumerPositions[0]
      consumerPositions.shift()
      return {
        ...consumer,
        position,
        id: uuidV4()
      }
    })
  }))



  const producerWithPositions = producers.map((producer) => {
    const position = producerPositions[0]
    producerPositions.shift()
    return {
      ...producer,
      position: position
    }
  })

  return { queues: queuesWithPositions, exchanges: exchangeWithPosition, producers: producerWithPositions }
}

export interface DefineLinksBetweenComponentsDTO extends QueueWithPosition { }

export interface BindingWithLinks extends BindingWithPosition {
  lines: MakeVerticalCoordinateSeparationResult
  points: MakeVerticalCoordinateSeparationResult[]
}

export interface ConsumerWithLinks extends ConsumerWithPosition {
  lines: MakeVerticalCoordinateSeparationResult
  points: MakeVerticalCoordinateSeparationResult[]
}

export interface DefineLinksBetweenComponentsResult extends QueueWithPosition {
  bindings: BindingWithLinks[];
  consumers_register: ConsumerWithLinks[];
}

export function definePositionLinksBetweenComponents(queues: DefineLinksBetweenComponentsDTO[]): DefineLinksBetweenComponentsResult[] {
  const queuesWithPositions = queues.map((queue) => ({
    ...queue,
    bindings: queue.bindings.map(binding => {
      const initialPosition = { name: queue.name, position: queue.position.position }
      const lines = makeVerticesCoordinatesSeparation({
        initialPosition, lastPosition: { name: binding.source, destination: binding.destination, destinationType: binding.destination_type, routingKey: binding.routing_key, position: binding.position.position },
      })
      const points = makePointsByNumberSeparation({
        initialPosition, lastPosition: { name: binding.source, destination: binding.destination, destinationType: binding.destination_type, routingKey: binding.routing_key, position: binding.position.position }, numberPoints: NUMBER_POINTS
      })
      return {
        ...binding,
        lines,
        points
      }
    }),
    consumers_register: queue.consumers_register.map(consumer => {
      const initialPosition = { name: queue.name, position: queue.position.position }
      const lines = makeVerticesCoordinatesSeparation({
        initialPosition, lastPosition: { name: consumer.channel_details.name, position: consumer.position.position },
      })
      const points = makePointsByNumberSeparation({
        initialPosition, lastPosition: { name: consumer.channel_details.name, position: consumer.position.position }, numberPoints: NUMBER_POINTS
      })
      return {
        ...consumer,
        lines,
        points
      }
    })
  }))

  return queuesWithPositions
}
interface MakeVerticeInfoPosition {
  position: Position;
  name: string;
  destination?: string;
  destinationType?: string;
  routingKey?: string;
}
interface MakeVerticesCoordinatesSeparation {
  initialPosition: MakeVerticeInfoPosition;
  lastPosition: MakeVerticeInfoPosition;
}
interface MakePointsByNumberSeparation {
  initialPosition: MakeVerticeInfoPosition;
  lastPosition: MakeVerticeInfoPosition;
  numberPoints: number;
}
export interface InfoParent {
  father: string;
  children: string;
}
export interface MakeVerticalCoordinateSeparationResult {
  id: string; positions: Position[]; info?: InfoParent;
}

function makeVerticesCoordinatesSeparation({ initialPosition, lastPosition }: MakeVerticesCoordinatesSeparation): MakeVerticalCoordinateSeparationResult {
  return { id: uuidV4(), positions: [initialPosition.position, lastPosition.position], info: { children: lastPosition.name, father: initialPosition.name } }
}
interface MakePointsByNumberSeparationResult {
  id: string; position: Position; info?: InfoParent;
}
function makePointsByNumberSeparation({ initialPosition, lastPosition, numberPoints }: MakePointsByNumberSeparation): MakePointsByNumberSeparationResult[] {
  const arrayLinks = new Array(numberPoints).fill(INITIAL_POSITION)
  const [x1, y1, z1] = initialPosition.position as number[]
  const [x2, y2, z2] = lastPosition.position as number[]
  const xDiference = x2 - x1;
  const yDiference = y2 - y1;
  const zDiference = z2 - z1;
  const points: MakePointsByNumberSeparationResult[] = arrayLinks.map((element, indexLink): MakePointsByNumberSeparationResult => {
    const x = x1 + (xDiference * indexLink / NUMBER_POINTS)
    const y = y1 + (yDiference * indexLink / NUMBER_POINTS)
    const z = z1 + (zDiference * indexLink / NUMBER_POINTS)
    return {
      id: uuidV4(), position: [x, y, z], info: {
        father: initialPosition.name,
        children: lastPosition.name
      }
    }
  })
  return points
}

export interface GetLinksLinesDTO { componentLinks: DefineLinksBetweenComponentsResult[]; componentType: COMPONENT_TYPE; }

interface GetLinkLinesInfo {
  children: string;
  father: string;
}
export interface GetLinksLinesResult {
  id: string;
  positions: Position[];
  info?: GetLinkLinesInfo | InfoParent | undefined
}

export function getLinksLines({ componentLinks, componentType }: GetLinksLinesDTO): GetLinksLinesResult[] {
  return componentLinks.reduce((accumulator, component): Position[][] => [...accumulator, ...component[componentType].map((componentType): Position[] => componentType.lines)], [])
}

export interface GetLinksPointsDTO { componentLinks: DefineLinksBetweenComponentsResult[]; componentType: COMPONENT_TYPE; }

export interface GetPointsLinesResult extends GetLinksLinesResult { }

export function getLinksPoints({ componentLinks, componentType }: GetLinksPointsDTO): GetPointsLinesResult[] {
  return componentLinks.reduce((accumulator, component) => [...accumulator, ...component[componentType].reduce((accumulator, current) => {
    return [...accumulator, ...current[LINK_TYPE.POINTS]]
  }, [])], [])
}

export interface GetPositionsDTO {
  components: QueueWithPosition[]
  componentType: COMPONENT_TYPE
}

export function getPositions({ components, componentType }: GetPositionsDTO): ComponentWithPosition[] {
  return components.reduce((accumulator: ComponentWithPosition[], queue: QueueWithPosition): ComponentWithPosition[] => [...accumulator, ...queue[componentType].reduce((accumulatorBinding: ComponentWithPosition[], component: BindingWithPosition | ConsumerWithPosition): ComponentWithPosition[] => [...accumulatorBinding, component.position], [])], [])
}

export interface DefineMessagePositionsParams extends DefineComponentsResult { }

export function defineMessagePositions({ exchanges, producers, queues }: DefineMessagePositionsParams): ProducerWithMessageWithPosition[] {
  const producersMessageWithPosition = producers.map(producer => {
    const lines = [] as MakeVerticalCoordinateSeparationResult[]

    const messages = producer.messages.map(message => {
      const producerPosition = producer.position
      const exchange = exchanges.find(exchange => exchange.name === message.exchange)

      if (!!exchange && !lines.some(line => (
        line.positions[0][0] === producerPosition.position[0] && line.positions[0][1] === producerPosition.position[1] && line.positions[0][2] === producerPosition.position[2]
        &&
        line.positions[1][0] === exchange?.position[0] && line.positions[1][1] === exchange?.position[1] && line.positions[1][2] === exchange?.position[2]))) {
        const producerLinesBetweenExchange = makeVerticesCoordinatesSeparation({
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

      const producerBetweenExchangePoints = !!producerPosition && !!exchange && createMessagePointsBetweenTwoComponents({ initialPosition: producerPosition, lastPosition: exchange.position, numberPoints: NUMBER_POINTS, payload: message.messagePayload }) || []

      const queuesFilter = !!exchange && queues.filter(queue => !!exchange.bindings && exchange.bindings.some(binding => binding.destination === queue.name)) || []

      const queuesPositionsFilter = queuesFilter.map(queue => queue.position) || []
      const exchangeBetweenQueuesPoints = !!exchange && queuesPositionsFilter.map(queuePosition => createMessagePointsBetweenTwoComponents({ initialPosition: exchange.position, lastPosition: queuePosition, numberPoints: NUMBER_POINTS, payload: message.messagePayload })).reduce((accumulator: MessagePoint[], currentValue: MessagePoint[]): MessagePoint[] => [...accumulator, ...currentValue], []) || []

      const queuesToConsumersPoints = queuesFilter.reduce((accumulator: MessagePoint[], queue: QueueWithPosition): MessagePoint[] => [...accumulator, ...queue.consumers_register.reduce((accumulatorConsumerParam: MessagePoint[], consumer: ConsumerWithPosition): MessagePoint[] => [...accumulatorConsumerParam, ...createMessagePointsBetweenTwoComponents({ initialPosition: queue.position, lastPosition: consumer.position, numberPoints: NUMBER_POINTS, payload: message.messagePayload })], [])], []) || []

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

interface GetPointsBetweenTwoCoordinatesParams {
  initialPosition: ComponentWithPosition;
  lastPosition: ComponentWithPosition;
  payload: any;
  numberPoints?: number
}

interface MessageInfo {
  source: string;
  destination: string;
  payload: any;
}

export interface MessagePoint {
  id: string;
  position: number[];
  info: MessageInfo
}

function createMessagePointsBetweenTwoComponents({ initialPosition, lastPosition, payload, numberPoints = NUMBER_POINTS }: GetPointsBetweenTwoCoordinatesParams): MessagePoint[] {
  const arrayLinks = new Array(numberPoints).fill(INITIAL_POSITION)
  const [x1, y1, z1] = initialPosition.position as number[]
  const [x2, y2, z2] = lastPosition.position as number[]
  const xDiference = x2 - x1;
  const yDiference = y2 - y1;
  const zDiference = z2 - z1;
  const points = arrayLinks.map((element, indexLink): MessagePoint => {
    const x = x1 + (xDiference * indexLink / NUMBER_POINTS)
    const y = y1 + (yDiference * indexLink / NUMBER_POINTS)
    const z = z1 + (zDiference * indexLink / NUMBER_POINTS)
    return {
      id: uuidV4(),
      position: [x, y, z],
      info: {
        source: initialPosition.info.name,
        destination: lastPosition.info.name,
        payload
      }
    }
  })
  return points
}
interface GetQueueByTypeExchangeDTO {
  type: Type;
  queue: QueueWithPosition;
}
