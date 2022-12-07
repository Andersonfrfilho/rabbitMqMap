import { position } from "@chakra-ui/react";
import { Position } from "@constants/position.constant";
import { COMPONENTS, DEPTH } from "@enums/positions.enum";
import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface";
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { Producer } from "@services/rabbitmq/interfaces/producer.interface";
import { Queue } from "@services/rabbitmq/interfaces/queue.interface";
import { between } from "@utils/random-number";

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
  producer: Position[][];
  exchange: Position[][];
  queue: Position[][];
  consumer: Position[][];
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
    const component = COMPONENTS[indexComponent] as keyof PositionComponents
    let indexPosition = 0;
    const positions: number[] = [];
    const positionsIndexes = component.length ** 2

    while (positions.length <= component.length && indexPosition < positionsIndexes - 1) {

      const alreadyPosition = positions.some(indexCurrentPosition => indexCurrentPosition === indexPosition)
      if (alreadyPosition) {
        console.log("entrou repetido")
        indexPosition += 1
        continue;
      }
      const row = Math.floor(indexPosition / component.length)
      const anteriorPositionHasElement = positions.some(indexCurrentPosition => indexPosition > 0 && indexPosition - 1 === indexCurrentPosition)
      if (anteriorPositionHasElement) {
        indexPosition += 1
        continue;
      }
      const posteriorPositionHasElement = positions.some(indexCurrentPosition => indexPosition < positionsIndexes - 1 && (indexPosition + 1) === indexCurrentPosition)
      if (posteriorPositionHasElement) {
        indexPosition += 1
        continue;
      }
      const upPositionHasElement = positions.some(indexCurrentPosition => indexPosition >= component.length && (indexPosition - component.length) === indexCurrentPosition)
      if (upPositionHasElement) {
        indexPosition += 1
        continue;
      }

      const downPositionHasElement = positions.some(indexCurrentPosition => row < component.length - 1 && (indexPosition + component.length) === indexCurrentPosition)
      if (downPositionHasElement) {
        indexPosition += 1
        continue;
      }
      positions.push(indexPosition)
    }
    indexComponent += 1;
    componentsPosition[component].push(positions)
  }
  return componentsPosition
}