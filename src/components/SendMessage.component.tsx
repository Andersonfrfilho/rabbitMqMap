import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { GiStopSign } from 'react-icons/gi'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, ButtonGroup, IconButton, Input, Select, Text, Textarea } from "@chakra-ui/react"
import { Exchange, Type } from "@services/rabbitmq/interfaces/exchange.interface";
import { Producer } from "@services/rabbitmq/interfaces/producer.interface";
import { useForm } from "react-hook-form";

import { UNDEFINED } from "@constants/commons.constant";
import { EXCHANGES_WITH_ROUTE_KEY } from "@constants/exchanges.constant";
import { invertHex, randomColor } from "@utils/random-color";
import { useComponent } from "@contexts/component/Component.context";

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
  payload: string;
  producerId: string;
}

export function SendMessage(data: Props): JSX.Element {
  const { producers, exchanges, setMessage } = data

  const { register, handleSubmit, setValue, resetField, watch, formState: { errors } } = useForm({
    defaultValues: {
      exchange: UNDEFINED,
      routeKey: '',
      payload: '',
    }
  });

  const { addMessageInProducers, removeMessageInProducers } = useComponent();

  const stopMessage = ({ producerId, messageId }: MessageRemoveParams) => {
    const newProducersWithMessage = removeMessageInProducers({ messageId, producerId, producers })
    setMessage(newProducersWithMessage)
  }

  const onSubmit = (formData: MessageFormParam) => {
    const newProducersWithMessage = addMessageInProducers({ message: formData, producers })
    setMessage(newProducersWithMessage)
  };

  const exchange = exchanges.find(exchange => exchange.name === watch('exchange')) || undefined

  const configRouteKey = exchange ? "Digite uma route-key!" : false

  if (exchange && exchange?.type !== Type.topic) {
    resetField('routeKey')
  }

  function handleSelectRouteKey(routeKey: string) {
    setValue('routeKey', routeKey)
  }
  return (<Accordion data-testid="accordion-send-message" allowMultiple>
    {producers.length > 0 && producers.map((producer, index) => {

      return (<AccordionItem key={producer.id}>
        <h2>
          <AccordionButton data-testid="accordion-send-message-button">
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
                  <AccordionButton marginBottom={'5px'} data-testid="accordion-send-message-button-expand">
                    <Box flex='1' textAlign='center'>
                      Adicionar Mensagem
                    </Box>
                    {isExpanded ? (
                      <MinusIcon data-testid="accordion-send-message-button-minus-icon" />
                    ) : (
                      <AddIcon data-testid="accordion-send-message-button-icon" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box flex='1' marginBottom={'5px'}>
                    {!!errors.exchange && <Text fontSize='xs' color={'red.600'}>{errors.exchange.message}</Text>}
                    <Select data-testid="accordion-send-message-exchange-select" {...register("exchange", {
                      required: "Selecione uma exchange!", validate: (value) => value !== UNDEFINED ? undefined : 'Selecione uma exchange valida!'
                    })} isInvalid={!!errors.exchange}>
                      <option value={UNDEFINED} disabled>Exchanges</option>
                      {exchanges.length > 0 && exchanges.map(exchange => <option data-testid="accordion-send-message-exchange-select-option" key={exchange.name} value={exchange.name}>{exchange.name}</option>)}
                    </Select>
                  </Box>
                  <Box flex='1' marginBottom={'5px'}>
                    {!!errors.routeKey && <Text fontSize='xs' color={'red.600'}>{errors.routeKey.message}</Text>}
                    {!!exchange && !!exchange?.type && EXCHANGES_WITH_ROUTE_KEY.includes(exchange.type) && <Input data-testid="accordion-send-message-route-key-input" placeholder='Route-key' {...register("routeKey", { required: configRouteKey })} isInvalid={!!errors.routeKey} marginBottom={'5px'} />}
                    {!!exchange && !!exchange?.type && EXCHANGES_WITH_ROUTE_KEY.includes(exchange.type) && <ButtonGroup data-testid="accordion-send-message-route-key-buttonGroup" variant='outline' orientation={"vertical"}>
                      {exchange.bindings?.map(binding => (<Button
                        key={binding.routing_key}
                        size='xs'
                        border='2px'
                        borderColor='green.500'
                        onClick={() => handleSelectRouteKey(binding.routing_key)}
                        data-testid="accordion-send-message-exchange-bindings-button"
                      >
                        {binding.routing_key}
                      </Button>))}
                    </ButtonGroup>}
                  </Box>
                  <Box flex='1' marginBottom={'5px'}>
                    {!!errors.payload && <Text fontSize='xs' color={'red.600'}>{errors.payload.message}</Text>}
                    <Textarea data-testid="accordion-send-message-text-area-payload-message" placeholder='Payload da mensagem:' resize={"none"} isInvalid={!!errors.payload} {...register("payload", { required: "Digite um payload para mensagem!" })} />
                  </Box>
                  <Box flex='1' backgroundColor={'red.400'}>
                    <Button data-testid="accordion-send-message-button-add-message" width={'100%'} rightIcon={<AddIcon />} colorScheme='teal' onClick={handleSubmit((data) => onSubmit({ ...data, producerId: producer.id }))}>
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
                <Button backgroundColor={message.color} textColor={invertHex(message.color)}>Message - {index + 1}</Button>
                <IconButton data-testid="icon-button-stop-message-button-expand" onClick={() => stopMessage({ producerId: producer.id, messageId: message.id })} aria-label='Stop Message' icon={<GiStopSign />} color="red.600" />
              </ButtonGroup>
            ))}
          </AccordionItem>}
        </AccordionPanel>
      </AccordionItem>
      )
    })}
  </Accordion>)
}