import * as React from 'react'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Vector3 } from 'three'
import { Line } from '@react-three/drei'
import { Point } from '@contexts/interfaces/lines.interface'

export type Props = JSX.IntrinsicElements['line'] & Point & {
  visibleInfo: boolean;
}

export function LineThree(props: Props): JSX.Element {
  const points: Vector3[] = props.positions as unknown as Vector3[];
  const pointsConvertInVector3 = points.map(point => new Vector3(point[0], point[1], point[2]))
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Line>(null!)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState<boolean>(false)
  const [clicked, click] = useState<boolean>(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (

    <Line
      points={pointsConvertInVector3}       // Array of points, Array<Vector3 | Vector2 | [number, number, number] | [number, number] | number>
      color="black"                   // Default
      lineWidth={5}                   // In pixels (default)
      dashed={false}                  // Default
      vertexColors={[[0, 0, 0]]} // Optional array of RGB values for each point
    />
  )
}
