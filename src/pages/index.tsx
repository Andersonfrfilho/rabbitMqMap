import React, { useState, useEffect } from 'react'
import { ResizeObserver } from '@juggle/resize-observer';
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { ChangeAxiosConfig, changeAxiosConfig, getExchanges, getProducers, getQueues } from '@services/rabbitmq/rabbitmq.service'
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
import { CgToggleSquare, CgToggleSquareOff } from 'react-icons/cg'
import CodeEditor from '@components/CodeEditor.component';
import { Components, ComponentsPositions } from '@contexts/interfaces/components.interface';
import { COMPONENT_INFO_TYPE, COMPONENT_TYPE } from '@enums/components.enum';
import { QueueBindingConsumerRegister } from '@services/rabbitmq/interfaces/queue.interface';
import { Position } from '@contexts/interfaces/positions.interface';
import { MessagePositions } from '@services/rabbitmq/interfaces/message.interface';
import { Point } from '@contexts/interfaces/lines.interface';
import { SendMessage } from '@components/SendMessage.component';
import { useForm } from 'react-hook-form';
import { useSchema } from '@contexts/schema/Schema.context';
import { isValidUrl } from '@utils/isValidUrl';
import { useComponent } from '@contexts/component/Component.context';
import { FORMATIONS_TYPE_THREE_DIMENSION } from '@contexts/position/enum/position.enum';
import { getCoordinatesMajor } from '@contexts/position/utils/quadrilateralFormation';
import { Dimension } from '@enums/dimensions.enum';

interface AppGetStaticInterface {
  queues: QueueBindingConsumerRegister[]
  exchanges: Exchange[]
  producers: Producer[]
}

