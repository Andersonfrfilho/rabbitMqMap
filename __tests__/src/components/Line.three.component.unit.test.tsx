import React from 'react'
import ReactThreeTestRenderer from '@react-three/test-renderer'
import { LineThree, Props } from '@components/Line.three.component';
import { INITIAL_POSITION } from '@constants/position.constant';

describe('LineThree', () => {
  const props: Props = {
    visibleInfo: false,
    id: 'string',
    positions: INITIAL_POSITION,
    info: {
      children: 'children',
      father: 'children',
    }
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should renders a component', async () => {
    // ARRANGE
    // ACT
    const renderer = await ReactThreeTestRenderer.create(<LineThree {...props} />)
    const mesh = renderer.scene.children[0].allChildren

    // ASSERT
    expect(mesh.length).toBe(2)
  })

  it('should renders a component on click', async () => {
    // ARRANGE
    const renderer = await ReactThreeTestRenderer.create(<LineThree {...props} />)
    const mesh = renderer.scene.children[0]
    const meshChildren = renderer.scene.children[0].allChildren

    // ACT
    await renderer.fireEvent(mesh, 'click')

    // ASSERT
    expect(meshChildren.length).toBe(2)
  })

  it('should renders a component on onPointerOver', async () => {
    // ARRANGE
    const renderer = await ReactThreeTestRenderer.create(<LineThree {...props} />)
    const mesh = renderer.scene.children[0]
    const meshChildren = renderer.scene.children[0].allChildren

    // ACT
    await renderer.fireEvent(mesh, 'onPointerOver')

    // ASSERT
    expect(meshChildren.length).toBe(2)
  })


  it('should renders a component on onPointerOut', async () => {
    // ARRANGE
    const renderer = await ReactThreeTestRenderer.create(<LineThree {...props} />)
    const mesh = renderer.scene.children[0]
    const meshChildren = renderer.scene.children[0].allChildren

    // ACT
    await renderer.fireEvent(mesh, 'onPointerOut')

    // ASSERT
    expect(meshChildren.length).toBe(2)
  })
})
