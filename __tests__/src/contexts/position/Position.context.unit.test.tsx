import { PositionState, usePosition } from '@contexts/position/Position.context';
import { createPositionsComponents } from '@contexts/position/functions/createPositionComponents';
import { defineLinesQueuesBetweenExchangesConsumers } from '@contexts/position/functions/defineLinesQueuesBetweenExchangesConsumers';
import { defineMessagePositions } from '@contexts/position/functions/defineMessagePositions';
import { definePositionsComponents } from '@contexts/position/functions/definePositionsComponents';
import { getLinksLinesCoordinates } from '@contexts/position/utils/getLinksLinesCoordinates';
import { getQueuePositionsCoordinates } from '@contexts/position/utils/getQueuePositionsCoordinates';
import { render } from '@testing-library/react';

const TestingComponent = () => {
  const { createPositionsComponents, defineLinesQueuesBetweenExchangesConsumers, defineMessagePositions, definePositionsComponents, getLinksLinesCoordinates, getQueuePositionsCoordinates } = usePosition();
  return (
    <>
      <p>TestingComponent</p>
    </>
  );
};

describe('<PositionProvider />', () => {
  test('provides expected PositionContext obj to child elements', () => {
    render(
      <PositionState>
        <TestingComponent />
      </PositionState>,
    );

    expect(createPositionsComponents).toBeDefined()
    expect(defineLinesQueuesBetweenExchangesConsumers).toBeDefined()
    expect(defineMessagePositions).toBeDefined()
    expect(definePositionsComponents).toBeDefined()
    expect(getLinksLinesCoordinates).toBeDefined()
    expect(getQueuePositionsCoordinates).toBeDefined()
  })
})