import * as React from 'react'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { QUEUE_DIMENSION } from '@constants/components.constant'

export function ProducerThree(props: JSX.IntrinsicElements['mesh']) {
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
      <boxGeometry args={QUEUE_DIMENSION} />
      <meshStandardMaterial color={hovered ? 'purple' : '#FFC0CB'} />
      {/* <Html distanceFactor={10}>
        <div className="content">
          hello <br />
          world
        </div>
      </Html> */}
    </mesh>
  )
}
