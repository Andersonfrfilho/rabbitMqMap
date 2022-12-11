import { NUMBER_SEPARATION_LINKS, Position } from "@constants/position.constant";
import { COMPONENTS, DEPTH } from "@enums/positions.enum";
import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface";
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { Producer } from "@services/rabbitmq/interfaces/producer.interface";
import { BindingWithPosition, ConsumerWithPosition, Queue, QueueBindingConsumers } from "@services/rabbitmq/interfaces/queue.interface";

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

export interface PositionComponents {
  producer: Position[];
  exchange: Position[];
  queue: Position[];
  consumer: Position[];
}

function findColumn(length: number, indexFound: number) {
  return new Array(length).findIndex((element, index) => (index * length) > indexFound && indexFound < ((index + 1) * length - 1))
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
    const positions: Position[] = [];
    const positionsIndexes: number[] = [];
    const positionsQuantityIndexes = components[componentName].quantity ** 2

    while (positionsIndexes.length <= components[componentName].quantity - 1 && indexPosition < positionsQuantityIndexes - 1) {

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

      positions.push(position)
    }
    indexComponent += 1;
    componentsPosition[componentName] = (positions)
  }
  return componentsPosition
}

export interface DefineComponentsDTO {
  queues: QueueBindingConsumers[];
  positions: PositionComponents;
}

export interface DefineComponentsResult extends QueueBindingConsumers {
  position: Position;
  bindings: BindingWithPosition[];
  consumers_register: ConsumerWithPosition[];
}

interface DefineLinksBetweenComponentsDTO extends DefineComponentsResult { }

interface LinkExchange {
  queuePosition: Position;
  exchangePosition: Position;
}

interface LinkConsumer {
  queuePosition: Position;
  consumerPosition: Position;
}
interface DefineLinksBetweenComponentsResult extends DefineLinksBetweenComponentsDTO {
  linksExchange: LinkExchange[];
  linksConsumers: LinkConsumer[];
}


export const definePositionsComponents = ({ queues, positions }: DefineComponentsDTO): DefineComponentsResult[] => {
  const exchangePositions = positions.exchange
  const consumerPositions = positions.consumer
  const queuesWithPositions = queues.map((queue, index) => ({
    ...queue,
    position: positions.queue[index],
    bindings: queue.bindings.map(binding => {
      const position = exchangePositions[0]
      exchangePositions.shift()
      return {
        ...binding,
        position
      }
    }),
    consumers_register: queue.consumers_register.map(consumer => {
      const position = consumerPositions[0]
      exchangePositions.shift()
      return {
        ...consumer,
        position
      }
    })
  }))

  return queuesWithPositions
}

interface Link {
  links: Position[]
}
interface BindingWithLinks extends BindingWithPosition, Link { }
interface ConsumerWithLinks extends ConsumerWithPosition, Link { }

interface DefinePositionPointsLinksBetweenComponents extends DefineLinksBetweenComponentsResult {
  bindings: BindingWithLinks[];
  consumers_register: ConsumerWithLinks[];
}

export function definePositionLinksBetweenComponents(queues: DefineLinksBetweenComponentsDTO[]): DefinePositionPointsLinksBetweenComponents[] {

  const queuesWithPositions = queues.map((queue, index) => ({
    ...queue,
    bindings: queue.bindings.map(binding => {
      const links = makePointsByNumberSeparation({
        initialPosition: queue.position, lastPosition: binding.position, numberPoints: NUMBER_SEPARATION_LINKS
      })

      return {
        ...binding,
        links
      }
    }),
    consumers_register: queue.consumers_register.map(consumer => {
      const links = makePointsByNumberSeparation({
        initialPosition: queue.position, lastPosition: consumer.position, numberPoints: NUMBER_SEPARATION_LINKS
      })
      return {
        ...consumer,
        links
      }
    })
  }))

  return queuesWithPositions
}
interface MakePointsByNumberSeparation {
  initialPosition: Position;
  lastPosition: Position;
  numberPoints: number;
}
function makePointsByNumberSeparation({ initialPosition, lastPosition, numberPoints }: MakePointsByNumberSeparation): Position[] {
  const arrayLinks = new Array(numberPoints)
  const [x1, y1, z1] = initialPosition
  const [x2, y2, z2] = lastPosition
  const xDiference = x2 - x1;
  const yDiference = y2 - y1;
  const zDiference = z2 - z1;
  const links: Position[] = arrayLinks.map((element, indexLink) => {
    const x = x1 + (xDiference * indexLink / NUMBER_SEPARATION_LINKS)
    const y = y1 + (yDiference * indexLink / NUMBER_SEPARATION_LINKS)
    const z = z1 + (zDiference * indexLink / NUMBER_SEPARATION_LINKS)
    return [x, y, z]
  })
  return links
}