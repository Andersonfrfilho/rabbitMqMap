import { verifyAlreadyExistComponentInPositionIndex } from "@contexts/position/utils/verifyAlreadyExistComponentInPositionIndex";

describe('verifyAlreadyExistComponentInPositionIndex', () => {
  it('should be call verifyAlreadyExistComponentInPositionIndex verify index', () => {
    // ARRANGE
    const index = 0
    const numberIndex = [0, 2, 3, 4, 5, 6]
    const expectResult = numberIndex.some(positionIndex => positionIndex === index)
    // ACT
    const result = verifyAlreadyExistComponentInPositionIndex({
      index, positionIndexes: numberIndex
    })

    // ASSERT
    expect(result).toEqual(expectResult);
  })
})
