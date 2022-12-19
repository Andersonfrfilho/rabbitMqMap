import React, { useState } from 'react'
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { getConnections, getExchanges, getProducers, getQueues, getTraces } from '@services/rabbitmq/rabbitmq.api'
import { GetStaticProps, GetStaticPropsResult, InferGetStaticPropsType } from "next";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Box, Button, Grid, GridItem, IconButton, Image, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, InputRightElement, Text, Textarea } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { QueueThree } from '@components/Queue.three.component';
import { Queue, QueueBindingConsumers } from '@services/rabbitmq/interfaces/queue.interface';
import { usePosition } from '@contexts/position/Position.context';
import { componentDTO } from '@dtos/component.dto';
import { ComponentWithPosition, Components, DefineLinksBetweenComponentsResult } from '@contexts/position/functions/definePositionsComponents';
import { COMPONENT_TYPE, DEPTH } from '@enums/positions.enum';
import { CONSUMER_DIMENSION, EXCHANGE_DIMENSION, PRODUCER_DIMENSION, QUEUE_DIMENSION } from '@constants/components.constant';
import { Producer } from '@services/rabbitmq/interfaces/producer.interface';
import { Consumer } from '@services/rabbitmq/interfaces/consumer.interface';
import { Position, } from '@constants/position.constant';
import { Connection } from '@services/rabbitmq/interfaces/connection.interface';
import { LineThree } from '@components/Line.three.component';
import { SphereThree } from '@components/Sphere.three.component';
import { ProducerThree } from '@components/Producer.three.component';
import { ExchangeThree } from '@components/Exchange.three.component';
import { ConsumerThree } from '@components/Consumer.three.component';
import { MdHttp } from 'react-icons/md'
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
interface AppGetStaticInterface {
  queues: QueueBindingConsumers[]
  exchanges: Exchange[]
  producers: Producer[]
  connections: Connection[]
  alreadyAllTracesExist: boolean;
}



