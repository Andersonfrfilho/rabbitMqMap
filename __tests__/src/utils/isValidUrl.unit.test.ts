import { faker } from "@faker-js/faker";
import { isValidUrl } from "@utils/isValidUrl";

describe('isValidUrl', () => {
  it('should be return true when url is valid', () => {
    const urlValid = faker.internet.url();
    const result = isValidUrl(urlValid)
    expect(result).toBeTruthy()
  })

  it('should be return true when url is invalid', () => {
    const urlInvalid = faker.name.firstName();
    const result = isValidUrl(urlInvalid)
    expect(result).toBeFalsy()
  })
})