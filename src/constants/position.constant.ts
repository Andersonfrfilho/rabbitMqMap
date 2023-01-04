import { Vector3 } from "three";

export type Position = Vector3 | [x: number, y: number, z: number]

const DEFAULT_POSITION: Position = [0, 0, 0]

export const INITIAL_POSITION: Position = DEFAULT_POSITION

export const NUMBER_SEPARATION_LINKS: number = 100;

export const SPACE_BETWEEN_COORDINATION = 5
