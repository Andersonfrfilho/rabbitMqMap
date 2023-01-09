import { Position as TypePosition } from "@constants/position.constant";
import { COMPONENT_INFO_TYPE } from "@enums/components.enum";

export interface Info {
  name: string;
  type?: string;
  componentType: COMPONENT_INFO_TYPE;
}

export type Position = {
  position: TypePosition,
  info: Info,
  id: string;
}

export type PropertyPosition = {
  position: Position
}