import { ComponentsPositions, Components } from "@contexts/interfaces/components.interface"
import { GetPositionByDimensionResponse } from "./getPositionByDimension";
import { Components as ComponentsQuantities, Coordinates } from '../utils/quadrilateralFormationThreeDimension'
import { FORMATIONS_TYPE_TWO_DIMENSION } from "../enum/position.enum";
import { COMPONENT_INFO_TYPE } from "@enums/components.enum";
import { createPositionsComponentTwoDimension } from "./createPositionComponentsTwoDimension";
import { incrementComponentDimension } from "./linearFormationTwoDimension";

interface GetPositionTwoDimensionResponse extends GetPositionByDimensionResponse { }
interface GetPositionTwoDimensionParams {
  components: Components;
}

interface GetPositionTwoDimensionResponse extends GetPositionByDimensionResponse { }

interface SquareCoordinatesParams {
  quantities: ComponentsQuantities
}

interface GetCoordinatesMajorTwoDimensions extends SquareCoordinatesParams { }

interface GetCoordinatesMajorThreeDimensionsResponse extends Coordinates { }

function getCoordinatesMajorTwoDimensions({ quantities }: GetCoordinatesMajorTwoDimensions): GetCoordinatesMajorThreeDimensionsResponse {
  const componentsValues = Object.values(quantities)
  const componentsProperties = Object.keys(quantities)
  const greatestValueIndex = componentsValues.reduce((previousIndex, value, i, arr) => arr[previousIndex] > value ? previousIndex : i, 0)
  const namePropertyComponent = componentsProperties[greatestValueIndex] as keyof ComponentsQuantities
  const componentGreatestQuantity = quantities[namePropertyComponent]

  const incrementY = 1

  return {
    x: componentGreatestQuantity,
    y: componentGreatestQuantity * incrementY / componentsValues.length,
    z: 0
  }
}

export function getPositionTwoDimension({ components }: GetPositionTwoDimensionParams): GetPositionTwoDimensionResponse {

  const quantities = {
    producers: components.producer.quantity,
    exchanges: components.exchange.quantity,
    queues: components.queue.quantity,
    consumers: components.consumer.quantity,
  }

  const greatestCoordinates = getCoordinatesMajorTwoDimensions({ quantities })

  const positionCameraInitial = { position: [greatestCoordinates.x, greatestCoordinates.y, 180], fov: 50 }

  const producersPositions = createPositionsComponentTwoDimension({ component: components.producer, typeFormation: FORMATIONS_TYPE_TWO_DIMENSION.LINEAR, componentType: COMPONENT_INFO_TYPE.PRODUCER, greatestCoordinates })
  const exchangesPositions = createPositionsComponentTwoDimension({ component: components.exchange, typeFormation: FORMATIONS_TYPE_TWO_DIMENSION.LINEAR, componentType: COMPONENT_INFO_TYPE.EXCHANGE, greatestCoordinates })
  const queuesPositions = createPositionsComponentTwoDimension({ component: components.queue, typeFormation: FORMATIONS_TYPE_TWO_DIMENSION.LINEAR, componentType: COMPONENT_INFO_TYPE.QUEUE, greatestCoordinates })
  const consumersPositions = createPositionsComponentTwoDimension({ component: components.consumer, typeFormation: FORMATIONS_TYPE_TWO_DIMENSION.LINEAR, componentType: COMPONENT_INFO_TYPE.CONSUMER, greatestCoordinates })
  const positions: ComponentsPositions = {
    producer: producersPositions,
    exchange: exchangesPositions,
    queue: queuesPositions,
    consumer: consumersPositions,
  }

  return {
    positions,
    cameraInitialPosition: positionCameraInitial
  }
}
