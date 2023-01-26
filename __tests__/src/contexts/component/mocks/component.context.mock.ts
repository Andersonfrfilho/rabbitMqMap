export const addMessageInProducersMock = jest.fn()
export const removeMessageInProducersMock = jest.fn()
export const getConsumersMock = jest.fn()
export const createComponentsMock = jest.fn()

export const useComponentMock = {
  addMessageInProducers: () => addMessageInProducersMock(),
  removeMessageInProducers: () => removeMessageInProducersMock(),
  getConsumers: () => getConsumersMock(),
  createComponents: () => createComponentsMock()
}