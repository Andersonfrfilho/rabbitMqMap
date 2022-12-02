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
import { Grid, GridItem } from '@chakra-ui/react';

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
<Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='100vh'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'header'}>
    Header
  </GridItem>
  <GridItem pl='2' bg='pink.300' area={'nav'}>
    Nav
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'footer'}>
    Footer
  </GridItem>
</Grid>
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
