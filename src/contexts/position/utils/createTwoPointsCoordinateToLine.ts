import { Position } from '@constants/position.constant';
import { Point } from '@contexts/interfaces/lines.interface';
import { v4 as uuidV4 } from 'uuid';

interface CreateTwoPointsDrawLineResult extends Point { }

interface InfoComponent {
  position: Position;
  name: string;
  destination?: string;
  destinationType?: string;
  routingKey?: string;
}

interface CreateTwoPointsDrawLineParams {
  initialPosition: InfoComponent;
  lastPosition: InfoComponent;
}

export function createTwoPointsCoordinateToLine({ initialPosition, lastPosition }: CreateTwoPointsDrawLineParams): CreateTwoPointsDrawLineResult {
  return { id: uuidV4(), positions: [initialPosition.position, lastPosition.position], info: { children: lastPosition.name, father: initialPosition.name } }
}