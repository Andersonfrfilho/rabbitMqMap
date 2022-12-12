import React, { useState } from 'react'
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { getConsumers, getExchanges, getProducers, getQueues } from '@services/rabbitmq/rabbitmq.api'
import { GetStaticPropsResult, InferGetStaticPropsType } from "next";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Box, Button, Grid, GridItem, Image, Input, InputGroup, InputLeftAddon, InputLeftElement, Text, useMenuPositioner } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { Queue as QueueThree } from '@components/Queue.three';
import { Queue, QueueBindingConsumers } from '@services/rabbitmq/interfaces/queue.interface';
import { usePosition } from '@contexts/position/Position.context';
import { componentDTO } from '@dtos/component.dto';
import { Components, DefineLinksBetweenComponentsResult } from '@contexts/position/functions/definePositionsComponents';
import { DEPTH } from '@enums/positions.enum';
import { CONSUMER_DIMENSION, EXCHANGE_DIMENSION, PRODUCER_DIMENSION, QUEUE_DIMENSION } from '@constants/components.constant';
import { Producer } from '@services/rabbitmq/interfaces/producer.interface';
import { Consumer } from '@services/rabbitmq/interfaces/consumer.interface';
import { Position, } from '@constants/position.constant';
import { Line as LineThree } from '@components/Line.three';
import { Sphere } from '@components/Sphere.three';

interface AppGetStaticInterface {
  queues: QueueBindingConsumers[]
  exchanges: Exchange[]
  producers: Producer[]
}

export default function App(
  { queues, exchanges, producers }: InferGetStaticPropsType<typeof getStaticProps>
) {
  const [queuePositions, setQueuePositions] = useState([] as Position[])
  const [exchangePositions, setExchangePositions] = useState([] as Position[])
  const [consumerPositions, setConsumerPositions] = useState([] as Position[])
  const [producerPositions, setProducerPositions] = useState([] as Position[])
  const [components, setComponents] = useState([] as DefineLinksBetweenComponentsResult[])
  const { createPositionsComponents, definePositionsComponents, definePositionLinksBetweenComponents } = usePosition()

  useState(() => {
    if (queues.length > 0) {
      const consumers = queues.map(queue => queue.consumers_register).reduce((accumulator, consumerCurrent) => [...accumulator, ...consumerCurrent], [])
      const components: Components = {
        consumer: componentDTO<Consumer>({
          items: consumers, depth: DEPTH.CONSUMER, dimensions: CONSUMER_DIMENSION
        }),
        exchange: componentDTO<Exchange>({ items: exchanges, depth: DEPTH.EXCHANGE, dimensions: EXCHANGE_DIMENSION }),
        queue: componentDTO<Queue>({ items: queues, depth: DEPTH.QUEUE, dimensions: QUEUE_DIMENSION }),
        producer: componentDTO<Producer>({ items: producers, depth: DEPTH.PRODUCER, dimensions: PRODUCER_DIMENSION }),
      }

      const positions = createPositionsComponents(components)

      setQueuePositions(positions.queue)
      setExchangePositions(positions.exchange)
      setConsumerPositions(positions.consumer)
      setProducerPositions(positions.producer)

      const componentPositions = definePositionsComponents({ positions, queues })
      const componentsLinks = definePositionLinksBetweenComponents(componentPositions)
      setComponents(componentsLinks)
    }
  })

  return (
    <Grid
      templateAreas={`"header header"
                  "configs configs"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={'50px 50px 1fr 30px'}
      gridTemplateColumns={'150px 1fr'}
      h='100vh'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem pl='2' bg='orange.300' area={'header'} overflow={'hidden'} display='flex'>
        <Box boxSize='sm' display='flex' flex={1} overflow={'hidden'} height={'100%'} flexDirection="row">
          <Box display='flex' flex={1} justifyContent={'flex-start'} alignItems={'center'}>
            <Image src='https://upload.wikimedia.org/wikipedia/commons/7/71/RabbitMQ_logo.svg' alt='Dan Abramov' height={'100%'} />
          </Box>
          <Box display='flex' flex={1} justifyContent={'flex-start'} alignItems={'center'}>
            <Text fontSize={'2vw'}>
              Mapper
            </Text>
          </Box>
        </Box>
      </GridItem>
      <GridItem pl='2' bg='pink.300' area={'configs'} display='flex'>
        <Box boxSize='sm' display='flex' flex={1} overflow={'hidden'} height={'100%'} justifyContent={"center"} alignItems={"center"} paddingInline={2}>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<PhoneIcon color='gray.300' />}
            />
            <Input type='url' placeholder='base url' />
          </InputGroup>
        </Box>
        <Box boxSize='sm' display='flex' flex={3} overflow={'hidden'} height={'100%'} flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"}>
          <Box boxSize='sm' display='flex' flex={2} flexDirection={"row"} backgroundColor={"red"} height={'100%'} alignItems={"center"}>
            <InputGroup marginInline={2}>
              <InputLeftAddon children='url' />
              <Input type='url' placeholder='base url' />
            </InputGroup>
            <InputGroup marginInline={2}>
              <InputLeftAddon children='+234' />
              <Input type='tel' placeholder='phone number' />
            </InputGroup>
          </Box>
          <Box boxSize='sm' display='flex' flex={1} backgroundColor={"yellow"} height={'100%'} justifyContent={"center"} alignItems={"center"}>
            <Button h='1.75rem' size='sm' onClick={() => { }}>
              {'Registrar'}
            </Button>
          </Box>
        </Box>
      </GridItem>
      <GridItem pl='2' bg='pink.300' area={'nav'}>
        Nav
      </GridItem>
      <GridItem pl='2' bg='green.300' area={'main'} display={"flex"} height={'100vh'}>
        <Canvas style={{ width: '100%', height: '100%' }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          {producerPositions.length > 0 && producerPositions.map(position => {
            return <QueueThree key={`${position[0]}${position[1]}${position[2]}`} position={position} />
          })}
          {exchangePositions.length > 0 && exchangePositions.map(position => {
            return <QueueThree key={`${position[0]}${position[1]}${position[2]}`} position={position} />
          })}
          {queuePositions.length > 0 && queuePositions.map(position => {
            return <QueueThree key={`${position[0]}${position[1]}${position[2]}`} position={position} />
          })}
          {consumerPositions.length > 0 && consumerPositions.map(position => {
            return <QueueThree key={`${position[0]}${position[1]}${position[2]}`} position={position} />
          })}
          {/* {components.length > 0 && components.map(component => {
            const positions = component.bindings.map(binding => binding.links).reduce((accumulator, currentValue) => [...accumulator, currentValue], [])
            positions.map(<LineThree />
          })}
          <Sphere visible={false} /> */}
          <OrbitControls />
        </Canvas>
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        Footer
      </GridItem>
    </Grid >
  );
}

export async function getStaticProps(
  context: any
): Promise<GetStaticPropsResult<AppGetStaticInterface>> {
  const queues = await getQueues() || [];
  const exchanges = await getExchanges() || []
  const producers = await getProducers() || []

  return {
    props: {
      queues,
      exchanges,
      producers
    }
  }
}
