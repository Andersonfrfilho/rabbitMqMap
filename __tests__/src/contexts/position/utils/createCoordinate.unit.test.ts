import { components } from "../mocks/component.context.mock";
import { createCoordinate } from "@contexts/position/utils/createCoordinate";

describe('createCoordinate', () => {
  it('should be call createCoordinate and return info position', () => {
    // ARRANGE
    // ACT
    const componentsPositionsResult = createCoordinate({ component: components.queue, indexPosition: 0 })

    // ASSERT
    expect(componentsPositionsResult).toEqual([0, 1, 6]);
  })
})
