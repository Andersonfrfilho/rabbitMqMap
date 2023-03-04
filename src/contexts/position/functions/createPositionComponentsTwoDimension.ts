import { Producer } from "@services/rabbitmq/interfaces/producer.interface";
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { Queue } from "@services/rabbitmq/interfaces/queue.interface";
import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface";
import { Component } from '@contexts/interfaces/components.interface';
import { Position } from '@contexts/interfaces/positions.interface';
import { FORMATIONS_TYPE_TWO_DIMENSION } from "../enum/position.enum";
import { Coordinates } from "../utils/quadrilateralFormationThreeDimension";
import { COMPONENT_INFO_TYPE } from "@enums/components.enum";
import { linearFormationTwoDimension } from "./linearFormationTwoDimension";

export interface CreatePositionsComponentTwoDimensionParams {
  component: Component<Producer | Exchange | Queue | Consumer>;
  typeFormation: FORMATIONS_TYPE_TWO_DIMENSION;
  componentType: COMPONENT_INFO_TYPE;
  greatestCoordinates: Coordinates
}

export const createPositionsComponentTwoDimension = ({ component, typeFormation, componentType, greatestCoordinates }: CreatePositionsComponentTwoDimensionParams): Position[] => {
  switch (typeFormation) {
    default:
      return linearFormationTwoDimension({ component, componentType, greatestCoordinates });
  }
}
