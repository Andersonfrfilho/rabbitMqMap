interface BetweenDTO {
  minimum: number;
  maximum: number;
}
export const between = ({ maximum, minimum }: BetweenDTO): number => {
  return Math.floor(
    Math.random() * (maximum - minimum) + minimum
  )
}