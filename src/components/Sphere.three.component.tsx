import * as React from 'react'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { QUEUE_DIMENSION } from '@constants/components.constant'
import { Position } from '@constants/position.constant'
import { ComponentInfo } from '@contexts/position/builder/info.builder'

type Props = JSX.IntrinsicElements['mesh'] & {
  infoComponent: ComponentInfo
}

export function SphereThree(props: Props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [clicked, click] = useState<boolean>(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 0.1 : 0.1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => setVisible(true)}
      onPointerOut={(event) => setVisible(false)} visible={visible}>

      <sphereGeometry args={[1, 32]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      {(clicked || hovered) && <Html distanceFactor={10}>
        <div className="content">
          {props.infoComponent.componentType} <br />
          {props.infoComponent.name} <br />
          {props.infoComponent.type}
        </div>
      </Html>}
    </mesh>
  )
}
