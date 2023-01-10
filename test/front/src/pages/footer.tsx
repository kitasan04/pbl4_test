import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import {css} from '@emotion/css'

export const Footer = () => {
  return (
    <Box bg="#000" opacity="0.9" className={styles.footer}>
      <Text fontSize="lg" fontFamily="Rajdhani" color="#ECC94B" textAlign="right" mr={"10%"}>
      kitasan&mila   
      </Text>
    </Box>
  );
};

const styles={
	footer:css`
		position: absolute;
		width:100%;
		bottom:0;
`
}
