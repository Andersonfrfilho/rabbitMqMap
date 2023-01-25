export const addMessageInProducersMock = jest.fn()
export const removeMessageInProducersMock = jest.fn()

export const useComponentMock = {
  addMessageInProducers: () => addMessageInProducersMock(),
  removeMessageInProducers: () => removeMessageInProducersMock(),
}