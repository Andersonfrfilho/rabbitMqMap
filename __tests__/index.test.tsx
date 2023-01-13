import { render, screen } from '@testing-library/react'
import Home, { getStaticProps } from '@pages/index'
import { InferGetStaticPropsType } from 'next'

describe('Home', () => {
  it('renders a heading', () => {
    const data: InferGetStaticPropsType<typeof getStaticProps> = { queues: [], exchanges: [], producers: [] }
    render(<Home {...data} />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
