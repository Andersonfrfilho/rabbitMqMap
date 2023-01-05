import * as React from 'react'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { MessageWithPositions } from '@services/rabbitmq/interfaces/producer.interface'
import { INITIAL_POSITION } from '@constants/position.constant'

type Props = MessageWithPositions & JSX.IntrinsicElements['mesh'] & {
  visibleInfo: boolean;
}

export function SphereThree({ positions, id, color, ...props }: Props): JSX.Element {
  // This reference gives us direct access to the THREE.Mesh object
  const sphereRef = useRef<THREE.Mesh>(null!)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [clicked, click] = useState<boolean>(false)

  let indexPositionMessageProducerToExchange = 0
  let indexPositionMessageExchangeToQueue = 0
  let indexPositionMessageQueueToConsumer = 0

  let firstStep = true;
  let secondStep = false;
  let thirdStep = false;

  useFrame(() => {
    if (firstStep && indexPositionMessageProducerToExchange < positions.producerBetweenExchange.length) {
      const [x, y, z] = positions.producerBetweenExchange[indexPositionMessageProducerToExchange].position
      sphereRef.current.position.set(x, y, z)
      indexPositionMessageProducerToExchange += 1;
    } else if (firstStep) {
      firstStep = false
      secondStep = true
      indexPositionMessageProducerToExchange = 0
    }

    if (secondStep && indexPositionMessageExchangeToQueue < positions.exchangeBetweenQueue.length) {
      const [x, y, z] = positions.exchangeBetweenQueue[indexPositionMessageExchangeToQueue].position
      sphereRef.current.position.set(x, y, z)
      indexPositionMessageExchangeToQueue += 1;
    } else if (secondStep) {
      secondStep = false
      thirdStep = true
      indexPositionMessageExchangeToQueue = 0
    }

    if (thirdStep && indexPositionMessageQueueToConsumer < positions.queueBetweenConsumer.length) {
      const [x, y, z] = positions.queueBetweenConsumer[indexPositionMessageQueueToConsumer].position
      sphereRef.current.position.set(x, y, z)
      indexPositionMessageQueueToConsumer += 1;
    } else if (thirdStep) {
      thirdStep = false
      firstStep = true
      indexPositionMessageQueueToConsumer = 0
    }
  })

  console.log(color)

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
      <meshStandardMaterial color={color} />
      {(clicked || hovered || props.visibleInfo) && <Html distanceFactor={10}>
        <div className="content">
          {'info.father'} <br />
          {'info.children'} <br />
          {/* {props.info.type} */}
        </div>
      </Html>}
    </mesh>
  )
}
