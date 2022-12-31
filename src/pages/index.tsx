import React, { useState, useEffect } from 'react'
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { getExchanges, getProducers, getQueues, getTraces } from '@services/rabbitmq/rabbitmq.api'
import { GetStaticProps, GetStaticPropsResult, InferGetStaticPropsType } from "next";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Grid, GridItem, IconButton, Image, Input, InputGroup, InputLeftElement, InputRightAddon, Select, Text, Textarea } from '@chakra-ui/react';
import { QueueThree } from '@components/Queue.three.component';
import { Queue, QueueBindingConsumers } from '@services/rabbitmq/interfaces/queue.interface';
import { usePosition } from '@contexts/position/Position.context';
import { componentDTO } from '@dtos/component.dto';
import { ComponentWithPosition, Components, DefineComponentsResult, GetLinksLinesResult, GetPointsLinesResult } from '@contexts/position/functions/definePositionsComponents';
import { COMPONENT_TYPE, DEPTH } from '@enums/positions.enum';
import { CONSUMER_DIMENSION, EXCHANGE_DIMENSION, PRODUCER_DIMENSION, QUEUE_DIMENSION } from '@constants/components.constant';
import { Producer } from '@services/rabbitmq/interfaces/producer.interface';
import { Consumer } from '@services/rabbitmq/interfaces/consumer.interface';
import { LineThree } from '@components/Line.three.component';
import { SphereThree } from '@components/Sphere.three.component';
import { ProducerThree } from '@components/Producer.three.component';
import { ExchangeThree } from '@components/Exchange.three.component';
import { ConsumerThree } from '@components/Consumer.three.component';
import { MdHttp } from 'react-icons/md'
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import CodeEditor from '@components/CodeEditor.component';
import { MinusIcon, AddIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { SendMessage } from '@components/SendMessage.component';
interface AppGetStaticInterface {
  queues: QueueBindingConsumers[]
  exchanges: Exchange[]
  producers: Producer[]
}

const codePreview = {
  name: "preview",
  keyCommand: "preview",
  value: "preview",
  icon: <Button />
};

function getConsumers(queues: QueueBindingConsumers[]): Consumer[] {
  return queues.map(queue => queue.consumers_register).reduce((accumulator, consumerCurrent) => [...accumulator, ...consumerCurrent], [])
}
interface CreateComponent {
  consumers: Consumer[]
  exchanges: Exchange[]
  queues: Queue[]
  producers: Producer[]
}

function createComponents({ consumers, exchanges, queues, producers }: CreateComponent): Components {
  return {
    consumer: componentDTO<Consumer>({
      items: consumers, depth: DEPTH.CONSUMER, dimensions: CONSUMER_DIMENSION
    }),
    exchange: componentDTO<Exchange>({ items: exchanges, depth: DEPTH.EXCHANGE, dimensions: EXCHANGE_DIMENSION }),
    queue: componentDTO<Queue>({ items: queues, depth: DEPTH.QUEUE, dimensions: QUEUE_DIMENSION }),
    producer: componentDTO<Producer>({ items: producers, depth: DEPTH.PRODUCER, dimensions: PRODUCER_DIMENSION }),
  }
}

export default function App(
  { queues, exchanges, producers }: InferGetStaticPropsType<typeof getStaticProps>
) {
  const [visibleFieldPassword, setVisibleFieldPassword] = useState<boolean>(false)
  const [queuePositions, setQueuePositions] = useState([] as ComponentWithPosition[])
  const [exchangePositions, setExchangePositions] = useState([] as ComponentWithPosition[])
  const [consumerPositions, setConsumerPositions] = useState([] as ComponentWithPosition[])
  const [producerPositions, setProducerPositions] = useState([] as ComponentWithPosition[])
  const [linesPositions, setLinesPositions] = useState([] as GetLinksLinesResult[])
  const [pointsPositions, setPointsPositions] = useState([] as GetPointsLinesResult[])
  const [componentWithPosition, setComponentsWithPosition] = useState({} as DefineComponentsResult)
  const [queuesEditor, setQueuesEditor] = useState<QueueBindingConsumers[]>([])
  const [exchangesEditor, setExchangesEditor] = useState<Exchange[]>([])
  const [producersEditor, setProducersEditor] = useState<Producer[]>([])

  const { createPositionsComponents, definePositionsComponents, definePositionLinksBetweenComponents, getLinksLines, getLinksPoints, getPositions, defineMessagePositions } = usePosition()

  useEffect(() => {
    if (queues.length > 0) {
      const consumers = getConsumers(queues)
      setQueuesEditor(queues);
      setExchangesEditor(exchanges);
      setProducersEditor(producers);
      const components: Components = createComponents({ queues, exchanges, producers, consumers })
      const positions = createPositionsComponents(components)

      const { queues: componentPositions, exchanges: exchangesWithPosition, producers: producersWithPosition } = definePositionsComponents({ positions, queues, producers, exchanges })
      setComponentsWithPosition({ queues: componentPositions, exchanges: exchangesWithPosition, producers: producersWithPosition })
      setQueuePositions(componentPositions.map(queue => queue.position))
      console.log("####################### - 8")
      setExchangePositions(exchangesWithPosition.map(exchange => exchange.position))
      setConsumerPositions(getPositions({ components: componentPositions, componentType: COMPONENT_TYPE.CONSUMER }))
      setProducerPositions(producersWithPosition.map(produceParam => produceParam.position))

      const componentsLinks = definePositionLinksBetweenComponents(componentPositions)
      const linesConsumers = getLinksLines({ componentLinks: componentsLinks, componentType: COMPONENT_TYPE.CONSUMER })
      const linesBindings = getLinksLines({ componentLinks: componentsLinks, componentType: COMPONENT_TYPE.BINDING })
      setLinesPositions([...linesConsumers, ...linesBindings])
      const pointsConsumer = getLinksPoints({ componentLinks: componentsLinks, componentType: COMPONENT_TYPE.CONSUMER })
      const pointsBindings = getLinksPoints({ componentLinks: componentsLinks, componentType: COMPONENT_TYPE.BINDING })
      setPointsPositions([...pointsConsumer, ...pointsBindings])

      const dataResult = defineMessagePositions({ queues: componentPositions, exchanges: exchangesWithPosition, producers: producersWithPosition })

    }
  }, [])

  useEffect(() => {
    const queueIsEqual = queues.length >= 0 && queuesEditor.length >= 0 && queuesEditor.every(queueEditor => queues.some(queue => queue.name === queueEditor.name))
    const exchangeIsEqual = exchanges.length >= 0 && exchangesEditor.length >= 0 && exchangesEditor.every(exchangeEditor => exchanges.some(exchange => exchange.name === exchangeEditor.name))
    const producerIsEqual = producers.length >= 0 && producersEditor.length >= 0 && producersEditor.every(producerEditor => producers.some(producer => producer.id === producerEditor.id && producer.messages.length === producerEditor.messages.length))
    const consumers = getConsumers(queuesEditor)

    if (!queueIsEqual || !exchangeIsEqual || !producerIsEqual) {
      const components: Components = createComponents({ queues: queuesEditor, exchanges: exchangesEditor, producers: producersEditor, consumers })
      const positions = createPositionsComponents(components)
      const { queues: componentPositions, exchanges: exchangesWithPosition, producers: producerPositions } = definePositionsComponents({ positions, queues: queuesEditor, producers: producersEditor, exchanges: exchangesEditor })
      setComponentsWithPosition({
        queues: componentPositions, exchanges: exchangesWithPosition, producers: producerPositions
      })
      setQueuePositions(componentPositions.map(queue => queue.position))
      setExchangePositions(exchangesWithPosition.map(exchange => exchange.position))
      setConsumerPositions(getPositions({ components: componentPositions, componentType: COMPONENT_TYPE.CONSUMER }))
      setProducerPositions(producerPositions.map(produceParam => produceParam.position))

      const componentsLinks = definePositionLinksBetweenComponents(componentPositions)
      const linesConsumers = getLinksLines({ componentLinks: componentsLinks, componentType: COMPONENT_TYPE.CONSUMER })
      const linesBindings = getLinksLines({ componentLinks: componentsLinks, componentType: COMPONENT_TYPE.BINDING })
      setLinesPositions([...linesConsumers, ...linesBindings])
      const pointsConsumer = getLinksPoints({ componentLinks: componentsLinks, componentType: COMPONENT_TYPE.CONSUMER })
      const pointsBindings = getLinksPoints({ componentLinks: componentsLinks, componentType: COMPONENT_TYPE.BINDING })
      setPointsPositions([...pointsConsumer, ...pointsBindings])
    }
  }, [queuesEditor, exchangesEditor, producersEditor])

  return (
    <>
      {/* <ModalBackdrop modalOpen={modalOpen} onClose={() => { setModalOpen(false) }} connections={connections} /> */}
      <Grid
        templateAreas={`"header header header"
                        "configs configs configs"
                        "nav producer main"
                        "footer footer footer"`}
        gridTemplateRows={'50px 50px 1fr 30px'}
        gridTemplateColumns={'300px 300px 1fr'}
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
        <GridItem pl='2' area={'nav'} overflow={"scroll"}>
          <CodeEditor jsonCode={{ queues: queuesEditor, exchanges: exchangesEditor, producers: producersEditor }} setComponents={{ setQueuesEditor, setExchangesEditor, setProducersEditor }} />
        </GridItem>
        <GridItem pl='2' area={'producer'}>
          <SendMessage exchanges={exchangesEditor} producers={producersEditor} setMessage={setProducersEditor} />
        </GridItem>
        <GridItem pl='2' bg='green.300' area={'main'} display={"flex"} height={'100vh'}>
          <Canvas style={{ width: '100%', height: '100%' }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]}
              penumbra={1}
            />
            <pointLight position={[-10, -10, -10]} />
            {producerPositions.length > 0 && producerPositions.map((position, index) => {
              return <ProducerThree key={position.id} infoComponent={position.info} position={position.position} />
            })}
            {exchangePositions.length > 0 && exchangePositions.map(position => {
              return <ExchangeThree key={position.id} infoComponent={position.info} position={position.position} />
            })}
            {queuePositions.length > 0 && queuePositions.map(position => {
              return <QueueThree key={position.id} infoComponent={position.info} position={position.position} />
            })}
            {consumerPositions.length > 0 && consumerPositions.map(position => {
              return <ConsumerThree key={position.id} infoComponent={position.info} position={position.position} />
            })}
            {linesPositions.length > 0 && linesPositions.map((line) => <LineThree key={line.id} {...line} />)}
            {pointsPositions.length > 0 && pointsPositions.map(point => <SphereThree key={point.id} {...point} />)}
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
  const exchanges = await getExchanges(queues) || []
  const producers = await getProducers() || []

  return {
    props: {
      queues,
      exchanges,
      producers,
    }
  }
}
