import { isJsonString } from "@utils/isJsonString";

describe('isJsonString', () => {
  it('should be return true when json is valid', () => {
    const jsonValid = `{ "any": "value" }`;
    const result = isJsonString(jsonValid)
    expect(result).toBeTruthy()
  })

  it('should be return true when json is invalid', () => {
    const jsonValid = `{ "any": "value",invalid }`;
    const result = isJsonString(jsonValid)
    expect(result).toBeFalsy()
  })
})