import * as React from 'react'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { QUEUE_DIMENSION } from '@constants/components.constant'
import { ComponentInfo } from '@contexts/position/builder/info.builder'
import { Html } from '@react-three/drei'

type Props = JSX.IntrinsicElements['mesh'] & {
  infoComponent: ComponentInfo;
  visibleInfo: boolean;
}

export function ProducerThree(props: Props): JSX.Element {

  const ref = useRef<THREE.Mesh>(null!)

  const [hovered, hover] = useState<boolean>(false)
  const [clicked, click] = useState<boolean>(false)

  return (
    <mesh
      {...props}
      ref={ref}
      scale={1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={QUEUE_DIMENSION} />
      <meshStandardMaterial color={hovered ? 'purple' : '#FFC0CB'} />
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
