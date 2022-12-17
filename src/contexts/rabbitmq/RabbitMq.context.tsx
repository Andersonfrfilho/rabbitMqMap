import { CreateTraceDTO, createTracer, getOverview, login, LoginDTO, } from '@services/rabbitmq/rabbitmq.api';
import React, { useContext } from 'react'

type RabbitMqStateProps = {
  children: React.ReactNode;
};

interface RabbitMq {
  verifyCredentials: (data: LoginDTO) => Promise<boolean>
  createTracers(data: CreateTracersDTO[]): Promise<void>
}

export const RabbiMqContext = React.createContext<RabbitMq>({} as RabbitMq);

async function verifyCredentials(data: LoginDTO): Promise<boolean> {
  return login(data)
}
interface CreateTracersDTO {
  username: string;
  password: string;
  nameConnection: string;
}
async function createTracers(users: CreateTracersDTO[]): Promise<void> {
  const { cluster_name, node } = await getOverview()

  const data: CreateTraceDTO[] = users.map(user => ({
    user: user.username,
    password: user.password,
    nameConnection: user.nameConnection,
    cluster: cluster_name,
    nameConnectionTrace: `${user.username}-tracing`,
    node
  }))

  await Promise.all(data.map(user => createTracer(user)))
}
export function RabbiMqState({ children }: RabbitMqStateProps) {
  return (
    <RabbiMqContext.Provider value={{ verifyCredentials, createTracers }}>{children}</RabbiMqContext.Provider>
  )
}

export function useRabbitMq(): RabbitMq {
  return useContext(RabbiMqContext);
}
