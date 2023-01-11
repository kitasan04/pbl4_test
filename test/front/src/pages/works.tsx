import { Box, Text, Divider, Grid, GridItem } from "@chakra-ui/layout";
import { Button, useColorMode, useColorModeValue} from "@chakra-ui/react";
import { Link as Scroll } from 'react-scroll';
import React from "react";
import { motion } from "framer-motion";
import { Image } from "@chakra-ui/image";
import Script from 'next/script';
import Link from 'next/link';
import Styles from './css/cursor.module.css';
import Styles2 from './css/motion.module.css';
import Styles3 from './css/style.module.css';
import Santa from "./images/santa.png";
import Santa2 from "./images/santa2.png";
import Tona from "./images/tona.png";
import Tree from "./images/tree.png";
import Snowball from "./images/snowball.png";
import Snowball2 from "./images/snowball2.png";
import Snowball3 from "./images/snowball3.png";
import Kabo from "./images/kabo.png";
import Kabo2 from "./images/kabo2.png";
import Obake from "./images/obake.png";
import Koumori from "./images/koumori.png";
import Spider from "./images/spider.png";


export const TopWorks = () => {
    const color = useColorModeValue("#006400", "#000")

  return (
    <Box bg={color} opacity="0.8" color="#ffffff" id="0">
      <Box textAlign="center">
       <Box>
      <Text fontFamily="Impact" fontSize={100} className={Styles3.title}>
        kitasan & mila
      </Text>
      </Box>
    </Box>

    <Grid templateColumns='repeat(20, 1fr)' gap={1}>
     <GridItem colSpan={5}>
     <Box display="flex" justifyContent="center" m="auto">
     <Image 
              boxSize="250px"
              className={Styles2.updown}
              src={Tona.src} />
        </Box>
      <Box h="10px"></Box>
     <Box display="flex" justifyContent="center" m="auto">
     <Image 
              boxSize="250px"
              className={Styles2.blinking}
              src={Spider.src} />
      </Box>
      </GridItem>
     <GridItem colSpan={10}>
      <Box textAlign="center">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt={10}
          mb={10}
        >
        </Box>

        <Box
        className={Styles.cursor2}
        boxShadow='dark-lg'
          p={10}
          w="260px"
          bg="000"
          border="1px solid #ffffff"
          borderRadius="4px"
          m="auto"
          _hover={{ border: "1px solid #FF3333", color:"#FF3333" }}
        >
          
          <Text fontSize="3xl" fontFamily="cursive" className={Styles3.center}>
          <Link href='/login'>Game Start</Link>
          </Text>
        </Box>

        <Box  h={10}></Box>

        <Box
        className={Styles.cursor2}
        boxShadow='dark-lg'
          p={10}
          w="260px"
          bg="000"
          border="1px solid #ffffff"
          borderRadius="4px"
          m="auto"
          _hover={{ border: "1px solid #FF3333", color:"#FF3333" }}
        >         
          <Text fontSize="3xl" fontFamily="cursive" className={Styles3.center}>
          <Scroll to="1" smooth={true} >Rule</Scroll>
          </Text>
        </Box>

      <Box  h={100}>
      </Box>
      </Box>
      </GridItem>
     <GridItem colSpan={5}>
     <Box display="flex" justifyContent="center" m="auto">
     <Image 
              boxSize="250px"
              className={Styles2.updown}
              src={Santa.src} />
        </Box>
      <Box h="10px"></Box>
     <Box display="flex" justifyContent="center" m="auto">
     <Image 
              boxSize="250px"
              className={Styles2.updown}
              src={Kabo2.src} />
      </Box>
     </GridItem>
     </Grid>

     <Grid templateColumns='repeat(20, 1fr)' gap={1}>
     <GridItem colSpan={3}>
     <Box h="10px"></Box>
     <Box display="flex" justifyContent="center" m="auto">
     <Image 
              boxSize="150px"
              className={Styles2.updown}
              src={Snowball.src} />
      </Box>
      <Box h="2px"></Box>
      <Box display="flex" justifyContent="center" m="auto">
     <Image 
              boxSize="150px"
              className={Styles2.updown}
              src={Kabo.src} />
        </Box>
      <Box h="2px"></Box>
     <Box display="flex" justifyContent="center" m="auto">
     <Image 
              boxSize="150px"
              className={Styles2.updown}
              src={Snowball2.src} />
      </Box>
      <Box h="2px"></Box>
      <Box display="flex" justifyContent="center" m="auto">
     <Image 
              boxSize="150px"
              className={Styles2.blinking2}
              src={Koumori.src} />
      </Box>
      <Box h="2px"></Box>
      <Box display="flex" justifyContent="center" m="auto">
     <Image 
              boxSize="150px"
              className={Styles2.updown}
              src={Snowball3.src} />
      </Box>
     </GridItem>
     <GridItem colSpan={14}>
     <Divider borderColor="#FFFFFF" w={"100%"} m={"auto"}/>
        <Box h={100}></Box>

        <Box pb={20} id="1">
        <Text fontFamily="fantasy" fontSize={72} className={Styles2.fuwafuwa}>
            Rule
          </Text>
          <Text fontSize="2xl" fontFamily="Rajdhani">
　0から9までの数字を使い、3桁の数字を作成する。数字の重複は認められず、「112」や「999」といった数字は作れない。<br/>
　推測した数字と桁が会っていた場合は、「EAT」、数字があっているが桁があっていない場合は「BITE」となる。例えば「152」にたいして「123」を推測した場合、「1EAT-1BITE」となる。
          </Text>
        </Box>

      <Box  h={100}>
      </Box>

      <Divider borderColor="#FFFFFF" w={"100%"} m={"auto"}/>
      <Box  h={100}>
      </Box>
      </GridItem>

      <GridItem colSpan={3}>
      <Box display="flex" justifyContent="center" m="auto">
     <Image 
              boxSize="150px"
              src={Tree.src} />
        </Box>
      <Box h="2px"></Box>
     <Box display="flex" justifyContent="center" m="auto">
     <Image 
              boxSize="150px"
              className={Styles2.blinking}
              src={Koumori.src} />
      </Box>
      <Box h="152px"></Box>
     <Box display="flex" justifyContent="center" m="auto">
     <Image 
              boxSize="150px"
              className={Styles2.updown}
              src={Kabo.src} />
      </Box>
    </GridItem>
    </Grid>

    <Grid templateColumns='repeat(10, 1fr)' gap={1}>
     <GridItem colSpan={3}>
     <Box display="flex" justifyContent="center" m="auto" className={Styles2.fuwafuwa}>
     <Image 
              boxSize="250px"
              className={Styles3.flip}
              src={Obake.src} />
      </Box>
     </GridItem>
     <GridItem colSpan={4}>

    <Box textAlign="center">
    <Button colorScheme='teal' variant='outline' color="#FFD700">
    <Scroll to="0" smooth={true} >Top</Scroll>
  </Button>
  <Box>
  <Image 
              boxSize="250px"
              m={"auto"}
              className={Styles2.updown}
              src={Santa2.src} />

    <Box  h={50}>
      </Box>
    </Box>
    </Box>
    </GridItem>
    <GridItem colSpan={3}>
    <Box display="flex" justifyContent="center" m="auto">
    <Image 
              boxSize="250px"
              className={Styles2.fuwafuwa}
              src={Obake.src} />
    </Box>
     </GridItem>
    </Grid>
    </Box>

  );
};
