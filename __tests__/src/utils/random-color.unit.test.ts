import { invertHex, randomColor } from "@utils/random-color"

describe('randomColor', () => {
  it('should be return index column', () => {
    const result = randomColor()
    expect(result).toBeDefined()
  })
})

describe('invertHex', () => {
  it('should be return index column', () => {
    const color = randomColor()
    const inverter = invertHex(color)
    expect(inverter).toBeDefined()
  })
})