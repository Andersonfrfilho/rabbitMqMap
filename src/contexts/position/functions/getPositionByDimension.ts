import { Dimension } from "@enums/dimensions.enum";
import { getPositionThreeDimension } from "./getPositionThreeDimension";
import { getPositionTwoDimension } from "./getPositionTwoDimension";
import { ComponentsPositions, Components } from "@contexts/interfaces/components.interface";

export interface GetPositionByDimensionParams {
  dimension: Dimension;
  components: Components;
}

export interface GetPositionByDimensionResponse {
  positions: ComponentsPositions
  cameraInitialPosition: {
    position: number[];
    fov: number;
  }
}

export function getPositionByDimension({ dimension, components }: GetPositionByDimensionParams): GetPositionByDimensionResponse {
  switch (dimension) {
    case Dimension.three:
      return getPositionThreeDimension({ components });
    default:
      return getPositionTwoDimension({ components });
  }
}