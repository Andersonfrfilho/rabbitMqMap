import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Button,
  Stack,
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightAddon,
  ModalBody,
  Text,
  IconButton,
} from '@chakra-ui/react'
import { useRabbitMq } from '@contexts/rabbitmq/RabbitMq.context';
import { Connection } from '@services/rabbitmq/interfaces/connection.interface'
import { useEffect, useCallback, useMemo, Dispatch, SetStateAction } from 'react'
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { FaUserAlt, FaLock, FaRegEyeSlash, FaRegEye } from 'react-icons/fa'

type Inputs = {
  username: string,
  password: string,
  visible: boolean,
};

interface ModalBackdrop {
  connections: Connection[];
  modalOpen: boolean;
  onClose: () => void;
}

export function ModalBackdrop({ connections = [], modalOpen, onClose }: ModalBackdrop) {
  const { createTracers } = useRabbitMq()
  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<Inputs>({
    defaultValues: {
      password: '',
      username: '',
      visible: false,
    },
  });

  const { fields, append, update, } = useFieldArray({
    name: "connections" as never,
    control
  });

  const onSubmit: SubmitHandler<Inputs[] & { connections: Inputs[] }> = async users => {
    const data = users.connections.map((connection, index) => ({
      username: connection.username,
      password: connection.password,
      nameConnection: connections[index].name
    }))
    await createTracers(data)
  };

  useEffect(() => {
    if (fields.length < connections.length) {
      connections.forEach((element, index) => {
        update(index, { ...fields[index], visible: false, username: element.user })
      })
    }
  }, [connections])

  interface AlterVisiblePasswordFiled {
    indexParamChoice: number; element: Record<"id", string>;
  }

  function alterVisiblePasswordField({ indexParamChoice, element }: AlterVisiblePasswordFiled) {
    const value = getValues(`connections[${indexParamChoice}].password`)
    update(indexParamChoice, { ...element, visible: !element?.visible, password: value })
  }

  const buttonSubmitOrClose = useMemo(() => connections.length === 0 ? <Button onClick={onClose}>Fechar</Button> : <Button onClick={handleSubmit(onSubmit)}>Enviar</Button>, [connections])
  let filterTimeout: any

  const doVerifyLoginRabbitMq = (query: string) => {
    clearTimeout(filterTimeout)
    if (!query) return true

    filterTimeout = setTimeout(() => {
      console.log('====>', query)

    }, 500)
  }
  return (
    <Modal isCentered isOpen={modalOpen} onClose={onClose} size={"6xl"}>
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        backdropBlur='2px'
      />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack display="flex" direction={'row'} height={"48px"} margin={"10px"}>
            <Stack flex={1}>
              <Text fontSize='2xl'>Conexão</Text>
            </Stack>
            <Stack flex={3} direction={'row'}>
              <Stack flex={1}>
                <Text fontSize='2xl'>Usuário</Text>
              </Stack>
              <Stack flex={1}>
                <Text fontSize='2xl'>Senha</Text>
              </Stack>
            </Stack>
          </Stack>
          {fields.map((field, index) => <Stack key={field.id} display="flex" direction={'row'} height={"48px"} margin={"10px"}>
            <Stack flex={1} justifyContent={'center'} >
              <Text fontSize='sm'>{connections[index]?.name}</Text>
            </Stack>
            <Stack flex={3} direction={'row'}>
              <InputGroup height={"100%"}>
                <InputLeftAddon height={"100%"} children={<FaUserAlt color='gray.300' />} />
                <Input key={field.id} type="text" placeholder={connections[index]?.name} height={"100%"} defaultValue={connections[index]?.user}  {...register(`connections.${index}.username` as const, { required: 'username is required' })} errorBorderColor={"red.500"} isInvalid={!!errors?.connections && errors?.connections.length > 0 && errors?.connections[index]?.username} />
              </InputGroup>
              <InputGroup size='sm'>
                <InputLeftAddon height={"100%"} children={<FaLock color='gray.300' />} />
                <Input key={field.id} placeholder={'password'} height={"100%"} type={field?.visible ? 'text' : 'password'}  {...register(`connections.${index}.password` as const, {
                  required: 'password is required'
                })} errorBorderColor={"red.500"} isInvalid={!!errors?.connections && errors?.connections.length > 0 && errors?.connections[index]?.password} />
                <InputRightAddon height={"100%"}>
                  <IconButton onClick={() => alterVisiblePasswordField({ indexParamChoice: index, element: field })} height={"100%"} width={"100%"} aria-label='Visible password' icon={field?.visible ? <FaRegEyeSlash color='gray.300' /> : <FaRegEye color='gray.300' />} />
                </InputRightAddon>
              </InputGroup>
            </Stack>
          </Stack>)}
        </ModalBody>
        <ModalFooter>
          {buttonSubmitOrClose}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}