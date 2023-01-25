import React from 'react'
import { fireEvent, render, waitFor, act, findByTestId, getAllByTestId, } from '@testing-library/react'
import CodeEditor, { Props } from '@components/CodeEditor.component'
import { faker } from '@faker-js/faker'
import { validator } from '@schemas/validator';
import { SendMessage } from '@components/SendMessage.component';
import { exchanges, exchangesPosition } from '../services/rabbitmq/mocks/exchange.mock'
import { producers } from '../services/rabbitmq/mocks/producer.mock';
import { UNDEFINED } from '@constants/commons.constant';
import { addMessageInProducersMock, removeMessageInProducersMock, useComponentMock } from '../contexts/component/mocks/component.context.mock';

jest.mock('@contexts/component/Component.context.tsx', () => {
  return {
    useComponent: () => useComponentMock
  }
})

describe('SendMessage', () => {
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
  const routeKey = faker.name.firstName()
  const username = faker.name.firstName()
  const payload = faker.random.words()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should renders a component', () => {
    // ARRANGE
    // ACT
    const { getByTestId } = render(<SendMessage exchanges={exchanges} producers={producers} setMessage={() => { }} />)
    const codeEditorComponent = getByTestId("accordion-send-message")
    const accordionIconAdd = getByTestId("accordion-send-message-button-icon")

    // ASSERT
    expect(codeEditorComponent).toBeInTheDocument()
    expect(accordionIconAdd).toBeInTheDocument()
  })

  it('should renders a component and expand button accordion', async () => {
    // ARRANGE
    const { getByTestId } = render(<SendMessage exchanges={exchanges} producers={producers} setMessage={() => { }} />)
    const accordionButton = getByTestId("accordion-send-message-button-expand")

    // ACT
    act(() => {
      fireEvent.click(accordionButton);
    })

    const accordionMinusButton = getByTestId("accordion-send-message-button-minus-icon")
    // ASSERT
    await waitFor(() => {
      expect(accordionMinusButton).toBeInTheDocument()
    })
  })

  it('should renders a component and expand button accordion', async () => {
    // ARRANGE
    const { getByTestId } = render(<SendMessage exchanges={exchanges} producers={producers} setMessage={() => { }} />)
    const accordionButton = getByTestId("accordion-send-message-button-expand")

    // ACT
    act(() => {
      fireEvent.click(accordionButton);
    })

    const accordionMinusButton = getByTestId("accordion-send-message-button-minus-icon")
    // ASSERT
    await waitFor(() => {
      expect(accordionMinusButton).toBeInTheDocument()
    })
  })

  it('should renders a component and expand button accordion and select exchange with value UNDEFINED', async () => {
    // ARRANGE
    const { getByTestId, getAllByTestId } = render(<SendMessage exchanges={exchanges} producers={producers} setMessage={() => { }} />)
    const accordionButton = getByTestId("accordion-send-message-button-expand")
    const accordionButtonSelect = getByTestId("accordion-send-message-exchange-select")

    // ACT
    act(() => {
      fireEvent.click(accordionButton);
    })

    const accordionMinusButton = getByTestId("accordion-send-message-button-minus-icon")
    const accordionSendMessageAddButton = getByTestId("accordion-send-message-button-add-message")

    // ACT
    act(() => {
      fireEvent.change(accordionButtonSelect, { value: UNDEFINED })
      fireEvent.click(accordionSendMessageAddButton)
    })

    // ASSERT
    await waitFor(() => {
      expect(accordionMinusButton).toBeInTheDocument()
      expect(accordionButtonSelect).toBeInTheDocument()
      expect(accordionSendMessageAddButton).toBeInTheDocument()
      expect(accordionButtonSelect).toHaveValue(UNDEFINED)
    })
  })

  it('should renders a component and expand button accordion and select exchange with value valid', async () => {
    // ARRANGE
    addMessageInProducersMock.mockReturnValue(producers)
    removeMessageInProducersMock.mockReturnValue(producers)

    const { getByTestId, getAllByTestId } = render(<SendMessage exchanges={exchanges} producers={producers} setMessage={() => { }} />)
    const accordionButton = getByTestId("accordion-send-message-button-expand")

    // ACT
    act(() => {
      fireEvent.click(accordionButton);
    })

    const accordionSendMessageSelect = getByTestId("accordion-send-message-exchange-select")

    act(() => {
      fireEvent.change(accordionSendMessageSelect, {
        target: {
          value: exchanges[exchanges.length - 1].name
        }
      })
    })

    const accordionSendMessageTextAreaPayloadMessage = getByTestId("accordion-send-message-text-area-payload-message")
    const accordionSendMessageRouteKeyButtonGroup = getAllByTestId("accordion-send-message-exchange-bindings-button")
    const accordionSendMessageAddButton = getByTestId("accordion-send-message-button-add-message")

    act(() => {
      fireEvent.input(accordionSendMessageTextAreaPayloadMessage, {
        target: {
          value: payload
        }
      })
      fireEvent.click(accordionSendMessageRouteKeyButtonGroup[accordionSendMessageRouteKeyButtonGroup.length - 1])
    })

    act(() => {
      fireEvent.click(accordionSendMessageAddButton)
    })

    // ASSERT
    await waitFor(() => {
      expect(accordionSendMessageSelect).toBeInTheDocument()
      expect(accordionSendMessageAddButton).toBeInTheDocument()
    })
  })

  it('should renders a component and expand button accordion and stop message', async () => {
    // ARRANGE
    const { getByTestId, getAllByTestId } = render(<SendMessage exchanges={exchanges} producers={producers} setMessage={() => { }} />)
    const accordionButton = getByTestId("accordion-send-message-button-expand")

    // ACT
    act(() => {
      fireEvent.click(accordionButton);
    })

    const accordionStopMessageButton = getAllByTestId("icon-button-stop-message-button-expand")

    act(() => {
      fireEvent.click(accordionStopMessageButton[0]);
    })

    // ASSERT
    await waitFor(() => {
      expect(accordionStopMessageButton[0]).toBeInTheDocument()
    })
  })

  it('should renders a component and expand button accordion and select exchange with value valid when exchange not type topic', async () => {
    // ARRANGE
    addMessageInProducersMock.mockReturnValue(producers)
    removeMessageInProducersMock.mockReturnValue(producers)

    const { getByTestId, getAllByTestId } = render(<SendMessage exchanges={exchanges} producers={producers} setMessage={() => { }} />)
    const accordionButton = getByTestId("accordion-send-message-button-expand")

    // ACT
    act(() => {
      fireEvent.click(accordionButton);
    })

    const accordionSendMessageSelect = getByTestId("accordion-send-message-exchange-select")

    act(() => {
      fireEvent.change(accordionSendMessageSelect, {
        target: {
          value: exchanges[0].name
        }
      })
    })

    const accordionSendMessageTextAreaPayloadMessage = getByTestId("accordion-send-message-text-area-payload-message")
    const accordionSendMessageRouteKeyButtonGroup = getAllByTestId("accordion-send-message-exchange-bindings-button")
    const accordionSendMessageAddButton = getByTestId("accordion-send-message-button-add-message")

    act(() => {
      fireEvent.input(accordionSendMessageTextAreaPayloadMessage, {
        target: {
          value: payload
        }
      })
      fireEvent.click(accordionSendMessageRouteKeyButtonGroup[accordionSendMessageRouteKeyButtonGroup.length - 1])
    })

    act(() => {
      fireEvent.click(accordionSendMessageAddButton)
    })

    // ASSERT
    await waitFor(() => {
      expect(accordionSendMessageSelect).toBeInTheDocument()
      expect(accordionSendMessageAddButton).toBeInTheDocument()
    })
  })
})
