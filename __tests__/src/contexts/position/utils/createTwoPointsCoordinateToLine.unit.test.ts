import { createTwoPointsCoordinateToLine } from '@contexts/position/utils/createTwoPointsCoordinateToLine';
import { COMPONENT_INFO_TYPE } from '@enums/components.enum';

describe('createPointsBetweenTwoCoordinates', () => {
  it('should be call createPointsBetweenTwoCoordinates and return info position', () => {
    // ARRANGE
    // ACT
    const pointsBetweenTwoCoordinates = createTwoPointsCoordinateToLine({
      initialPosition: {
        routingKey: 'route-key',
        destination: 'destination',
        destinationType: COMPONENT_INFO_TYPE.QUEUE,
        name: 'name-binding',
        position: [0, 0, 0]
      }, lastPosition: {
        routingKey: 'route-key',
        destination: 'destination',
        destinationType: COMPONENT_INFO_TYPE.QUEUE,
        name: 'name-binding',
        position: [1, 1, 1]
      },
    })

    // ASSERT
    expect(pointsBetweenTwoCoordinates).toHaveProperty('id');
    expect(pointsBetweenTwoCoordinates).toHaveProperty('positions');
    expect(pointsBetweenTwoCoordinates).toHaveProperty('info');
    expect(pointsBetweenTwoCoordinates.positions.length).toEqual(2);
  })
})
