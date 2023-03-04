import { Producer } from "@services/rabbitmq/interfaces/producer.interface";
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { Queue } from "@services/rabbitmq/interfaces/queue.interface";
import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface";
import { Component } from '@contexts/interfaces/components.interface';
import { Position } from '@contexts/interfaces/positions.interface';
import { Coordinates, quadrilateralFormationThreeDimension } from "../utils/quadrilateralFormationThreeDimension";
import { COMPONENT_INFO_TYPE } from "@enums/components.enum";
import { FORMATIONS_TYPE_THREE_DIMENSION } from "../enum/position.enum";

export interface CreatePositionsComponentThreeDimensionParams {
  component: Component<Producer | Exchange | Queue | Consumer>;
  typeFormation: FORMATIONS_TYPE_THREE_DIMENSION;
  componentType: COMPONENT_INFO_TYPE;
  greatestCoordinates: Coordinates
}

export const createPositionsComponentThreeDimension = ({ component, typeFormation, componentType, greatestCoordinates }: CreatePositionsComponentThreeDimensionParams): Position[] => {
  switch (typeFormation) {
    default:
      return quadrilateralFormationThreeDimension({ component, componentType, greatestCoordinates });
    // case FORMATIONS_TYPE.CIRCLE:
    //   return quadrilateralFormation({ component, componentType, greatestCoordinates });
    // case FORMATIONS_TYPE.POLYGON:
    //   return quadrilateralFormation({ component, componentType, greatestCoordinates });
  }
}
