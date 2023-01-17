import React, { useState, useEffect } from 'react'
import { ResizeObserver } from '@juggle/resize-observer';
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { getExchanges, getProducers, getQueues, rabbitMqApiService } from '@services/rabbitmq/rabbitmq.api'
import { GetStaticProps, GetStaticPropsResult, InferGetStaticPropsType } from "next";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Box, Button, Flex, Grid, GridItem, IconButton, Image, Input, InputGroup, InputLeftElement, InputRightAddon, Spacer, Stack, Text } from '@chakra-ui/react';
import { QueueThree } from '@components/Queue.three.component';
import { usePosition } from '@contexts/position/Position.context';
import { Producer, ProducerPositionLinesMessagePosition } from '@services/rabbitmq/interfaces/producer.interface';
import { LineThree } from '@components/Line.three.component';
import { SphereThree } from '@components/Sphere.three.component';
import { ProducerThree } from '@components/Producer.three.component';
import { ExchangeThree } from '@components/Exchange.three.component';
import { ConsumerThree } from '@components/Consumer.three.component';
import { MdHttp, MdInfo, MdInfoOutline } from 'react-icons/md'
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import CodeEditor from '@components/CodeEditor.component';
import { Components } from '@contexts/interfaces/components.interface';
import { COMPONENT_TYPE } from '@enums/components.enum';
import { Queue, QueueBindingConsumerRegister } from '@services/rabbitmq/interfaces/queue.interface';
import { Position } from '@contexts/interfaces/positions.interface';
import { MessagePositions } from '@services/rabbitmq/interfaces/message.interface';
import { Point } from '@contexts/interfaces/lines.interface';
import { SendMessage } from '@components/SendMessage.component';
import { useForm } from 'react-hook-form';
import { URL_PATTERN } from '@constants/regex.constant';

interface AppGetStaticInterface {
  queues: QueueBindingConsumerRegister[]
  exchanges: Exchange[]
  producers: Producer[]
}

