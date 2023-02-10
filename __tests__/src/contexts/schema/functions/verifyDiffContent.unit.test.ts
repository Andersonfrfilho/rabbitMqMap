import { verifyDiffContent } from "@contexts/schema/functions/verifyDiffContent";
import { COMPONENT_INFO_TYPE } from "@enums/components.enum";
import { consumers } from "../../../../src/services/rabbitmq/mocks/consumers.mock";
import { exchanges } from "../../../../src/services/rabbitmq/mocks/exchange.mock";
import { producers } from "../../../../src/services/rabbitmq/mocks/producer.mock";
import { queues } from "../../../../src/services/rabbitmq/mocks/queue.mock";


describe('verifyDiffContent', () => {
  describe('Verify diffs Component type producers', () => {
    it('should be call verifyDiffContent and return true', () => {
      // ARRANGE
      // ACT
      const componentsPositions = verifyDiffContent({ components: producers, componentsEditor: producers, type: COMPONENT_INFO_TYPE.PRODUCER })

      // ASSERT
      expect(componentsPositions).toBeTruthy();
    })

    it('should be call verifyDiffContent and components with components diffs return false', () => {
      // ARRANGE
      // ACT
      const componentsPositions = verifyDiffContent({ components: [...producers, { id: 'name_producers_2', messages: [] } as any], componentsEditor: [...producers, { id: 'name_producer_3', messages: [] } as any], type: COMPONENT_INFO_TYPE.PRODUCER })

      // ASSERT
      expect(componentsPositions).toBeFalsy();
    })
  })

  describe('Verify diffs Component type exchanges', () => {
    it('should be call verifyDiffContent and return true', () => {
      // ARRANGE
      // ACT
      const componentsPositions = verifyDiffContent({ components: queues, componentsEditor: queues, type: COMPONENT_INFO_TYPE.EXCHANGE })

      // ASSERT
      expect(componentsPositions).toBeTruthy();
    })

    it('should be call verifyDiffContent and components with components diffs return false', () => {
      // ARRANGE
      // ACT
      const componentsPositions = verifyDiffContent({ components: [...exchanges, { name: 'name_exchanges_2' } as any], componentsEditor: [...exchanges, { name: 'name_exchanges_3' } as any], type: COMPONENT_INFO_TYPE.EXCHANGE })

      // ASSERT
      expect(componentsPositions).toBeFalsy();
    })
  })

  describe('Verify diffs Component type queues', () => {
    it('should be call verifyDiffContent and return true', () => {
      // ARRANGE
      // ACT
      const componentsPositions = verifyDiffContent({ components: queues, componentsEditor: queues, type: COMPONENT_INFO_TYPE.QUEUE })

      // ASSERT
      expect(componentsPositions).toBeTruthy();
    })

    it('should be call verifyDiffContent and components with components diffs return false', () => {
      // ARRANGE
      // ACT
      const componentsPositions = verifyDiffContent({ components: [...queues, { name: 'name_queue_2' } as any], componentsEditor: [...queues, { name: 'name_queue_3' } as any], type: COMPONENT_INFO_TYPE.QUEUE })

      // ASSERT
      expect(componentsPositions).toBeFalsy();
    })
  })

  describe('Verify diffs Component type consumers', () => {
    it('should be call verifyDiffContent and return true', () => {
      // ARRANGE
      // ACT
      const componentsPositions = verifyDiffContent({ components: consumers as any, componentsEditor: consumers as any, type: COMPONENT_INFO_TYPE.CONSUMER })

      // ASSERT
      expect(componentsPositions).toBeTruthy();
    })

    it('should be call verifyDiffContent and components with components diffs return false', () => {
      // ARRANGE
      // ACT
      const componentsPositions = verifyDiffContent({ components: [...consumers, { name: 'name_consumer_2' } as any], componentsEditor: [...consumers, { name: 'name_consumer_3' } as any], type: COMPONENT_INFO_TYPE.CONSUMER })

      // ASSERT
      expect(componentsPositions).toBeFalsy();
    })
  })

})
