import {App} from './snow'
import { Button, useColorModeValue, ListItem, UnorderedList} from '@chakra-ui/react'
import { Box, Text, Divider, Grid, GridItem } from "@chakra-ui/layout";
import { Header } from "./header";
import { Footer } from "./footer";
import { Stack, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { Image } from "@chakra-ui/image";
import Link from 'next/link';
import React from "react";
import Styles from './css/cursor.module.css';
import Icon from "./images/kitasan.png"

export const Kitasan = () => {
    const color = useColorModeValue("#006400", "#000")
    const [isLoaded, setIsLoaded] = React.useState(false)
  return (
    <>
    {App()}
    <Box className={Styles.cursor} bg={color} opacity="0.8" color="#ffffff" >
    <Box>
      <Header />
    </Box>

    <Box  h={50}>
      </Box>
    
    <Box width="50%" m="auto">
    <Stack padding={4} spacing={1} mb="20px">
    <Image boxSize="100px" src={Icon.src} />
      <SkeletonText noOfLines={4} spacing='2' skeletonHeight='8' fontSize="2xl" fontFamily="Rajdhani" isLoaded={isLoaded} fadeDuration={1}>
      <UnorderedList>
        <ListItem>name : kitasan</ListItem>
        <ListItem>grade : B3</ListItem>
        <ListItem>working part : backend, database</ListItem>
        <ListItem>focus point : game</ListItem>
      </UnorderedList>
      </SkeletonText>
    </Stack>
    <Box textAlign='center'>
        <Button onClick={() => setIsLoaded((v) => !v)} bg={color}>🎅</Button>
      </Box>
    <Box
        className={Styles.cursor2}
        boxShadow='dark-lg'
          p={10}
          h="125px"
          w="200px"
          bg="000"
          border="1px solid #ffffff"
          borderRadius="4px"
          m="auto"
          mt="30px"
          _hover={{ border: "1px solid #FF3333", color:"#FF3333" }}
        >
          <Text fontSize="3xl" fontFamily="cursive">
          <Link href='../'>Home</Link>
          </Text>
        </Box>
    <Box  h={150}>
      </Box>
    </Box>
    <Box>
      <Footer />
    </Box>
    </Box>
    </>
  );
};

export default Kitasan;