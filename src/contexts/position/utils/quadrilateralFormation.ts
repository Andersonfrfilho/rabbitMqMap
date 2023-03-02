import { v4 as uuidV4 } from 'uuid';
import { Producer } from "@services/rabbitmq/interfaces/producer.interface";
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { Queue } from "@services/rabbitmq/interfaces/queue.interface";
import { Consumer } from "@services/rabbitmq/interfaces/consumer.interface";
import { Component } from '@contexts/interfaces/components.interface';
import { DEPTH } from "@enums/positions.enum";
import { COMPONENT_INFO_TYPE } from "@enums/components.enum";
import { builderInfoComponent } from '../builder/info.builder';
import { Position as PositionCoordinates } from '@constants/position.constant';
import { Position } from '@contexts/interfaces/positions.interface';

export interface QuadrilLateralFormationParams {
  component: Component<Producer | Exchange | Queue | Consumer>;
  componentType: COMPONENT_INFO_TYPE;
  greatestCoordinates: Coordinates
}

export const quadrilateralFormation = ({ component, componentType, greatestCoordinates }: QuadrilLateralFormationParams): Position[] => {
  const square = Math.sqrt(component.quantity)

  if (isPerfectSquare({ square, value: component.quantity })) {
    return squareFormation({ greatestCoordinates, depth: component.depth, quantity: component.quantity, square, items: component.items, type: componentType })
  }
  return rectangleFormation({ greatestCoordinates, depth: component.depth, quantity: component.quantity, square, items: component.items, type: componentType })

}

interface IsPerfectSquareParams {
  value: number;
  square: number;
}

function isPerfectSquare({ square, value }: IsPerfectSquareParams): boolean {
  if (value >= 0 && Number.isInteger(square)) {
    return ((square * square) === value);
  }
  return false;
}

interface FormationsParams {
  depth: DEPTH;
  square: number;
  quantity: number;
  items: Array<Queue | Producer | Exchange | Consumer>;
  type: COMPONENT_INFO_TYPE;
  greatestCoordinates: Coordinates
}

interface SquareFormationsParams extends FormationsParams { }

function squareFormation({ depth, quantity, square, items, type, greatestCoordinates }: SquareFormationsParams): Position[] {
  const coordinates: PositionCoordinates[] = []

  const greatestCoordinatesLocals = {
    x: square * quantity,
    y: square * quantity,
    z: depth
  }

  const { x, y, z } = getComponentPositionIncremente({
    greatestCoordinates,
    greatestCoordinatesLocals
  })

  for (let i = 0; i < square; i += 1) {
    for (let j = 0; j < square; j += 1) {
      coordinates.push([(i * square) + x, (j * square) + y, z])
    }
  }

  return items.map((component, index) => {
    const info = builderInfoComponent({ componentName: type, data: component })

    return {
      position: coordinates[index],
      info,
      id: uuidV4()
    }
  })
}

interface RectangleFormationsParams extends FormationsParams { }

function rectangleFormation({ depth, quantity, square, items, type, greatestCoordinates }: RectangleFormationsParams): Position[] {
  const squareIntRoundDown = Math.floor(square)
  const amountRows = squareIntRoundDown
  const amountColumns = Math.ceil(quantity / squareIntRoundDown)

  const greatestCoordinatesLocals = {
    x: amountRows * square,
    y: amountColumns * square,
    z: depth
  }

  const { x: incrementX, y: incrementY, z } = getComponentPositionIncremente({
    greatestCoordinates,
    greatestCoordinatesLocals
  })

  const coordinates: Array<Array<Number>> = []
  for (let x = 0; x < amountColumns; x += 1) {
    for (let y = 0; y < amountRows; y += 1) {
      coordinates.push([(x * square) + incrementX, (y * square) + incrementY, z])
    }
  }
  return items.map((component, index) => {
    const info = builderInfoComponent({ componentName: type, data: component })

    return {
      position: coordinates[index],
      info,
      id: uuidV4()
    }
  })
}

interface Components {
  producers: number,
  exchanges: number,
  queues: number,
  consumers: number
}

interface SquareCoordinatesParams {
  quantities: Components
}

export interface Coordinates {
  x: number,
  y: number,
  z: number,
}

interface GetCoordinatesMajorResponse extends Coordinates { }

export function getCoordinatesMajor({ quantities }: SquareCoordinatesParams): GetCoordinatesMajorResponse {
  const componentsValues = Object.values(quantities)
  const componentsProperties = Object.keys(quantities)
  const greatestValueIndex = componentsValues.reduce((previousIndex, value, i, arr) => arr[previousIndex] > value ? previousIndex : i, 0)
  const namePropertyComponent = componentsProperties[greatestValueIndex] as keyof Components
  const componentGreatestQuantity = quantities[namePropertyComponent]

  const square = Math.sqrt(componentGreatestQuantity)
  if (isPerfectSquare({ square, value: componentGreatestQuantity })) {
    const componentMaxCoordinate = square * componentGreatestQuantity
    const zDistance = Math.floor(square * componentGreatestQuantity / componentsValues.length)
    return {
      x: componentMaxCoordinate,
      y: componentMaxCoordinate,
      z: zDistance
    }
  }
  const squareIntRoundDown = Math.floor(square)
  const amountColumns = squareIntRoundDown
  const amountRows = Math.ceil(componentGreatestQuantity / squareIntRoundDown)
  const maxValueColumn = square * amountColumns
  const maxValueRow = square * amountRows
  const zDistance = Math.floor(maxValueRow / componentsValues.length)

  return {
    x: maxValueColumn,
    y: maxValueRow,
    z: zDistance
  }
}

interface GetPositionInitialParams {
  greatestCoordinatesLocals: Coordinates, greatestCoordinates: Coordinates
}


function getComponentPositionIncremente({ greatestCoordinatesLocals, greatestCoordinates }: GetPositionInitialParams): Coordinates {

  const diffMaxX = greatestCoordinates.x - greatestCoordinatesLocals.x
  const diffMaxY = greatestCoordinates.y - greatestCoordinatesLocals.y
  const initialX = diffMaxX / 2
  const initialY = diffMaxY / 2
  return {
    x: initialX,
    y: initialY,
    z: greatestCoordinates.z * greatestCoordinatesLocals.z
  }
}