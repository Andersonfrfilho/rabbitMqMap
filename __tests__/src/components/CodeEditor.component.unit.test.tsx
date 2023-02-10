import React from 'react'
import { fireEvent, render, waitFor, act, } from '@testing-library/react'
import CodeEditor, { Props } from '@components/CodeEditor.component'
import { faker } from '@faker-js/faker'
import { validator } from '@schemas/validator';

describe('CodeEditor', () => {
  const props: Props = {
    jsonCode: {
      exchanges: [],
      producers: [],
      queues: []
    },
    setComponents: {
      setExchangesEditor: () => { },
      setProducersEditor: () => { },
      setQueuesEditor: () => { }
    }
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should renders a component', () => {
    // ARRANGE
    // ACT
    const { getByTestId } = render(<CodeEditor {...props} />)
    const codeEditorComponent = getByTestId("code-editor")

    // ASSERT
    expect(codeEditorComponent).toBeInTheDocument()
  })

  it('should change editor a anything value', async () => {
    // ARRANGE
    const spyOnUseCallBack = jest.spyOn(React, 'useCallback')
    const value = faker.random.word()

    // ACT
    const { getByTestId, findByRole, queryByText } = render(<CodeEditor {...props} />)
    const codeEditorComponent = getByTestId("code-editor")
    const inputDiv = await findByRole('textbox');

    act(() => {
      fireEvent.change(inputDiv, { target: { textContent: value } });
    })
    const elementWithValueDiv = queryByText(value);

    // ASSERT
    await waitFor(() => {
      expect(spyOnUseCallBack).toHaveBeenCalled()
      expect(codeEditorComponent).toBeInTheDocument()
      expect((elementWithValueDiv as any).cmView.dom.innerHTML).toEqual(value);
    })
  })

  it('should change editor an json format', async () => {
    // ARRANGE
    const spyOnUseCallBack = jest.spyOn(React, 'useCallback')
    const json = "{}"

    // ACT
    const { getByTestId, findByRole } = render(<CodeEditor {...props} />)
    const codeEditorComponent = getByTestId("code-editor")
    const inputDiv = await findByRole('textbox');

    act(() => {
      fireEvent.change(inputDiv, { target: { textContent: json } });
    })

    // ASSERT
    await waitFor(() => {
      expect(spyOnUseCallBack).toHaveBeenCalled()
      expect(codeEditorComponent).toBeInTheDocument()
    })
  })

  it('should change editor and onblur and value not changes', async () => {
    // ARRANGE
    const spyOnUseCallBack = jest.spyOn(React, 'useCallback')
    const json = JSON.stringify([{}])

    // ACT
    const { getByTestId, findByRole } = render(<CodeEditor {...props} />)
    const codeEditorComponent = getByTestId("code-editor")
    const inputDiv = await findByRole('textbox');

    act(() => {
      fireEvent.change(inputDiv, { target: { textContent: json } });
    })
    act(() => {
      fireEvent.blur(inputDiv);
    })

    // ASSERT
    await waitFor(() => {
      expect(spyOnUseCallBack).toHaveBeenCalled()
      expect(codeEditorComponent).toBeInTheDocument()
    })
  })

  it('should change editor and onblur and validator find errors', async () => {
    // ARRANGE
    const errorsValidate = {
      errors: [{ message: '', name: '', argument: '', instance: '' }]
    }
    const spyOnUseCallBack = jest.spyOn(React, 'useCallback')
    const spyValidatorVerify = jest.spyOn(validator, 'validate').mockReturnValue(errorsValidate as any)
    const json = JSON.stringify([{}])

    // ACT
    const { getByTestId, findByRole } = render(<CodeEditor {...props} />)
    const codeEditorComponent = getByTestId("code-editor")
    const inputDiv = await findByRole('textbox');

    act(() => {
      fireEvent.change(inputDiv, { target: { textContent: json } });
    })
    act(() => {
      fireEvent.blur(inputDiv);
    })

    // ASSERT
    await waitFor(() => {
      expect(spyOnUseCallBack).toHaveBeenCalled()
      expect(codeEditorComponent).toBeInTheDocument()
      expect(spyValidatorVerify).toBeCalled()
    })
  })

  it('should change editor and onblur and exchange and binding diff', async () => {
    // ARRANGE
    const spyOnUseCallBack = jest.spyOn(React, 'useCallback')
    const spyValidatorVerify = jest.spyOn(validator, 'validate').mockReturnValue({} as any)
    const json = JSON.stringify({ queues: [{ bindings: [{ source: "binding" }] }], exchanges: [{ name: "exchange" }] })
    const propsWithValue: any = {
      jsonCode: {
        queues: [{ bindings: [{ source: "binding" }] }], exchanges: [{ name: "exchange" }],
        producers: [],
      },
      setComponents: {
        setExchangesEditor: () => { },
        setProducersEditor: () => { },
        setQueuesEditor: () => { }
      }
    }
    // ACT
    const { getByTestId, findByRole } = render(<CodeEditor {
      ...propsWithValue
    } />)
    const codeEditorComponent = getByTestId("code-editor")
    const inputDiv = await findByRole('textbox');

    act(() => {
      fireEvent.change(inputDiv, { target: { textContent: json } });
    })
    act(() => {
      fireEvent.blur(inputDiv);
    })

    // ASSERT
    await waitFor(() => {
      expect(spyOnUseCallBack).toHaveBeenCalled()
      expect(codeEditorComponent).toBeInTheDocument()
      expect(spyValidatorVerify).toBeCalled()
    })
  })
})
