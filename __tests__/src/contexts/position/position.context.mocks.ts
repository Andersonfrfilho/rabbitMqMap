export const getConsumerMock = jest.fn()
export const getQueuePositionsCoordinatesMock = jest.fn()
export const createPositionsComponentsMock = jest.fn()
export const definePositionsComponentsMock = jest.fn()
export const defineLinesQueuesBetweenExchangesConsumersMock = jest.fn()
export const getLinksLinesCoordinatesMock = jest.fn()
export const defineMessagePositionsMock = jest.fn()

export const usePositionMock = {
  getConsumers: () => getConsumerMock(),
  getQueuePositionsCoordinates: () => getQueuePositionsCoordinatesMock(),
  createPositionsComponents: () => createPositionsComponentsMock(),
  definePositionsComponents: () => definePositionsComponentsMock(),
  defineLinesQueuesBetweenExchangesConsumers: () => defineLinesQueuesBetweenExchangesConsumersMock(),
  getLinksLinesCoordinates: () => getLinksLinesCoordinatesMock(),
  defineMessagePositions: () => defineMessagePositionsMock(),
}

export const positions = {
  "producer": [],
  "exchange": [],
  "queue": [
    {
      "position": [
        0,
        1,
        6
      ],
      "info": {
        "name": "queue-1",
        "type": "classic",
        "componentType": "queue"
      },
      "id": "f8336c8a-5ab3-40cf-868b-6cac11c9c25a"
    },
    {
      "position": [
        2,
        1,
        6
      ],
      "info": {
        "name": "queue-1-dead-letter",
        "type": "classic",
        "componentType": "queue"
      },
      "id": "3fa93505-3a19-472e-94c3-0ac251838ef3"
    },
    {
      "position": [
        4,
        1,
        6
      ],
      "info": {
        "name": "queue-2",
        "type": "classic",
        "componentType": "queue"
      },
      "id": "08a083c0-5251-4749-8f27-88daf8d75783"
    },
    {
      "position": [
        1,
        2,
        6
      ],
      "info": {
        "name": "queue-3",
        "type": "classic",
        "componentType": "queue"
      },
      "id": "6ed0da70-5800-40a4-adcd-357f08dd5e5d"
    },
    {
      "position": [
        3,
        2,
        6
      ],
      "info": {
        "name": "queue-4",
        "type": "classic",
        "componentType": "queue"
      },
      "id": "62a59096-e641-4b4d-8dc8-43c0ddc91a43"
    }
  ],
  "consumer": []
}