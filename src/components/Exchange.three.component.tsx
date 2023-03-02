import * as React from 'react'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Html } from '@react-three/drei'

import { Info } from '@contexts/interfaces/positions.interface'
import { EXCHANGE_DIMENSION } from '@constants/components.constant'

export type Props = JSX.IntrinsicElements['mesh'] & {
  infoComponent: Info
  visibleInfo: boolean;
}

export function ExchangeThree(props: Props): JSX.Element {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState<boolean>(false)
  const [clicked, click] = useState<boolean>(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += delta))

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <octahedronBufferGeometry args={EXCHANGE_DIMENSION} />
      <meshStandardMaterial color={hovered ? 'yellow' : 'blue'} />
      {(clicked || hovered || props.visibleInfo) && <Html distanceFactor={10}>
        <div className="content">
          {props.infoComponent.componentType} <br />
          {props.infoComponent.name} <br />
          {props.infoComponent.type}
        </div>
      </Html>}
    </mesh>
  )
}
