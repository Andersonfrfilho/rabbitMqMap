import { Vector3 } from "@react-three/fiber";

export type Position = Vector3 | [x: number, y: number, z: number]

export const POSITION_INITIAL: Position = [0, 0, 0]

export const NUMBER_SEPARATION_LINKS: number = 100;