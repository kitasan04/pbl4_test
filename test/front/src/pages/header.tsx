import { Box, Text, Divider, Grid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Link, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import deviceIcon from "./images/icon3.png";
import Styles from './css/cursor.module.css';
import Styles2 from './css/motion.module.css';
import React from "react";
//import { MoonIcon, SunIcon} from "@chakra-ui/icons";
//import MoonButtonIcon from "../images/brand/moon.svg";

export const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const color = useColorModeValue("#006400", "#000")
  return (
    
    <Box
      bg={color}
      opacity="0.9"
      color="#ffffff"
      h={20}
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={Styles.cursor3}
    >

    <Box display="flex" justifyContent="center" className={Styles2.wait}>
            <Image 
              boxSize="80px"
              src={deviceIcon.src} />
        </Box>
      <Divider
        h={14}
        orientation="vertical"
        borderColor="ffffff"
        opacity="1"
        mr={"3%"}
        ml={"3%"}
      />

        <Text
          fontSize="3xl"
          fontFamily="cursive"
        >
          author
        </Text>

      <Divider w={"2%"} borderColor="#fff" opacity="0.5" mr={"1%"} ml={"2%"} />

      <Text
          fontSize="3xl"
          fontFamily="cursive"
          _hover={{ color:"#FF3333" }}
          mr={"1%"}
          ml={"1%"}
        >
        <Link href="/kitasan">kitasan</Link>
        </Text>

        <Text
          fontSize="3xl"
          fontFamily="cursive"
          _hover={{ color:"#FF3333" }}
          mr={"1%"}
          ml={"1%"}
        >
        <Link href="/mila">mila</Link>
        </Text>

      <Divider
        h={14}
        orientation="vertical"
        borderColor="ffffff"
        opacity="1"
        mr={"2%"}
        ml={"2%"}
      />

      <Button onClick={toggleColorMode} bg={color} className={Styles2.fuwafuwa}>
        {colorMode === 'light' ? '🎄' : '🎃'}
      </Button>
    </Box>
  );
};
