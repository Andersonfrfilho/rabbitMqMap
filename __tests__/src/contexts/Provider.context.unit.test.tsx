import React from "react";
import { ProviderStates } from '@contexts/Provider';
import { useComponent } from '@contexts/component/Component.context';
import { addMessageInProducers } from '@contexts/component/functions/addMessageInProducers';
import { createComponents } from '@contexts/component/functions/createComponents';
import { getConsumers } from '@contexts/component/functions/getConsumers';
import { removeMessageInProducers } from '@contexts/component/functions/removeMessageInProducers';
import { usePosition } from '@contexts/position/Position.context';
import { createPositionsComponents } from '@contexts/position/functions/createPositionComponents';
import { defineLinesQueuesBetweenExchangesConsumers } from '@contexts/position/functions/defineLinesQueuesBetweenExchangesConsumers';
import { defineMessagePositions } from '@contexts/position/functions/defineMessagePositions';
import { definePositionsComponents } from '@contexts/position/functions/definePositionsComponents';
import { getLinksLinesCoordinates } from '@contexts/position/utils/getLinksLinesCoordinates';
import { getQueuePositionsCoordinates } from '@contexts/position/utils/getQueuePositionsCoordinates';
import { useSchema } from '@contexts/schema/Schema.context';
import { verifyDiffContent } from '@contexts/schema/functions/verifyDiffContent';
import { render } from '@testing-library/react';

const TestingComponent = () => {
  const { addMessageInProducers, createComponents, getConsumers, removeMessageInProducers } = useComponent();
  const { createPositionsComponents, defineLinesQueuesBetweenExchangesConsumers, defineMessagePositions, definePositionsComponents, getLinksLinesCoordinates, getQueuePositionsCoordinates } = usePosition();
  const { verifyDiffContent } = useSchema();

  return (
    <>
      <p>TestingComponent</p>
    </>
  );
};

describe('<ProviderState />', () => {
  test('provides expected SchemaContext obj to child elements', () => {
    render(
      <ProviderStates>
        <TestingComponent />
      </ProviderStates>,
    );

    expect(addMessageInProducers).toBeDefined()
    expect(createComponents).toBeDefined()
    expect(getConsumers).toBeDefined()
    expect(removeMessageInProducers).toBeDefined()

    expect(createPositionsComponents).toBeDefined()
    expect(defineLinesQueuesBetweenExchangesConsumers).toBeDefined()
    expect(defineMessagePositions).toBeDefined()
    expect(definePositionsComponents).toBeDefined()
    expect(getLinksLinesCoordinates).toBeDefined()
    expect(getQueuePositionsCoordinates).toBeDefined()

    expect(verifyDiffContent).toBeDefined()
  })
})