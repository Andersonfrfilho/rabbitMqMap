export function findColumn(length: number, indexFound: number) {
  return new Array(length).findIndex((element, index) => (index * length) > indexFound && indexFound < ((index + 1) * length - 1))
}