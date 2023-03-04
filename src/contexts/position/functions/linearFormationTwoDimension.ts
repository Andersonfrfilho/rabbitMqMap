import { v4 as uuidV4 } from 'uuid';
import { Producer } from "@services/rabbitmq/interfaces/producer.interface";
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { Queue } from "@services/rabbitmq/interfaces/queue.interface";
import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface";
import { Component } from '@contexts/interfaces/components.interface';
import { COMPONENT_INFO_TYPE } from "@enums/components.enum";
import { builderInfoComponent } from '../builder/info.builder';
import { Position as PositionCoordinates } from '@constants/position.constant';
import { Position } from '@contexts/interfaces/positions.interface';
import { Coordinates } from '../utils/quadrilateralFormationThreeDimension';
import { CONSUMER_DIMENSION, EXCHANGE_DIMENSION, PRODUCER_DIMENSION, QUEUE_DIMENSION } from '@constants/components.constant';
import { DEPTH } from '@enums/positions.enum';

export interface QuadrilLateralFormationThreeDimensionParams {
  component: Component<Producer | Exchange | Queue | Consumer>;
  componentType: COMPONENT_INFO_TYPE;
  greatestCoordinates: Coordinates
}

export const linearFormationTwoDimension = ({ component, componentType, greatestCoordinates }: QuadrilLateralFormationThreeDimensionParams): Position[] => {
  const coordinates: PositionCoordinates[] = []

  const spaceBetween = spaceBetweenComponentDimension(componentType)

  const incrementX = getComponentPositionIncremente({
    maxXExternal: greatestCoordinates.x,
    maxXLocal: component.quantity * spaceBetween
  })

  for (let row = 0; row < component.quantity; row += 1) {
    coordinates.push([(row * spaceBetween) + incrementX, greatestCoordinates.y * component.depth, 0])
  }

  const data = component.items.map((component, index) => {
    const info = builderInfoComponent({ componentName: componentType, data: component })
    return {
      position: coordinates[index],
      info,
      id: uuidV4()
    }
  })
  return data

}

interface GetPositionInitialParams {
  maxXExternal: number,
  maxXLocal: number
}

function getComponentPositionIncremente({ maxXExternal, maxXLocal }: GetPositionInitialParams): number {
  const diffMaxX = maxXExternal - maxXLocal
  const initialX = diffMaxX / 2
  return initialX
}

export function spaceBetweenComponentDimension(componentType: COMPONENT_INFO_TYPE): number {
  switch (componentType) {
    case COMPONENT_INFO_TYPE.PRODUCER:
      return PRODUCER_DIMENSION[0] * 2
    case COMPONENT_INFO_TYPE.EXCHANGE:
      return (EXCHANGE_DIMENSION[0] * EXCHANGE_DIMENSION[0]) + (EXCHANGE_DIMENSION[0] / 2)
    case COMPONENT_INFO_TYPE.QUEUE:
      return QUEUE_DIMENSION[2]
    default:
      return CONSUMER_DIMENSION[1] / (Object.keys(COMPONENT_INFO_TYPE).length * 2)
  }
}