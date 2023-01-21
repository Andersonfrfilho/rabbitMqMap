import React from 'react'
import ReactThreeTestRenderer from '@react-three/test-renderer'
import { SphereThree, Props } from '@components/Sphere.three.component';

describe('SphereThree', () => {
  const props: Props = {
    visibleInfo: false,
    color: '#000',
    positions: {
      exchangeBetweenQueue: [],
      producerBetweenExchange: [],
      queueBetweenConsumer: []
    },
    exchange: 'string',
    routeKey: 'string',
    messagePayload: 'string',
    time: 0,
    id: 'id'
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should renders a component', async () => {
    // ARRANGE
    // ACT
    const renderer = await ReactThreeTestRenderer.create(<SphereThree {...props} />)
    const mesh = renderer.scene.children[0].allChildren

    // ASSERT
    expect(mesh.length).toBe(2)
  })

  it('should renders a component on click', async () => {
    // ARRANGE
    const renderer = await ReactThreeTestRenderer.create(<SphereThree {...props} />)
    const mesh = renderer.scene.children[0]
    const meshChildren = renderer.scene.children[0].allChildren

    // ACT
    await renderer.fireEvent(mesh, 'click')

    // ASSERT
    expect(meshChildren.length).toBe(2)
  })

  it('should renders a component on onPointerOver', async () => {
    // ARRANGE
    const renderer = await ReactThreeTestRenderer.create(<SphereThree {...props} />)
    const mesh = renderer.scene.children[0]
    const meshChildren = renderer.scene.children[0].allChildren

    // ACT
    await renderer.fireEvent(mesh, 'onPointerOver')

    // ASSERT
    expect(meshChildren.length).toBe(2)
  })


  it('should renders a component on onPointerOut', async () => {
    // ARRANGE
    const renderer = await ReactThreeTestRenderer.create(<SphereThree {...props} />)
    const mesh = renderer.scene.children[0]
    const meshChildren = renderer.scene.children[0].allChildren

    // ACT
    await renderer.fireEvent(mesh, 'onPointerOut')

    // ASSERT
    expect(meshChildren.length).toBe(2)
  })
})
