import { NUMBER_POINTS } from "@constants/components.constant";
import { createPointsBetweenTwoCoordinates } from "@contexts/position/utils/createPointsBetweenTwoCoordinates";
import { COMPONENT_INFO_TYPE } from "@enums/components.enum";

describe('createPointsBetweenTwoCoordinates', () => {
  it('should be call createPointsBetweenTwoCoordinates and return info position', () => {
    // ARRANGE
    // ACT
    const pointsBetweenTwoCoordinates = createPointsBetweenTwoCoordinates({
      initialPosition: {
        id: 'id-initial-position',
        info: { componentType: COMPONENT_INFO_TYPE.CONSUMER, name: 'name-binding', type: 'binding' },
        position: [0, 0, 0]
      }, lastPosition: {
        id: 'id-last-position',
        info: { componentType: COMPONENT_INFO_TYPE.CONSUMER, name: 'name-binding', type: 'binding' },
        position: [1, 1, 1]
      }, payload: '{}', numberPoints: NUMBER_POINTS
    })

    // ASSERT
    expect(pointsBetweenTwoCoordinates.length).toEqual(NUMBER_POINTS);
  })

  it('should be call createPointsBetweenTwoCoordinates and return info position without number points', () => {
    // ARRANGE
    // ACT
    const pointsBetweenTwoCoordinates = createPointsBetweenTwoCoordinates({
      initialPosition: {
        id: 'id-initial-position',
        info: { componentType: COMPONENT_INFO_TYPE.CONSUMER, name: 'name-binding', type: 'binding' },
        position: [0, 0, 0]
      }, lastPosition: {
        id: 'id-last-position',
        info: { componentType: COMPONENT_INFO_TYPE.CONSUMER, name: 'name-binding', type: 'binding' },
        position: [1, 1, 1]
      }, payload: '{}',
    })

    // ASSERT
    expect(pointsBetweenTwoCoordinates.length).toEqual(NUMBER_POINTS);
  })
})