export default function App(
  { queues, exchanges, producers }: InferGetStaticPropsType<typeof getStaticProps>
) {
  const [visibleFieldPassword, setVisibleFieldPassword] = useState<boolean>(false)
  const [queuePositions, setQueuePositions] = useState([] as Position[])
  const [exchangePositions, setExchangePositions] = useState([] as Position[])
  const [consumerPositions, setConsumerPositions] = useState([] as Position[])
  const [producerPositions, setProducerPositions] = useState([] as Position[])
  const [linesPositions, setLinesPositions] = useState([] as Point[])
  const [queuesEditor, setQueuesEditor] = useState<QueueBindingConsumerRegister[]>([])
  const [exchangesEditor, setExchangesEditor] = useState<Exchange[]>([])
  const [producersEditor, setProducersEditor] = useState<Producer[]>([])
  const [messagesPosition, setMessagesPosition] = useState<MessagePositions[]>([])
  const [producerLinesPosition, setProducerLinesPosition] = useState<Point[]>([] as Point[])
  const [visibleInfos, setVisibleInfos] = useState<boolean>(false)

  const {
    getConsumers,
    createComponents,
    getQueuePositionsCoordinates,
    createPositionsComponents,
    definePositionsComponents,
    defineLinesQueuesBetweenExchangesConsumers,
    getLinksLinesCoordinates,
    defineMessagePositions,
  } = usePosition()
  const dataTest = useForm({
    defaultValues: {
      baseUrl: '',
      username: '',
      password: '',
      vHost: '',
    }
  });
  const { register, handleSubmit, formState: { errors } } = dataTest
  console.log("###########")
  console.log({
    ...register("baseUrl", {
      required: "Digite uma baseURl", pattern: URL_PATTERN
    })
  })
  useEffect(() => {
    if (queues.length > 0) {
      const consumers = getConsumers(queues)
      setQueuesEditor(queues);
      setExchangesEditor(exchanges);
      setProducersEditor(producers);
      const components: Components = createComponents({ queues, exchanges, producers, consumers })
      const positions = createPositionsComponents(components)

      const { queues: componentsPositions, exchanges: exchangesWithPosition, producers: producersWithPosition } = definePositionsComponents({ positions, queues, producers, exchanges })

      setQueuePositions(componentsPositions.map(queue => queue.position))
      setExchangePositions(exchangesWithPosition.map(exchange => exchange.position))
      setConsumerPositions(getQueuePositionsCoordinates({ components: componentsPositions, componentType: COMPONENT_TYPE.CONSUMER }))
      setProducerPositions(producersWithPosition.map(produceParam => produceParam.position))

      const componentsLines = defineLinesQueuesBetweenExchangesConsumers(componentsPositions)
      const linesConsumers = getLinksLinesCoordinates({ componentLinks: componentsLines, componentType: COMPONENT_TYPE.CONSUMER })
      const linesBindings = getLinksLinesCoordinates({ componentLinks: componentsLines, componentType: COMPONENT_TYPE.BINDING })
      setLinesPositions([...linesConsumers, ...linesBindings])

      const producerMessagesPositions = defineMessagePositions({ queues: componentsPositions, exchanges: exchangesWithPosition, producers: producersWithPosition })

      const linesProducerPosition = producerMessagesPositions.reduce((accumulator: Point[], producer: ProducerPositionLinesMessagePosition): Point[] => [...accumulator, ...producer.lines], [])
      setProducerLinesPosition(linesProducerPosition)

      const messagesPositions = producerMessagesPositions.reduce((accumulator: MessagePositions[], current: ProducerPositionLinesMessagePosition) => [...accumulator, ...current.messages], [])

      setMessagesPosition(messagesPositions)
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

      const { queues: componentsPositions, exchanges: exchangesPosition, producers: producerPositions } = definePositionsComponents({ positions, queues: queuesEditor, producers: producersEditor, exchanges: exchangesEditor })

      setQueuePositions(componentsPositions.map(queue => queue.position))
      setExchangePositions(exchangesPosition.map(exchange => exchange.position))
      setConsumerPositions(getQueuePositionsCoordinates({ components: componentsPositions, componentType: COMPONENT_TYPE.CONSUMER }))
      setProducerPositions(producerPositions.map(produceParam => produceParam.position))

      const componentsLines = defineLinesQueuesBetweenExchangesConsumers(componentsPositions)
      const linesConsumers = getLinksLinesCoordinates({ componentLinks: componentsLines, componentType: COMPONENT_TYPE.CONSUMER })
      const linesBindings = getLinksLinesCoordinates({ componentLinks: componentsLines, componentType: COMPONENT_TYPE.BINDING })
      setLinesPositions([...linesConsumers, ...linesBindings])

      const producerMessagesPositions = defineMessagePositions({ queues: componentsPositions, exchanges: exchangesPosition, producers: producerPositions })

      const linesProducerPosition = producerMessagesPositions.reduce((accumulator: Point[], producer: ProducerPositionLinesMessagePosition): Point[] => [...accumulator, ...producer.lines], [])
      setProducerLinesPosition(linesProducerPosition)

      const messagesPositions = producerMessagesPositions.reduce((accumulator: MessagePositions[], current: ProducerPositionLinesMessagePosition) => [...accumulator, ...current.messages], [])

      setMessagesPosition(messagesPositions)
    }
  }, [queuesEditor, exchangesEditor, producersEditor])

  interface ChangeAxiosConfig {
    baseUrl: string;
    username: string;
    password: string;
  }

  const changeAxiosConfig = async ({ baseUrl, username, password }: ChangeAxiosConfig) => {
    rabbitMqApiService.defaults.baseURL = baseUrl;
    rabbitMqApiService.defaults.auth = {
      username,
      password
    }
    const queues = await getQueues() || [];
    const exchanges = await getExchanges() || []
    const producers = await getProducers() || []

    setQueuesEditor(queues);
    setExchangesEditor(exchanges);
    setProducersEditor(producers);
  }

  return (
    <>
      {/* <ModalBackdrop modalOpen={modalOpen} onClose={() => { setModalOpen(false) }} connections={connections} /> */}
      <Grid
        data-testid="container"
        templateAreas={`"header header header"
                        "configs configs configs"
                        "nav producer components"
                        "nav producer main"
                        "footer footer footer"`}
        gridTemplateRows={'50px 80px 80px 1fr 30px'}
        gridTemplateColumns={'300px 300px 1fr'}
        h='100vh'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem data-testid="header" pl='2' area={'header'} overflow={'hidden'} display='flex'>
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
        <GridItem data-testid="box-content" pl='2' area={'configs'} display='flex'>
          <Box boxSize='sm' display='flex' flex={1} flexDirection={'column'} overflow={'hidden'} height={'100%'} justifyContent={"center"} alignItems={"flex-start"} paddingInline={2}>
            {!!errors.baseUrl && <Text fontSize='xs' color={'red.600'}>{errors.baseUrl.message}</Text>}
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<MdHttp color='gray.300' />}

              />
              <Input  {...register("baseUrl", {
                required: "Digite uma baseURl", pattern: URL_PATTERN
              })} type='https://url.com' placeholder='base url' isInvalid={!!errors.baseUrl} />
            </InputGroup>
          </Box>
          <Box boxSize='sm' display='flex' flex={3} overflow={'hidden'} height={'100%'} flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"}>
            <Box boxSize='sm' display='flex' flex={2} flexDirection={"row"} height={'100%'} alignItems={"center"}>
              <Box boxSize='sm' display='flex' flex={1} flexDirection={"column"} height={'100%'} justifyContent={'center'} alignItems={"flex-start"} marginRight={2}>
                {!!errors.username && <Text fontSize='xs' color={'red.600'}>{errors.username.message}</Text>}
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<AiOutlineUser color='gray.300' />}
                  />
                  <Input {...register("username", {
                    required: "Digite um usuário"
                  })} type='text' placeholder='username' isInvalid={!!errors.username} />
                </InputGroup>
              </Box>
              <Box boxSize='sm' display='flex' flex={1} flexDirection={"column"} height={'100%'} justifyContent={'center'} alignItems={"flex-start"} marginRight={2}>
                {!!errors.password && <Text fontSize='xs' color={'red.600'}>{errors.password.message}</Text>}
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<AiOutlineLock color='gray.300' />}
                  />
                  <Input data-testid="input-password" {...register("password", {
                    required: "Digite um password"
                  })} type={visibleFieldPassword ? 'text' : 'password'} placeholder='password' isInvalid={!!errors.password} />
                  <InputRightAddon>
                    <IconButton data-testid="button-change-type-input-password" onClick={() => setVisibleFieldPassword(data => !data)} aria-label='Visible password' icon={visibleFieldPassword ? <FaRegEyeSlash data-testid="button-visible-password" color='gray.300' /> : <FaRegEye data-testid="button-secret-password" color='gray.300' />} />
                  </InputRightAddon>
                </InputGroup>
              </Box>
              <Box boxSize='sm' display='flex' flex={1} flexDirection={"column"} height={'100%'} justifyContent={'center'} alignItems={"flex-start"}>
                {!!errors.vHost && <Text fontSize='xs' color={'red.600'}>{errors.vHost.message}</Text>}
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<AiOutlineUser color='gray.300' />}
                  />
                  <Input {...register("vHost", {
                    required: "Digite um vhost"
                  })} type='text' placeholder='vHost' isInvalid={!!errors.vHost} />
                </InputGroup>
              </Box>
            </Box>
            <Box boxSize='sm' display='flex' flex={1} height={'100%'} justifyContent={"center"} alignItems={"center"} padding={'2px'}>
              <Button size='sm' onClick={handleSubmit(changeAxiosConfig)}>
                Enviar
              </Button>
            </Box>
          </Box>
        </GridItem>
        <GridItem data-testid="box-editor" pl='2' area={'nav'} overflow={"scroll"}>
          <CodeEditor data-testid="code-editor" jsonCode={{ queues: queuesEditor, exchanges: exchangesEditor, producers: producersEditor }} setComponents={{ setQueuesEditor, setExchangesEditor, setProducersEditor }} />
        </GridItem>
        <GridItem data-testid="send-message" pl='2' area={'producer'}>
          <Text>Enviar Mensagens</Text>
          <SendMessage exchanges={exchangesEditor} producers={producersEditor} setMessage={setProducersEditor} />
        </GridItem>
        <GridItem data-testid="content-configs" pl='2' area={'components'} display={'flex'} flexDirection={'column'}>
          <Flex flex={1}>
            <Spacer />
            <Button data-testid="button-infos" onClick={() => setVisibleInfos((value) => !value)} height={'100%'} width={"80px"} rightIcon={visibleInfos ? <MdInfoOutline data-testid="button-infos-outline" color='gray.300' /> : <MdInfo data-testid="button-infos-colorFull" color='gray.300' />} colorScheme='teal' variant={visibleInfos ? 'solid' : 'outline'}>
              infos
            </Button>
          </Flex>
          <Flex flex={1}>
            <Flex flex={1}>
              <Button height={'100%'} rightIcon={visibleInfos ? <MdInfoOutline color='gray.300' /> : <MdInfo color='gray.300' />} colorScheme='teal' variant='solid'>
                producer
              </Button>
            </Flex>
            <Flex flex={1}>
              <Button height={'100%'} rightIcon={visibleInfos ? <MdInfoOutline color='gray.300' /> : <MdInfo color='gray.300' />} colorScheme='teal' variant='solid'>
                exchange
              </Button>
            </Flex>
            <Flex flex={1}>
              <Button height={'100%'} rightIcon={visibleInfos ? <MdInfoOutline color='gray.300' /> : <MdInfo color='gray.300' />} colorScheme='teal' variant='solid'>
                queue
              </Button>
            </Flex>
            <Flex flex={1}>
              <Button height={'100%'} rightIcon={visibleInfos ? <MdInfoOutline color='gray.300' /> : <MdInfo color='gray.300' />} colorScheme='teal' variant='solid'>
                consumer
              </Button>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem data-testid="content-components" pl='2' bg='green.300' area={'main'} display={"flex"} height={'100vh'}>
          <Canvas resize={{ polyfill: ResizeObserver }} style={{ width: '100%', height: '100%' }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]}
              penumbra={1}
            />
            <pointLight position={[-10, -10, -10]} />
            {producerPositions.length > 0 && producerPositions.map((position, index) => {
              return <ProducerThree data-testid="producer-component" key={position.id} infoComponent={position.info} position={position.position} visibleInfo={visibleInfos} />
            })}
            {exchangePositions.length > 0 && exchangePositions.map(position => {
              return <ExchangeThree data-testid="exchange-component" key={position.id} infoComponent={position.info} position={position.position} visibleInfo={visibleInfos} />
            })}
            {queuePositions.length > 0 && queuePositions.map(position => {
              return <QueueThree data-testid="queue-component" key={position.id} infoComponent={position.info} position={position.position} visibleInfo={visibleInfos} />
            })}
            {/*consumerPositions.length > 0 && consumerPositions.map(position => {
              return <ConsumerThree data-testid="consumer-component" key={position.id} infoComponent={position.info} position={position.position} visibleInfo={visibleInfos} />
            })*/}
            {linesPositions.length > 0 && linesPositions.map((line) => <LineThree data-testid="line-component" key={line.id} {...line} visibleInfo={visibleInfos} />)}
            {producerLinesPosition.length > 0 && producerLinesPosition.map((line) => <LineThree data-testid="producer-line-component" key={line.id} {...line} visibleInfo={visibleInfos} />)}
            {messagesPosition.length > 0 && messagesPosition.map(message => <SphereThree data-testid="message-line-component" key={message.id} {...message} visibleInfo={visibleInfos} />)}
            <OrbitControls />
          </Canvas>
        </GridItem>
        <GridItem data-testid="footer" pl='2' bg='blue.300' area={'footer'}>
          Footer
        </GridItem>
      </Grid >
    </>
  );
}

export async function getStaticProps(
  _: GetStaticProps
): Promise<GetStaticPropsResult<AppGetStaticInterface>> {
  const queues = await getQueues() || [];
  const exchanges = await getExchanges() || []
  const producers = await getProducers() || []

  return {
    props: {
      queues,
      exchanges,
      producers,
    }
  }
}
