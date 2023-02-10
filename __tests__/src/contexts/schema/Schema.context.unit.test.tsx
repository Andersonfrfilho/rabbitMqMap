import { SchemaState, useSchema } from '@contexts/schema/Schema.context';
import { verifyDiffContent } from '@contexts/schema/functions/verifyDiffContent';
import { render } from '@testing-library/react';

const TestingComponent = () => {
  const { verifyDiffContent } = useSchema();
  return (
    <>
      <p>TestingComponent</p>
    </>
  );
};

describe('<SchemaState />', () => {
  test('provides expected SchemaContext obj to child elements', () => {
    render(
      <SchemaState>
        <TestingComponent />
      </SchemaState>,
    );

    expect(verifyDiffContent).toBeDefined()
  })
})