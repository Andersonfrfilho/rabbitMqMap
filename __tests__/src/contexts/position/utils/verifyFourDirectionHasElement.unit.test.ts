import { verifyFourDirectionHasElement } from "@contexts/position/utils/verifyFourDirectionHasElement"
import { components, } from "../mocks/component.context.mock"

describe('verifyFourDirectionHasElement', () => {
  it('should be call verifyFourDirectionHasElement verify index available', () => {
    // ARRANGE
    const positionsIndexes = [0, 2, 3, 4, 5, 6, 7, 8, 9]

    // ACT
    const result = verifyFourDirectionHasElement({
      component: components.consumer,
      indexPosition: 3,
      positionsIndexes: positionsIndexes,
      positionsQuantityIndexes: positionsIndexes.length,
      row: 0
    })

    // ASSERT
    expect(result).toEqual(true);
  })

  it('should be call verifyFourDirectionHasElement verify up element available', () => {
    // ARRANGE
    const positionsIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    // ACT
    const result = verifyFourDirectionHasElement({
      component: components.consumer,
      indexPosition: 4,
      positionsIndexes: positionsIndexes,
      positionsQuantityIndexes: positionsIndexes.length,
      row: 1
    })

    // ASSERT
    expect(result).toEqual(true);
  })


  it('should be call verifyFourDirectionHasElement verify down element available', () => {
    // ARRANGE
    const positionsIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    // ACT
    const result = verifyFourDirectionHasElement({
      component: components.consumer,
      indexPosition: 4,
      positionsIndexes: positionsIndexes,
      positionsQuantityIndexes: positionsIndexes.length,
      row: 1
    })

    // ASSERT
    expect(result).toEqual(true);
  })
})
