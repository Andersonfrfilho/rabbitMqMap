import { ComponentsPositions } from "@contexts/interfaces/components.interface";
import { GetPositionByDimensionResponse } from "./getPositionByDimension";

interface GetPositionTwoDimensionResponse extends GetPositionByDimensionResponse { }

export function getPositionTwoDimension(): GetPositionTwoDimensionResponse {
  return {} as GetPositionTwoDimensionResponse
}
