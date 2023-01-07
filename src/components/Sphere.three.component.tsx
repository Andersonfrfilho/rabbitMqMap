import * as React from 'react'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { MessageWithPositions } from '@services/rabbitmq/interfaces/producer.interface'
import { INITIAL_POSITION } from '@constants/position.constant'

type Props = MessageWithPositions & JSX.IntrinsicElements['mesh']

export function SphereThree({ positions, id, ...props }: Props): JSX.Element {
  // This reference gives us direct access to the THREE.Mesh object
  const sphereRef = useRef<THREE.Mesh>(null!)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [clicked, click] = useState<boolean>(false)

  let indexPositionMessageProducerToExchange = 0
  let completeMessageProducerToExchange = false
  let indexPositionMessageExchangeToQueue = 0
  let completeMessageExchangeToQueue = false
  let indexPositionMessageQueueToConsumer = 0
  let completeMessageQueueToConsumer = false

  useFrame(() => {
    if (indexPositionMessageProducerToExchange < positions.producerBetweenExchange.length) {
      const [x, y, z] = positions.producerBetweenExchange[indexPositionMessageProducerToExchange].position
      sphereRef.current.position.set(x, y, z)
      indexPositionMessageProducerToExchange += 1;
    } else {
      completeMessageProducerToExchange = true
    }

    if (indexPositionMessageExchangeToQueue < positions.exchangeBetweenQueue.length && completeMessageProducerToExchange) {
      const [x, y, z] = positions.exchangeBetweenQueue[indexPositionMessageExchangeToQueue].position
      sphereRef.current.position.set(x, y, z)
      indexPositionMessageExchangeToQueue += 1;
    } else {
      completeMessageExchangeToQueue = true
    }

    if (indexPositionMessageQueueToConsumer < positions.queueBetweenConsumer.length && completeMessageProducerToExchange && completeMessageExchangeToQueue) {
      const [x, y, z] = positions.queueBetweenConsumer[indexPositionMessageQueueToConsumer].position
      sphereRef.current.position.set(x, y, z)
      indexPositionMessageQueueToConsumer += 1;
    } else {
      completeMessageQueueToConsumer = true
    }

    if (completeMessageProducerToExchange && completeMessageExchangeToQueue && completeMessageQueueToConsumer) {
      completeMessageProducerToExchange = false
      completeMessageExchangeToQueue = false
      completeMessageQueueToConsumer = false

      indexPositionMessageProducerToExchange = 0
      indexPositionMessageExchangeToQueue = 0
      indexPositionMessageQueueToConsumer = 0
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
      position={INITIAL_POSITION}
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
