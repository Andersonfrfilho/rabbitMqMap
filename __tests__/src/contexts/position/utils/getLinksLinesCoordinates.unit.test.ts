import { COMPONENT_TYPE } from "@enums/components.enum";
import { getLinksLinesCoordinates } from "@contexts/position/utils/getLinksLinesCoordinates";
import { componentsLines } from "../mocks/component.context.mock";
import { Position } from "@constants/position.constant";

describe('getLinksLinesCoordinates', () => {
  it('should be call getLinksLinesCoordinates and return lines to position', () => {
    // ARRANGE
    const bindingsLines = componentsLines.reduce((accumulator, component): Position[][] => [...accumulator, ...component.bindings.map((componentType): Position[] => componentType.lines)], [])

    // ACT
    const linksLines = getLinksLinesCoordinates({
      componentLinks: componentsLines, componentType: COMPONENT_TYPE.BINDING
    })

    // ASSERT
    expect(linksLines.length).toEqual(bindingsLines.length);
  })
})
