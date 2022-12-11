import * as React from 'react'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export function Line(props: JSX.IntrinsicElements['line']) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Line>(null!)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState<boolean>(false)
  const [clicked, click] = useState<boolean>(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  const points = []
  points.push(new THREE.Vector3(-10, 0, 0))
  points.push(new THREE.Vector3(0, 0, 0))
  points.push(new THREE.Vector3(10, 0, 0))

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

  // Return the view, these are regular Threejs elements expressed in JSX
  return (

    <line ref={ref} geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color={'#9c88ff'} linewidth={10} linecap={'round'} linejoin={'round'} />
    </line>
  )
}