export default function App(
  { queues, exchanges, producers, connections, alreadyAllTracesExist }: InferGetStaticPropsType<typeof getStaticProps>
) {
  const [visibleFieldPassword, setVisibleFieldPassword] = useState<boolean>(false)
  const [queuePositions, setQueuePositions] = useState([] as ComponentWithPosition[])
  const [exchangePositions, setExchangePositions] = useState([] as ComponentWithPosition[])
  const [consumerPositions, setConsumerPositions] = useState([] as ComponentWithPosition[])
  const [producerPositions, setProducerPositions] = useState([] as ComponentWithPosition[])
  const [linesPositions, setLinesPositions] = useState([] as Position[])
  const [pointsPositions, setPointsPositions] = useState([] as Position[])
  const { createPositionsComponents, definePositionsComponents, definePositionLinksBetweenComponents, getLinksLines, getLinksPoints, getPositions } = usePosition()

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

      const componentPositions = definePositionsComponents({ positions, queues })

      setQueuePositions(componentPositions.map(queue => queue.position))
      setExchangePositions(getPositions({ components: componentPositions, componentType: COMPONENT_TYPE.BINDING }))
      setConsumerPositions(getPositions({ components: componentPositions, componentType: COMPONENT_TYPE.CONSUMER }))
      setProducerPositions(positions.producer.map(produceParam => produceParam))
      const componentsLinks = definePositionLinksBetweenComponents(componentPositions)
      const linesConsumers = getLinksLines({ componentLinks: componentsLinks, componentType: COMPONENT_TYPE.CONSUMER })
      const linesBindings = getLinksLines({ componentLinks: componentsLinks, componentType: COMPONENT_TYPE.BINDING })
      setLinesPositions([...linesConsumers, ...linesBindings])

      const pointsConsumer = getLinksPoints({ componentLinks: componentsLinks, componentType: COMPONENT_TYPE.CONSUMER })
      const pointsBindings = getLinksPoints({ componentLinks: componentsLinks, componentType: COMPONENT_TYPE.BINDING })

      setPointsPositions([...pointsConsumer, ...pointsBindings])
    }
  })
  function alterVisiblePasswordField() {

  }
  return (
    <>
      {/* <ModalBackdrop modalOpen={modalOpen} onClose={() => { setModalOpen(false) }} connections={connections} /> */}
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
        <GridItem pl='2' area={'header'} overflow={'hidden'} display='flex'>
          <Box boxSize='sm' padding={'2px'} display='flex' flex={1} overflow={'hidden'} height={'100%'} flexDirection="row">
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
        <GridItem pl='2' area={'configs'} display='flex'>
          <Box boxSize='sm' display='flex' flex={1} overflow={'hidden'} height={'100%'} justifyContent={"center"} alignItems={"center"} paddingInline={2}>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<MdHttp color='gray.300' />}
              />
              <Input type='url' placeholder='base url' />
            </InputGroup>
          </Box>
          <Box boxSize='sm' display='flex' flex={3} overflow={'hidden'} height={'100%'} flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"}>
            <Box boxSize='sm' display='flex' flex={2} flexDirection={"row"} height={'100%'} alignItems={"center"}>
              <InputGroup marginInline={2}>
                <InputLeftElement
                  pointerEvents='none'
                  children={<AiOutlineUser color='gray.300' />}
                />
                <Input type='text' placeholder='username' />
              </InputGroup>
              <InputGroup marginInline={2}>
                <InputLeftElement
                  pointerEvents='none'
                  children={<AiOutlineLock color='gray.300' />}
                />
                <Input type={true ? 'text' : 'password'} placeholder='password' />
                <InputRightAddon>
                  <IconButton onClick={() => setVisibleFieldPassword(data => !data)} aria-label='Visible password' icon={visibleFieldPassword ? <FaRegEyeSlash color='gray.300' /> : <FaRegEye color='gray.300' />} />
                </InputRightAddon>
              </InputGroup>
            </Box>
            <Box boxSize='sm' display='flex' flex={1} height={'100%'} justifyContent={"center"} alignItems={"center"} padding={'2px'}>
              <Button height={'100%'} size='sm' onClick={() => { }}>
                Enviar
              </Button>
            </Box>
          </Box>
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={'nav'}>
          <Textarea height={"100%"} isInvalid placeholder='Here is a sample placeholder' />
        </GridItem>
        <GridItem pl='2' bg='green.300' area={'main'} display={"flex"} height={'100vh'}>
          <Canvas style={{ width: '100%', height: '100%' }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]}
              //angle={0.15}
              penumbra={1}
            />
            <pointLight position={[-10, -10, -10]} />
            {producerPositions.length > 0 && producerPositions.map((position, index) => {
              return <ProducerThree key={`${position.position[0]}${position.position[1]}${position.position[2]}${position.info.name}${position.info.type}${position.info.componentType}`} infoComponent={position.info} position={position.position} />
            })}
            {exchangePositions.length > 0 && exchangePositions.map(position => {
              return <ExchangeThree key={`${position.position[0]}${position.position[1]}${position.position[2]}${position.info.name}${position.info.type}${position.info.componentType}`} infoComponent={position.info} position={position.position} />
            })}
            {queuePositions.length > 0 && queuePositions.map(position => {
              return <QueueThree key={`${position.position[0]}${position.position[1]}${position.position[2]}${position.info.name}${position.info.type}${position.info.componentType}`} infoComponent={position.info} position={position.position} />
            })}
            {consumerPositions.length > 0 && consumerPositions.map(position => {
              return <ConsumerThree key={`${position.position[0]}${position.position[1]}${position.position[2]}${position.info.name}${position.info.type}${position.info.componentType}`} infoComponent={position.info} position={position.position} />
            })}
            {linesPositions.length > 0 && linesPositions.map((line) => <LineThree pointsCoordinate={line} />)}
            {pointsPositions.length > 0 && pointsPositions.map(position => <SphereThree key={`${position[0]}${position[1]}${position[2]}`} position={position} />)}
            {/* <Bottles /> */}
            <OrbitControls />
          </Canvas>
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={'footer'}>
          Footer
        </GridItem>
      </Grid >
    </>
  );
}

export async function getStaticProps(
  context: GetStaticProps
): Promise<GetStaticPropsResult<AppGetStaticInterface>> {
  const queues = await getQueues() || [];
  const exchanges = await getExchanges() || []
  const producers = await getProducers() || []
  const connections = await getConnections() || []
  const traces = await getTraces() || []

  const connectionsWithoutTrace = connections.filter(connection => traces.every((trace) => trace.tracer_connection_username !== connection.user))

  return {
    props: {
      queues,
      exchanges,
      producers,
      connections: connectionsWithoutTrace,
      alreadyAllTracesExist: connectionsWithoutTrace.length === 0
    }
  }
}
