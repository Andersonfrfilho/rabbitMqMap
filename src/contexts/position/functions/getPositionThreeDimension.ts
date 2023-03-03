import { ComponentsPositions, Components } from "@contexts/interfaces/components.interface"
import { getCoordinatesMajor } from "../utils/quadrilateralFormation"
import { createPositionsComponent } from "./createPositionComponents";
import { FORMATIONS_TYPE } from "../enum/position.enum";
import { COMPONENT_INFO_TYPE } from "@enums/components.enum";
import { GetPositionByDimensionResponse } from "./getPositionByDimension";

interface GetPositionThreeDimensionParams {
  components: Components;
}

interface GetPositionThreeDimensionResponse extends GetPositionByDimensionResponse { }

export function getPositionThreeDimension({ components }: GetPositionThreeDimensionParams): GetPositionThreeDimensionResponse {
  const quantities = {
    producers: components.producer.quantity,
    exchanges: components.exchange.quantity,
    queues: components.queue.quantity,
    consumers: components.consumer.quantity,
  }

  const greatestCoordinates = getCoordinatesMajor({ quantities })
  const positionCameraInitial = { position: [greatestCoordinates.x / 2, greatestCoordinates.y / 2, greatestCoordinates.z], fov: 50 }

  const producersPositions = createPositionsComponent({ component: components.producer, typeFormation: FORMATIONS_TYPE.SQUARE, componentType: COMPONENT_INFO_TYPE.PRODUCER, greatestCoordinates })
  const exchangesPositions = createPositionsComponent({ component: components.exchange, typeFormation: FORMATIONS_TYPE.SQUARE, componentType: COMPONENT_INFO_TYPE.EXCHANGE, greatestCoordinates })
  const queuesPositions = createPositionsComponent({ component: components.queue, typeFormation: FORMATIONS_TYPE.SQUARE, componentType: COMPONENT_INFO_TYPE.QUEUE, greatestCoordinates })
  const consumersPositions = createPositionsComponent({ component: components.consumer, typeFormation: FORMATIONS_TYPE.SQUARE, componentType: COMPONENT_INFO_TYPE.CONSUMER, greatestCoordinates })
  const positions: ComponentsPositions = {
    producer: producersPositions,
    exchange: exchangesPositions,
    queue: queuesPositions,
    consumer: consumersPositions,
  }

  return { positions, cameraInitialPosition: positionCameraInitial }
}