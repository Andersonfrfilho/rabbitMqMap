import { render, screen } from '@testing-library/react'
import Home, { getStaticProps } from '@pages/index'
import { InferGetStaticPropsType } from 'next'

let mockGetConsumer = jest.fn()
jest.mock('@contexts/position/Position.context', () => {
  return {
    usePosition: () => mockGetConsumer()
  }
})

describe('Home', () => {
  it('renders a heading', () => {
    mockGetConsumer.mockReturnValue(() => "uhulll")
    const data: InferGetStaticPropsType<typeof getStaticProps> = { queues: [], exchanges: [], producers: [] }

    render(<Home {...data} />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
