import {App} from './snow'
import { Box, Container } from "@chakra-ui/layout";
import { Header } from "./header";
import { TopWorks } from "./works";
import { Footer } from "./footer";
import { Image } from "@chakra-ui/image";
import React from "react";
import Script from 'next/script';
import { StylesProvider, useColorModeValue } from "@chakra-ui/react";
import Styles from './css/cursor.module.css';
import Styles2 from './css/motion.module.css';

export default function Home(){
    const color = useColorModeValue("#006400", "#000")
    return(
<>
	{App()}
	<Box className={Styles.cursor}  h={"100%"}w={"100%"} bg={color} opacity="0.8" color="#ffffff">
		<Box>
			<Header />
		</Box>
		<Box className={Styles2.zoomIn}>
			<TopWorks />
		</Box>
		<Box>
			<Footer />
		</Box>
	</Box>
</>
    )
};
