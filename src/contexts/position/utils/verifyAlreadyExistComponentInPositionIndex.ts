interface VerifyAlreadyExistComponentInPositionParams {
  positionIndexes: number[];
  index: number;
}

export function verifyAlreadyExistComponentInPositionIndex({ positionIndexes, index }: VerifyAlreadyExistComponentInPositionParams): boolean {
  return positionIndexes.some(positionIndex => positionIndex === index)
}