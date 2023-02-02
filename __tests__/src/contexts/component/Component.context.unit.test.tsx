import { ComponentState, useComponent } from '@contexts/component/Component.context';
import { addMessageInProducers } from '@contexts/component/functions/addMessageInProducers';
import { createComponents } from '@contexts/component/functions/createComponents';
import { removeMessageInProducers } from '@contexts/component/functions/removeMessageInProducers';
import { getConsumers } from '@services/rabbitmq/rabbitmq.service';
import { render } from '@testing-library/react';

const TestingComponent = () => {
  const { addMessageInProducers, createComponents, getConsumers, removeMessageInProducers } = useComponent();
  return (
    <>
      <p>TestingComponent</p>
    </>
  );
};

describe('<ComponentProvider />', () => {
  test('provides expected ComponentContext obj to child elements', () => {
    render(
      <ComponentState>
        <TestingComponent />
      </ComponentState>,
    );

    expect(addMessageInProducers).toBeDefined()
    expect(createComponents).toBeDefined()
    expect(getConsumers).toBeDefined()
    expect(removeMessageInProducers).toBeDefined()
  })
})