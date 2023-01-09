import { v4 as uuidV4 } from 'uuid';
import { COMPONENTS } from "@enums/components.enum";
import { Producer } from "@services/rabbitmq/interfaces/producer.interface";
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { Queue } from "@services/rabbitmq/interfaces/queue.interface";
import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface";
import { builderInfoComponent } from "../builder/info.builder";
import { verifyFourDirectionHasElement } from "../utils/veirfyFourDirectionHasElement";
import { createCoordinate } from "../utils/createCoordinate";
import { verifyAlreadyExistComponentInPositionIndex } from "../utils/verifyAlreadyExistComponentInPositionIndex";
import { Components, ComponentsPositions } from '@contexts/interfaces/components.interface';
import { Position } from '@contexts/interfaces/positions.interface';

export interface CreatePositionsComponentsParams extends Components { }

export const createPositionsComponents = (components: CreatePositionsComponentsParams): ComponentsPositions => {
  const numberComponents = Object.keys(components).length
  let indexComponent = 0;
  const componentsPosition: ComponentsPositions = {
    producer: [],
    exchange: [],
    queue: [],
    consumer: []
  }

  while (numberComponents - 1 >= indexComponent) {
    const componentName: keyof ComponentsPositions = COMPONENTS[indexComponent] as keyof ComponentsPositions
    let indexPosition = 0;
    const positions: Position[] = [];
    const positionsIndexes: number[] = [];
    const positionsQuantityIndexes = components[componentName].quantity ** 2
    const componentsItems = components[componentName].items as Producer[] & Exchange[] & Queue[] & Consumer[];
    let componentItemsIndex = 0;
    while (positionsIndexes.length <= components[componentName].quantity - 1 && indexPosition <= positionsQuantityIndexes - 1) {
      const component = components[componentName];

      const alreadyComponentInPosition = verifyAlreadyExistComponentInPositionIndex({ index: indexPosition, positionIndexes: positionsIndexes })

      if (alreadyComponentInPosition) {
        indexPosition += 1
        continue;
      }

      const row = Math.floor(indexPosition / component.quantity)

      const alreadyExistElementInFourDirections = verifyFourDirectionHasElement({ component, indexPosition, positionsIndexes, positionsQuantityIndexes, row })

      if (alreadyExistElementInFourDirections) {
        indexPosition += 1
        continue;
      }

      positionsIndexes.push(indexPosition)

      const position = createCoordinate({ component, indexPosition, positionsIndexes, positionsQuantityIndexes, row })

      const componentItem = componentsItems[componentItemsIndex]

      builderInfoComponent({ componentName, data: componentItem })

      const info = builderInfoComponent({ componentName, data: componentItem })

      positions.push({ position, info, id: uuidV4() })
    }

    indexComponent += 1;
    componentsPosition[componentName] = positions
  }
  return componentsPosition
}
