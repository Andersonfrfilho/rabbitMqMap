import React, { FC } from 'react'
import RabbitLogoSvg from "@assets/svg/RabbitMQ_logo.svg";
import { Canvas } from "@react-three/fiber";
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { Queue } from "@services/rabbitmq/interfaces/queue.interface";
import { getExchanges, getQueues } from '@services/rabbitmq/rabbitmq.api'
import { GetStaticPropsResult, InferGetStaticPropsType } from "next";
import { JSXElementConstructor } from "react";
import {
  Body,
  Config,
  Container,
  Content,
  Footer,
  Header,
  Menu,
  Painel,
  Title
} from "./styles";

// function MyBox ({ position, color }: ):FC<{position:string,color:string}> {
//   return (
//     <mesh position={position}>
//       <boxBufferGeometry />
//       <meshBasicMaterial color={color} />
//     </mesh>
//   );
// }

interface AppGetStaticInterface {
  queues: Queue[]
  exchanges: Exchange[]
}

export default function App (
  data: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Container>
    
    </Container>
  );
}

export async function getStaticProps (
  context: any
): Promise<GetStaticPropsResult<AppGetStaticInterface>> {
  const queues = await getQueues();
  const exchanges = await getExchanges();
  console.log(context);

  return {
    props: {
      queues,
      exchanges
    }
  }
}
