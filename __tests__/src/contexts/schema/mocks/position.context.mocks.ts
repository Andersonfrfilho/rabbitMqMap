export const verifyDiffContentMock = jest.fn()


export const useSchemaMock = {
  verifyDiffContent: () => verifyDiffContentMock(),
}
