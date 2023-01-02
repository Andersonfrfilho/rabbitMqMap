import { NUMBER_SEPARATION_LINKS, Position } from "@constants/position.constant";
import { COMPONENTS, COMPONENT_TYPE, DEPTH, LINK_TYPE } from "@enums/positions.enum";
import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface";
import { Exchange, Type } from "@services/rabbitmq/interfaces/exchange.interface";
import { Producer, ProducerWithMessageWithPosition } from "@services/rabbitmq/interfaces/producer.interface";
import { BindingWithPosition, ConsumerWithPosition, Queue, QueueBindingConsumers } from "@services/rabbitmq/interfaces/queue.interface";
import { ComponentInfo, infoConsumer, infoExchange, infoProducer, infoQueue } from "../builder/info.builder";
import { v4 as uuidv4 } from 'uuid';
import { binding } from "src/schemas/queue.schema";
import { ExchangeType } from "@services/rabbitmq/interfaces/overview.interfaces";
import { Vector3 } from "three";
import { Binding } from "@services/rabbitmq/interfaces/binding.interface";

export interface Dimension {
  width: number;
  height: number;
  depth: number;
}

export interface Component<T> {
  quantity: number;
  depth: DEPTH;
  dimension: Dimension;
  items: T[];
}

export interface Components {
  producer: Component<Producer>;
  exchange: Component<Exchange>;
  queue: Component<Queue>;
  consumer: Component<Consumer>;
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

function findColumn(length: number, indexFound: number) {
  return new Array(length).findIndex((element, index) => (index * length) > indexFound && indexFound < ((index + 1) * length - 1))
}

const builder = {
  producer: infoProducer,
  exchange: infoExchange,
  queue: infoQueue,
  consumer: infoConsumer
}



export const createPositionsComponents = (components: Components): PositionComponents => {
  const numberComponents = Object.keys(components).length
  let indexComponent = 0;
  const componentsPosition: PositionComponents = {
    producer: [],
    exchange: [],
    queue: [],
    consumer: []
  }

  while (numberComponents - 1 >= indexComponent) {
    const componentName: keyof PositionComponents = COMPONENTS[indexComponent] as keyof PositionComponents
    let indexPosition = 0;
    const positions: ComponentWithPosition[] = [];
    const positionsIndexes: number[] = [];
    const positionsQuantityIndexes = components[componentName].quantity ** 2
    const componentsItems = components[componentName].items as Producer[] & Exchange[] & Queue[] & Consumer[];
    let componentItemsIndex = 0;
    while (positionsIndexes.length <= components[componentName].quantity - 1 && indexPosition <= positionsQuantityIndexes - 1) {

      const alreadyPosition = positionsIndexes.some(indexCurrentPosition => indexCurrentPosition === indexPosition)
      if (alreadyPosition) {
        indexPosition += 1
        continue;
      }
      const row = Math.floor(indexPosition / components[componentName].quantity)
      const anteriorPositionHasElement = positionsIndexes.some(indexCurrentPosition => indexPosition > 0 && indexPosition - 1 === indexCurrentPosition)
      if (anteriorPositionHasElement) {
        indexPosition += 1
        continue;
      }
      const posteriorPositionHasElement = positionsIndexes.some(indexCurrentPosition => indexPosition < positionsQuantityIndexes - 1 && (indexPosition + 1) === indexCurrentPosition)

      if (posteriorPositionHasElement) {
        indexPosition += 1
        continue;
      }

      const upPositionHasElement = positionsIndexes.some(indexCurrentPosition => {
        return indexPosition >= components[componentName].quantity && (indexPosition - components[componentName].quantity) === indexCurrentPosition
      })

      if (upPositionHasElement) {
        indexPosition += 1
        continue;
      }

      const downPositionHasElement = positionsIndexes.some(indexCurrentPosition => row < components[componentName].quantity - 1 && (indexPosition + components[componentName].quantity) === indexCurrentPosition)
      if (downPositionHasElement) {
        indexPosition += 1
        continue;
      }

      positionsIndexes.push(indexPosition)

      const x = row + indexPosition;
      const y = findColumn(components[componentName].quantity, indexPosition)
      const z = DEPTH[componentName.toUpperCase() as any] as unknown as number
      const position: Position = [x, y, z]

      const info = builder[componentName](componentsItems[componentItemsIndex])

      positions.push({ position, info, id: uuidv4() })
    }
    indexComponent += 1;
    componentsPosition[componentName] = positions
  }
  return componentsPosition
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
      id: uuidv4(),
      ...exchange,
      position
    }
  })

  const queuesWithPositions: QueueWithPosition[] = queues.map((queue, index) => ({
    ...queue,
    id: uuidv4(),
    position: positions.queue[index],
    bindings: queue.bindings.map(binding => {
      const position = exchangeWithPosition.find(exchange => exchange.name === binding.source)?.position || {} as ComponentWithPosition
      return {
        ...binding,
        position,
        id: uuidv4()
      }
    }),
    consumers_register: queue.consumers_register.map(consumer => {
      const position = consumerPositions[0]
      consumerPositions.shift()
      return {
        ...consumer,
        position,
        id: uuidv4()
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
        initialPosition, lastPosition: { name: binding.source, destination: binding.destination, destinationType: binding.destination_type, routingKey: binding.routing_key, position: binding.position.position }, numberPoints: NUMBER_SEPARATION_LINKS
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
        initialPosition, lastPosition: { name: consumer.channel_details.name, position: consumer.position.position }, numberPoints: NUMBER_SEPARATION_LINKS
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
interface InfoParent {
  father: string;
  children: string;
}
interface MakeVerticalCoordinateSeparationResult {
  id: string; positions: Position[]; info?: InfoParent;
}

function makeVerticesCoordinatesSeparation({ initialPosition, lastPosition }: MakeVerticesCoordinatesSeparation): MakeVerticalCoordinateSeparationResult {
  return { id: uuidv4(), positions: [initialPosition.position, lastPosition.position], info: { children: lastPosition.name, father: initialPosition.name } }
}
interface MakePointsByNumberSeparationResult {
  id: string; position: Position; info?: InfoParent;
}
function makePointsByNumberSeparation({ initialPosition, lastPosition, numberPoints }: MakePointsByNumberSeparation): MakePointsByNumberSeparationResult[] {
  const arrayLinks = new Array(numberPoints).fill([0, 0, 0])
  const [x1, y1, z1] = initialPosition.position as number[]
  const [x2, y2, z2] = lastPosition.position as number[]
  const xDiference = x2 - x1;
  const yDiference = y2 - y1;
  const zDiference = z2 - z1;
  const points: MakePointsByNumberSeparationResult[] = arrayLinks.map((element, indexLink): MakePointsByNumberSeparationResult => {
    const x = x1 + (xDiference * indexLink / NUMBER_SEPARATION_LINKS)
    const y = y1 + (yDiference * indexLink / NUMBER_SEPARATION_LINKS)
    const z = z1 + (zDiference * indexLink / NUMBER_SEPARATION_LINKS)
    return {
      id: uuidv4(), position: [x, y, z], info: {
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
  info: GetLinkLinesInfo
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
    const messages = producer.messages.map(message => {
      const producerPosition = producer.position
      const exchange = exchanges.find(exchange => exchange.name === message.exchange)
      const producerBetweenExchangePoints = !!producerPosition && !!exchange && createMessagePointsBetweenTwoComponents({ initialPosition: producerPosition, lastPosition: exchange.position, numberPoints: NUMBER_SEPARATION_LINKS, payload: message.messagePayload }) || []
      const queuesPositionsFilter = !!exchange && queues.filter(queue => !!exchange.bindings && exchange.bindings.some(binding => binding.destination === queue.name)).map(queue => queue.position) || []
      const exchangeBetweenQueuesPoints = !!exchange && queuesPositionsFilter.map(queuePosition => createMessagePointsBetweenTwoComponents({ initialPosition: exchange.position, lastPosition: queuePosition, numberPoints: NUMBER_SEPARATION_LINKS, payload: message.messagePayload })).reduce((accumulator: MessagePoint[], currentValue: MessagePoint[]): MessagePoint[] => [...accumulator, ...currentValue], []) || []
      const producerBetweenExchange = {
        initial: producerPosition,
      }
      Object.assign(producerBetweenExchange, exchange && exchange.position && {
        last: exchange?.position,
      })
      const exchangeBetweenQueue = exchangeBetweenQueuesPoints.length > 0 ? {} : {
        initial: {},
        last: {}
      }
      return {
        ...message,
        positions: {
          points: {
            producerBetweenExchange: producerBetweenExchangePoints,
            exchangeBetweenQueue: exchangeBetweenQueuesPoints,
            queueBetweenConsumer: queueBetweenConsumer
          },
          lines: {
            producerBetweenExchange: {
              initial: producerPosition,
              last: exchange?.position,
            }
            exchangeBetweenQueue:
          }
        }
      }
    })
    return {
      ...producer,
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

function createMessagePointsBetweenTwoComponents({ initialPosition, lastPosition, payload, numberPoints = NUMBER_SEPARATION_LINKS }: GetPointsBetweenTwoCoordinatesParams): MessagePoint[] {
  const arrayLinks = new Array(numberPoints).fill([0, 0, 0])
  const [x1, y1, z1] = initialPosition.position as number[]
  const [x2, y2, z2] = lastPosition.position as number[]
  const xDiference = x2 - x1;
  const yDiference = y2 - y1;
  const zDiference = z2 - z1;
  const points = arrayLinks.map((element, indexLink): MessagePoint => {
    const x = x1 + (xDiference * indexLink / NUMBER_SEPARATION_LINKS)
    const y = y1 + (yDiference * indexLink / NUMBER_SEPARATION_LINKS)
    const z = z1 + (zDiference * indexLink / NUMBER_SEPARATION_LINKS)
    return {
      id: uuidv4(),
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
