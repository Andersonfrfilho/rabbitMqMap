export type DIMENSION_TYPE = [width: number, height: number, depth: number]
const DIMENSION_DEFAULT: DIMENSION_TYPE = [1, 1, 1]
export const PRODUCER_DIMENSION: DIMENSION_TYPE = DIMENSION_DEFAULT


type DIMENSION_EXCHANGE = Array<Number>
export const EXCHANGE_DIMENSION: DIMENSION_EXCHANGE = [2]

const DIMENSION_CYLINDER = [1, 1, 3, 32]
export const QUEUE_DIMENSION: Array<Number> = DIMENSION_CYLINDER

type DIMENSION_SPHERE = Array<Number>
export const DIMENSION_SPHERE: DIMENSION_SPHERE = [1, 32]
export const CONSUMER_DIMENSION: DIMENSION_SPHERE = DIMENSION_SPHERE

export const NUMBER_POINTS: number = 100;