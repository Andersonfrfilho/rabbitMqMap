import { findColumn } from "@utils/positions"

describe('findColumn', () => {
  it('should be return index column', () => {
    const result = findColumn(10, 1)
    expect(result).toEqual(1)
  })
})