import React, { FC } from 'react'
import { Exchange } from "@services/rabbitmq/interfaces/exchange.interface";
import { Queue } from "@services/rabbitmq/interfaces/queue.interface";
import { getExchanges, getQueues } from '@services/rabbitmq/rabbitmq.api'
import { GetStaticPropsResult, InferGetStaticPropsType } from "next";

import { Box, Button, Grid, GridItem, Icon, Image, Input, InputGroup, InputLeftAddon, InputLeftElement, Text } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';

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

export default function App(
  data: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Grid
      templateAreas={`"header header"
                  "configs configs"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={'50px 50px 1fr 30px'}
      gridTemplateColumns={'150px 1fr'}
      h='100vh'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem pl='2' bg='orange.300' area={'header'} overflow={'hidden'} display='flex'>
        <Box boxSize='sm' display='flex' flex={1} overflow={'hidden'} height={'100%'} flexDirection="row">
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
      <GridItem pl='2' bg='pink.300' area={'configs'} display='flex'>
        <Box boxSize='sm' display='flex' flex={1} overflow={'hidden'} height={'100%'} justifyContent={"center"} alignItems={"center"} paddingInline={2}>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<PhoneIcon color='gray.300' />}
            />
            <Input type='url' placeholder='base url' />
          </InputGroup>
        </Box>
        <Box boxSize='sm' display='flex' flex={3} overflow={'hidden'} height={'100%'} flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"}>
          <Box boxSize='sm' display='flex' flex={2} flexDirection={"row"} backgroundColor={"red"} height={'100%'} alignItems={"center"}>
            <InputGroup marginInline={2}>
              <InputLeftAddon children='url' />
              <Input type='url' placeholder='base url' />
            </InputGroup>
            <InputGroup marginInline={2}>
              <InputLeftAddon children='+234' />
              <Input type='tel' placeholder='phone number' />
            </InputGroup>
          </Box>
          <Box boxSize='sm' display='flex' flex={1} backgroundColor={"yellow"} height={'100%'} alignItems={"center"}>
            <Button h='1.75rem' size='sm' onClick={() => { }}>
              {'HideShow'}
            </Button>
          </Box>
        </Box>
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
    </Grid >
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
      exchanges
    }
  }
}
