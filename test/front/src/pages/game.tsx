import {App} from './snow'
import { Input, useColorModeValue } from '@chakra-ui/react'
import { Box, Text, Divider, Grid, GridItem } from "@chakra-ui/layout";
import { Header } from "./header";
import { Footer } from "./footer";
import Styles from './css/cursor.module.css';
import Link from 'next/link';

export const Game = () => {
    const color = useColorModeValue("#006400", "#000")
  return (
<>
	{App()}
	<Box  bg={color} opacity="0.8" color="#ffffff">
		<Box>
			<Header />
		</Box>
		<Box  h={500}>
			
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
			<Box  h={100}>
			</Box>
			<Box>
			<Footer />
		</Box>
	</Box>
</>
);
};

export default Game;
