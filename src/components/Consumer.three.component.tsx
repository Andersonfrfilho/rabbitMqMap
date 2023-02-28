import * as React from 'react'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Html } from '@react-three/drei'
import { Info } from '@contexts/interfaces/positions.interface'
import { DIMENSION_SPHERE, QUEUE_DIMENSION } from '@constants/components.constant'

export type Props = JSX.IntrinsicElements['mesh'] & {
  infoComponent: Info
  visibleInfo: boolean;
}

export function ConsumerThree(props: Props): JSX.Element {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState<boolean>(false)
  const [clicked, click] = useState<boolean>(false)

  return (
    <mesh
      {...props}
      ref={ref}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <sphereGeometry args={DIMENSION_SPHERE} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
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