export default function App(
  { queues, exchanges, producers }: InferGetStaticPropsType<typeof getStaticProps>
) {
  const [positionCamera, setPositionCamera] = useState({ position: [0, -10, 80], fov: 50 })
  const [visibleFieldPassword, setVisibleFieldPassword] = useState<boolean>(false)
  const [dimension, setDimension] = useState<Dimension>(Dimension.two)
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

  const { verifyDiffContent } = useSchema()
  const { getConsumers,
    createComponents, } = useComponent()
  const {
    getQueuePositionsCoordinates,
    definePositionsComponents,
    defineLinesQueuesBetweenExchangesConsumers,
    getLinksLinesCoordinates,
    defineMessagePositions,
    getPositionByDimension
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

  useEffect(() => {
    if (queues.length > 0) {
      const consumers = getConsumers(queues)
      setQueuesEditor(queues);
      setExchangesEditor(exchanges);
      setProducersEditor(producers);
      const components: Components = createComponents({ queues, exchanges, producers, consumers })


      const { positions, cameraInitialPosition } = getPositionByDimension({ components, dimension })

      setPositionCamera(cameraInitialPosition)

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
    const queueIsEqual = verifyDiffContent({ components: queues, componentsEditor: queuesEditor, type: COMPONENT_INFO_TYPE.QUEUE })
    const exchangeIsEqual = verifyDiffContent({ components: exchanges, componentsEditor: exchangesEditor, type: COMPONENT_INFO_TYPE.EXCHANGE })
    const producerIsEqual = verifyDiffContent({ components: producers, componentsEditor: producersEditor, type: COMPONENT_INFO_TYPE.PRODUCER })
    const consumers = getConsumers(queuesEditor)

    if (queueIsEqual || exchangeIsEqual || producerIsEqual) {
      const components: Components = createComponents({ queues: queuesEditor, exchanges: exchangesEditor, producers: producersEditor, consumers })

      const { positions, cameraInitialPosition } = getPositionByDimension({ components, dimension })

      setPositionCamera(cameraInitialPosition)

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

  const alterConfigUrl = async ({ baseUrl, username, password, vHost }: ChangeAxiosConfig) => {
    const {
      queues,
      exchanges,
      producers } = await changeAxiosConfig({ baseUrl, username, password, vHost })
    setQueuesEditor(queues)
    setExchangesEditor(exchanges)
    setProducersEditor(producers)
  }


  return (
    <>
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
            {errors.baseUrl && <Text data-testid="text-error-baseUrl" fontSize='xs' color={'red.600'}>{errors.baseUrl.message}</Text>}
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<MdHttp color='gray.300' />}
              />
              <Input  {...register("baseUrl", {
                required: "Digite uma baseURl", validate: (value: string) => isValidUrl(value) ? undefined : 'Url invalida!'
              })} data-testid="input-baseUrl" type='https://url.com' placeholder='base url' isInvalid={!!errors.baseUrl} />
            </InputGroup>
          </Box>
          <Box boxSize='sm' display='flex' flex={3} overflow={'hidden'} height={'100%'} flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"}>
            <Box boxSize='sm' display='flex' flex={2} flexDirection={"row"} height={'100%'} alignItems={"center"}>
              <Box boxSize='sm' display='flex' flex={1} flexDirection={"column"} height={'100%'} justifyContent={'center'} alignItems={"flex-start"} marginRight={2}>
                {errors.username && <Text data-testid="text-error-username" fontSize='xs' color={'red.600'}>{errors.username.message}</Text>}
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<AiOutlineUser color='gray.300' />}
                  />
                  <Input {...register("username", {
                    required: "Digite um usuário"
                  })} data-testid="input-username" type='text' placeholder='username' isInvalid={!!errors.username} />
                </InputGroup>
              </Box>
              <Box boxSize='sm' display='flex' flex={1} flexDirection={"column"} height={'100%'} justifyContent={'center'} alignItems={"flex-start"} marginRight={2}>
                {errors.password && <Text data-testid="text-error-password" fontSize='xs' color={'red.600'}>{errors.password.message}</Text>}
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
                {errors.vHost && <Text data-testid="text-error-vHost" fontSize='xs' color={'red.600'}>{errors.vHost.message}</Text>}
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<AiOutlineUser color='gray.300' />}
                  />
                  <Input {...register("vHost", {
                    required: "Digite um vhost"
                  })} type='text' data-testid="input-vHost" placeholder='vHost' isInvalid={!!errors.vHost} />
                </InputGroup>
              </Box>
            </Box>
            <Box boxSize='sm' display='flex' flex={1} height={'100%'} justifyContent={"center"} alignItems={"center"} padding={'2px'}>
              <Button data-testid="button-config-base-url" size='sm' onClick={handleSubmit(alterConfigUrl)}>
                Enviar
              </Button>
            </Box>
          </Box>
        </GridItem>
        <GridItem data-testid="box-editor" pl='2' area={'nav'} overflow={"scroll"}>
          <CodeEditor jsonCode={{ queues: queuesEditor, exchanges: exchangesEditor, producers: producersEditor }} setComponents={{ setQueuesEditor, setExchangesEditor, setProducersEditor }} />
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
            <Flex flex={1}>
              <Button data-testid="button-infos" onClick={() => setDimension(Dimension.two)} height={'100%'} width={"80px"} colorScheme='teal' variant={dimension === Dimension.two ? 'solid' : 'outline'}>
                2D
              </Button>
              <Button data-testid="button-infos" onClick={() => setDimension(Dimension.three)} height={'100%'} width={"80px"} colorScheme='teal' variant={dimension === Dimension.three ? 'solid' : 'outline'}>
                3D
              </Button>
            </Flex>
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
          <Canvas
            camera={positionCamera}
            resize={{ polyfill: ResizeObserver }} style={{ width: '100%', height: '100%' }}>
            <gridHelper args={[1000, 1000]} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]}
              penumbra={1}
            />

            <pointLight position={[-10, -10, -10]} />
            {producerPositions.length > 0 && producerPositions.map((position, index) => {
              return <ProducerThree key={position.id} infoComponent={position.info} position={position.position} visibleInfo={visibleInfos} />
            })}
            {exchangePositions.length > 0 && exchangePositions.map(position => {
              return <ExchangeThree key={position.id} infoComponent={position.info} position={position.position} visibleInfo={visibleInfos} />
            })}
            {queuePositions.length > 0 && queuePositions.map(position => {
              return <QueueThree key={position.id} infoComponent={position.info} position={position.position} visibleInfo={visibleInfos} />
            })}
            {consumerPositions.length > 0 && consumerPositions.map(position => {
              return <ConsumerThree key={position.id} infoComponent={position.info} position={position.position} visibleInfo={visibleInfos} />
            })}
            {linesPositions.length > 0 && linesPositions.map((line) => <LineThree key={line.id} {...line} visibleInfo={visibleInfos} />)}
            {producerLinesPosition.length > 0 && producerLinesPosition.map((line) => <LineThree key={line.id} {...line} visibleInfo={visibleInfos} />)}
            {messagesPosition.length > 0 && messagesPosition.map(message => <SphereThree key={message.id} {...message} visibleInfo={visibleInfos} />)}
            <OrbitControls />
          </Canvas>
        </GridItem>
        <GridItem data-testid="footer" pl='2' bg='blue.300' area={'footer'}>
          Footer
        </GridItem>
      </Grid>
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
