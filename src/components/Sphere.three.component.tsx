import * as React from 'react'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { QUEUE_DIMENSION } from '@constants/components.constant'
import { Position } from '@constants/position.constant'
import { ComponentInfo } from '@contexts/position/builder/info.builder'
import { GetPointsLinesResult } from '@contexts/position/functions/definePositionsComponents'

type Props = GetPointsLinesResult & JSX.IntrinsicElements['mesh']

export function SphereThree({ id, info, position, ...props }: Props): JSX.Element {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [clicked, click] = useState<boolean>(false)

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 0.1 : 0.1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => setVisible(true)}
      onPointerOut={(event) => setVisible(false)}
      visible={visible}
      position={position}
    >
      <sphereGeometry args={[1, 32]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      {(hovered || visible) && <Html distanceFactor={10}>
        <div className="content">
          {info.father} <br />
          {info.children} <br />
          {/* {props.info.type} */}
        </div>
      </Html>}
    </mesh>
  )
}
