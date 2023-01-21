import React from 'react'
import { COMPONENT_INFO_TYPE } from '@enums/components.enum';
import ReactThreeTestRenderer from '@react-three/test-renderer'
import { ExchangeThree, Props } from '@components/Exchange.three.component';

describe('ExchangeThree', () => {
  const props: Props = {
    visibleInfo: false,
    infoComponent: {
      componentType: COMPONENT_INFO_TYPE.CONSUMER,
      name: '',
      type: '',
    }
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should renders a component', async () => {
    // ARRANGE
    // ACT
    const renderer = await ReactThreeTestRenderer.create(<ExchangeThree {...props} />)
    const mesh = renderer.scene.children[0].allChildren

    // ASSERT
    expect(mesh.length).toBe(2)
  })

  it('should renders a component on click', async () => {
    // ARRANGE
    const renderer = await ReactThreeTestRenderer.create(<ExchangeThree {...props} />)
    const mesh = renderer.scene.children[0]
    const meshChildren = renderer.scene.children[0].allChildren

    // ACT
    await renderer.fireEvent(mesh, 'click')

    // ASSERT
    expect(meshChildren.length).toBe(2)
  })

  it('should renders a component on onPointerOver', async () => {
    // ARRANGE
    const renderer = await ReactThreeTestRenderer.create(<ExchangeThree {...props} />)
    const mesh = renderer.scene.children[0]
    const meshChildren = renderer.scene.children[0].allChildren

    // ACT
    await renderer.fireEvent(mesh, 'onPointerOver')

    // ASSERT
    expect(meshChildren.length).toBe(2)
  })


  it('should renders a component on onPointerOut', async () => {
    // ARRANGE
    const renderer = await ReactThreeTestRenderer.create(<ExchangeThree {...props} />)
    const mesh = renderer.scene.children[0]
    const meshChildren = renderer.scene.children[0].allChildren

    // ACT
    await renderer.fireEvent(mesh, 'onPointerOut')

    // ASSERT
    expect(meshChildren.length).toBe(2)
  })
})
