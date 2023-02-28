import { Producer } from "@services/rabbitmq/interfaces/producer.interface";
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { Queue } from "@services/rabbitmq/interfaces/queue.interface";
import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface";
import { Component, Components, ComponentsPositions } from '@contexts/interfaces/components.interface';
import { Position } from '@contexts/interfaces/positions.interface';
import { FORMATIONS_TYPE } from "../enum/position.enum";
import { Coordinates, quadrilateralFormation } from "../utils/quadrilateralFormation";
import { COMPONENT_INFO_TYPE } from "@enums/components.enum";

export interface CreatePositionsComponentParams {
  component: Component<Producer | Exchange | Queue | Consumer>;
  typeFormation: FORMATIONS_TYPE;
  componentType: COMPONENT_INFO_TYPE;
  greatestCoordinates: Coordinates
}

export const createPositionsComponent = ({ component, typeFormation, componentType, greatestCoordinates }: CreatePositionsComponentParams): Position[] => {
  switch (typeFormation) {
    case FORMATIONS_TYPE.SQUARE:
      return quadrilateralFormation({ component, componentType, greatestCoordinates });
    case FORMATIONS_TYPE.CIRCLE:
      return quadrilateralFormation({ component, componentType, greatestCoordinates });
    case FORMATIONS_TYPE.POLYGON:
      return quadrilateralFormation({ component, componentType, greatestCoordinates });
    default:
      break;
  }
}
