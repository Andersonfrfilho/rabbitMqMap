import * as React from 'react'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { MessageWithPositions } from '@services/rabbitmq/interfaces/producer.interface'

type Props = MessageWithPositions & JSX.IntrinsicElements['mesh']

export function SphereThree({ positions, id, ...props }: Props): JSX.Element {
  // This reference gives us direct access to the THREE.Mesh object
  const sphereRef = useRef<THREE.Mesh>(null!)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [clicked, click] = useState<boolean>(false)

  let indexPositionMessageProducerToExchange = 0
  let indexPositionMessageExchangeToQueue = 0
  let indexPositionMessageQueueToConsumer = 0

  useFrame(() => {
    if (indexPositionMessageProducerToExchange < positions.producerBetweenExchange.length) {
      const [x, y, z] = positions.producerBetweenExchange[indexPositionMessageProducerToExchange].position
      sphereRef.current.position.set(x, y, z)
      indexPositionMessageProducerToExchange += 1;
    } else {
      indexPositionMessageProducerToExchange = 0
    }
  })



  return (
    <mesh
      {...props}
      ref={sphereRef}
      scale={clicked ? 0.1 : 0.1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => setVisible(true)}
      onPointerOut={(event) => setVisible(false)}
      visible={true}
      position={[0, 0, 0]}
    >
      <sphereGeometry args={[1, 32]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      {(hovered || visible) && <Html distanceFactor={10}>
        <div className="content">
          {'info.father'} <br />
          {'info.children'} <br />
          {/* {props.info.type} */}
        </div>
      </Html>}
    </mesh>
  )
}
