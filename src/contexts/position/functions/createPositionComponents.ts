import { Components } from "@contexts/components/components.interface";
import { v4 as uuidV4 } from 'uuid';
import { ComponentWithPosition, PositionComponents } from "./definePositionsComponents";
import { COMPONENTS } from "@enums/components.enum";
import { Producer } from "@services/rabbitmq/interfaces/producer.interface";
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { Queue } from "@services/rabbitmq/interfaces/queue.interface";
import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface";
import { DEPTH } from "@enums/positions.enum";
import { Position } from "@constants/position.constant";
import { findColumn } from "@utils/positions";
import { builder } from "../builder/info.builder";

interface CreatePositionsComponentsParams extends Components { }

export const createPositionsComponents = (components: CreatePositionsComponentsParams): PositionComponents => {
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

      positions.push({ position, info, id: uuidV4() })
    }
    indexComponent += 1;
    componentsPosition[componentName] = positions
  }
  return componentsPosition
}
