import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, ButtonGroup, IconButton, Input, Select, Text, Textarea } from "@chakra-ui/react"
import { SERIES } from "@constants/time.constant";
import { Exchange, Type } from "@services/rabbitmq/interfaces/exchange.interface";
import { Producer } from "@services/rabbitmq/interfaces/producer.interface";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';

interface Props {
  producers: Producer[];
  exchanges: Exchange[];
  setMessage: React.Dispatch<React.SetStateAction<Producer[]>>;
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
      exchange: `undefined`,
      routeKey: '',
      time: '',
      payload: '',
    }
  });

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
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton marginBottom={'5px'}>
                    <Box as="span" flex='1' textAlign='left'>
                      Adicionar
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize='12px' />
                    ) : (
                      <AddIcon fontSize='12px' />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box flex='1' marginBottom={'5px'}>
                    {!!errors.exchange && <Text fontSize='xs' color={'red.600'}>{errors.exchange.message}</Text>}
                    <Select {...register("exchange", {
                      required: "Selecione uma exchange!", validate: (value) => value !== `undefined` ? undefined : 'Selecione uma exchange valida!'
                    })} isInvalid={!!errors.exchange}>
                      <option value={`undefined`} disabled>Exchanges</option>
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
                      {SERIES.map(serie => <option key={serie.name} value={serie.value}>{serie.name} segundos</option>)}
                    </Select>
                  </Box>
                  <Box flex='1' alignItems={'flex-end'}>
                    <Button rightIcon={<AddIcon boxSize={6} />} colorScheme='teal' variant='outline' onClick={handleSubmit((data) => onSubmit({ ...data, producerId: producer.id }))}>
                      Adicionar
                    </Button>
                  </Box>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          {!!producer.messages && producer.messages.length > 0 && <AccordionItem>
            <h2>
              <Box as="span" flex='1' textAlign='left'>
                Mensagens
              </Box>
            </h2>
            {!!producer.messages && producer.messages.length > 0 && producer.messages.map((message, index) => (
              <ButtonGroup key={message.id} size='sm' isAttached variant='outline'>
                <Button>Message - {index}</Button>
                <IconButton aria-label='Add to friends' icon={<AddIcon />} />
              </ButtonGroup>
            ))}
          </AccordionItem>}
        </AccordionPanel>
      </AccordionItem>
      )
    })}
  </Accordion>)
}