import { render, screen } from '@testing-library/react'
import Home, { getStaticProps } from '@pages/index'
import { InferGetStaticPropsType } from 'next'
import { getConsumers } from '@contexts/position/utils/getConsumers'
import { createPositionsComponentsMock, defineLinesQueuesBetweenExchangesConsumersMock, defineMessagePositionsMock, definePositionsComponentsMock, getConsumerMock, getLinksLinesCoordinatesMock, getQueuePositionsCoordinatesMock, usePositionMock } from '../contexts/position/position.context.mocks'


jest.mock('@contexts/position/Position.context', () => {
  return {
    usePosition: () => usePositionMock
  }
})

describe('Home', () => {
  it('renders a heading', () => {
    getConsumerMock.mockReturnValue(() => [])
    const data: InferGetStaticPropsType<typeof getStaticProps> = { queues: [], exchanges: [], producers: [] }

    render(<Home {...data} />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
