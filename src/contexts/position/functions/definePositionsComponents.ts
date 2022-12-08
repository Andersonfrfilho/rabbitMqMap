import { Position } from "@constants/position.constant";
import { COMPONENTS, DEPTH } from "@enums/positions.enum";
import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface";
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { Producer } from "@services/rabbitmq/interfaces/producer.interface";
import { Queue } from "@services/rabbitmq/interfaces/queue.interface";

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

export const definePositionsComponents = (components: Components): PositionComponents => {
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

