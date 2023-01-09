import { Position } from "@constants/position.constant";

export interface Parents {
  father: string;
  children: string;
}

export interface Point {
  id: string; positions: Position[]; info?: Parents;
}

export interface PropertyLines {
  lines: Point
}

export interface PropertyManyLines {
  lines: Point[]
}
