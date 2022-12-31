import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { GiStopSign } from 'react-icons/gi'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, ButtonGroup, IconButton, Input, Select, Text, Textarea } from "@chakra-ui/react"
import { SERIES } from "@constants/time.constant";
import { Exchange, Type } from "@services/rabbitmq/interfaces/exchange.interface";
import { Producer } from "@services/rabbitmq/interfaces/producer.interface";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import { UNDEFINED } from "@constants/commons.constant";

interface Props {
  producers: Producer[];
  exchanges: Exchange[];
  setMessage: React.Dispatch<React.SetStateAction<Producer[]>>;
}

interface MessageRemoveParams {
  producerId: string;
  messageId: string;
}

interface MessageFormParam {
  exchange: string;
  routeKey: string;
  time: string;
  payload: string;
  producerId: string;
}

export function SendMessage(data: Props): JSX.Element {
  const { producers, exchanges, setMessage } = data

  const { register, handleSubmit, setValue, resetField, watch, formState: { errors } } = useForm({
    defaultValues: {
      exchange: UNDEFINED,
      routeKey: '',
      time: UNDEFINED,
      payload: '',
    }
  });

  const stopMessage = ({ producerId, messageId }: MessageRemoveParams) => {
    setMessage(producersCurrent => producersCurrent.map(producer => {
      if (producer.id === producerId) {
        return {
          ...producer,
          messages: producer.messages.filter(message => message.id !== messageId)
        }
      }
      return producer
    }))
  }

  const onSubmit = (formData: MessageFormParam) => {
    setMessage(producersCurrent => producersCurrent.map(producer => {
      if (producer.id === formData.producerId) {
        return {
          ...producer,
          messages: [...producer.messages, { ...formData, time: Number(formData.time), producerId: undefined, id: uuidv4() }]
        }
      }
      return producer
    }))
  };

  const exchange = exchanges.find(exchange => exchange.name === watch('exchange')) || undefined

  const configRouteKey = exchange ? "Digite uma route-key!" : false

  if (exchange && exchange?.type !== Type.topic) {
    resetField('routeKey')
  }

  function handleSelectRouteKey(routeKey: string) {
    setValue('routeKey', routeKey)
  }

  return (<Accordion allowMultiple>
    {producers.length > 0 && producers.map((producer, index) => {
      return (<AccordionItem key={producer.id}>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              {producer.user}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <AccordionItem alignItems={'flex-end'}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton marginBottom={'5px'} >
                    <Box flex='1' textAlign='center'>
                      Adicionar Mensagem
                    </Box>
                    {isExpanded ? (
                      <MinusIcon />
                    ) : (
                      <AddIcon />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box flex='1' marginBottom={'5px'}>
                    {!!errors.exchange && <Text fontSize='xs' color={'red.600'}>{errors.exchange.message}</Text>}
                    <Select {...register("exchange", {
                      required: "Selecione uma exchange!", validate: (value) => value !== UNDEFINED ? undefined : 'Selecione uma exchange valida!'
                    })} isInvalid={!!errors.exchange}>
                      <option value={UNDEFINED} disabled>Exchanges</option>
                      {exchanges.length > 0 && exchanges.map(exchange => <option key={exchange.name} value={exchange.name}>{exchange.name}</option>)}
                    </Select>
                  </Box>
                  <Box flex='1' marginBottom={'5px'}>
                    {!!errors.routeKey && <Text fontSize='xs' color={'red.600'}>{errors.routeKey.message}</Text>}
                    {exchange?.type === Type.topic && <Input placeholder='Route-key' {...register("routeKey", { required: configRouteKey })} isInvalid={!!errors.routeKey} marginBottom={'5px'} />}
                    {exchange?.type === Type.topic && <ButtonGroup variant='outline' orientation={"vertical"}>
                      {exchange.bindings?.map(binding => (<Button
                        key={binding.routing_key}
                        size='xs'
                        border='2px'
                        borderColor='green.500'
                        onClick={() => handleSelectRouteKey(binding.routing_key)}
                      >
                        {binding.routing_key}
                      </Button>))}
                    </ButtonGroup>}
                  </Box>
                  <Box flex='1' marginBottom={'5px'}>
                    {!!errors.payload && <Text fontSize='xs' color={'red.600'}>{errors.payload.message}</Text>}
                    <Textarea placeholder='Payload da mensagem:' resize={"none"} isInvalid={!!errors.payload} {...register("payload", { required: "Digite um payload para mensagem!" })} />
                  </Box>
                  <Box flex='1' marginBottom={'5px'}>
                    {!!errors.time && <Text fontSize='xs' color={'red.600'}>{errors.time.message}</Text>}
                    <Select {...register("time", { required: "Selecione um período!" })} isInvalid={!!errors.time}>
                      <option value={UNDEFINED} disabled>Tempo</option>
                      {SERIES.map(serie => <option key={serie.name} value={serie.value}>{serie.name} segundos</option>)}
                    </Select>
                  </Box>
                  <Box flex='1' backgroundColor={'red.400'}>
                    <Button width={'100%'} rightIcon={<AddIcon />} colorScheme='teal' onClick={handleSubmit((data) => onSubmit({ ...data, producerId: producer.id }))}>
                      Adicionar
                    </Button>
                  </Box>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          {!!producer.messages && producer.messages.length > 0 && <AccordionItem>
            <h2>
              <Box marginTop={'5px'} marginBottom={'5px'} flex='1' textAlign='center'>
                Mensagens
              </Box>
            </h2>
            {!!producer.messages && producer.messages.length > 0 && producer.messages.map((message, index) => (
              <ButtonGroup key={message.id} size='sm' isAttached variant='outline' marginBottom={'5px'} >
                <Button>Message - {index + 1}</Button>
                <IconButton onClick={() => stopMessage({ producerId: producer.id, messageId: message.id })} aria-label='Stop Message' icon={<GiStopSign />} color="red.600" />
              </ButtonGroup>
            ))}
          </AccordionItem>}
        </AccordionPanel>
      </AccordionItem>
      )
    })}
  </Accordion>)
}