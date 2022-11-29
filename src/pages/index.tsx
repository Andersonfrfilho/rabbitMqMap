import React from "react";
import { Canvas } from "@react-three/fiber";
import { GetStaticPropsResult, InferGetStaticPropsType } from "next";

import { Queue } from "@services/rabbitmq/interfaces/queue.interface";
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { getExchanges, getQueues } from "@services/rabbitmq/rabbitmq.api";
import {
  Body,
  Config,
  Container,
  Content,
  Footer,
  Header,
  Menu,
  Painel,
  Title,
} from "./styles";
import RabbitLogoSvg from "@assets/svg/RabbitMQ_logo.svg";

function MyBox({ position, color }: any) {
  return (
    <mesh position={position}>
      <boxBufferGeometry />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

interface AppGetStaticInterface {
  queues: Queue[];
  exchanges: Exchange[];
}

export default function App(
  data: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Container>
      <Header>
        <RabbitLogoSvg/>
        {/* <AreaLogo>
          <LogoSvg></LogoSvg>
        </AreaLogo>
        <AreaTitle>
        </AreaTitle> */}
      </Header>
      <Body>
        <Config>
          <Title>Config</Title>
        </Config>
        <Content>
          <Menu>
            <Title>Menu</Title>
          </Menu>
          <Painel>
            <Canvas camera={{ position: [4, 4, 4] }}>
              <color attach="background" args={["black"]} />
              <MyBox position={[-1, 0, 0]} color="magenta" />
              <MyBox position={[1, 0, 0]} color="royalblue" />
            </Canvas>
          </Painel>
        </Content>
      </Body>
      <Body>
        <Config>
          <Title>Config</Title>
        </Config>
        <Content>
          <Menu>
            <Title>Menu</Title>
          </Menu>
          <Painel>
            <Canvas camera={{ position: [4, 4, 4] }}>
              <color attach="background" args={["black"]} />
              <MyBox position={[-1, 0, 0]} color="magenta" />
              <MyBox position={[1, 0, 0]} color="royalblue" />
            </Canvas>
          </Painel>
        </Content>
      </Body>
      <Footer>
        <h1>Footer</h1>
      </Footer>
    </Container>
  );
}

export async function getStaticProps(
  context: any
): Promise<GetStaticPropsResult<AppGetStaticInterface>> {
  const queues = await getQueues();
  const exchanges = await getExchanges();
  console.log(context);

  return {
    props: {
      queues,
      exchanges,
    },
  };
}
