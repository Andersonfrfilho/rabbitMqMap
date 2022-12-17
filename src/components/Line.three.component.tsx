import * as React from 'react'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Position } from '@constants/position.constant'
import { Vector3 } from 'three'

type Props = JSX.IntrinsicElements['line'] & {
  pointsCoordinate: Position[];
}

export function LineThree(props: Props) {
  const points: Vector3[] = props.pointsCoordinate as unknown as Vector3[];
  const pointsConvertInVector3 = points.map(element => new Vector3(element[0], element[1], element[2]))
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Line>(null!)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState<boolean>(false)
  const [clicked, click] = useState<boolean>(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += delta))

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(pointsConvertInVector3)

  // Return the view, these are regular Threejs elements expressed in JSX
  return (

    <line ref={ref} geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color={'#9c88ff'} linecap={'round'} linejoin={'round'} />
    </line>
  )
}
