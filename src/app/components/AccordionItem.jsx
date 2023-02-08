import React from "react";
import {
  AccordionItem as ChakraAccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

function AccordionItem({ fontSize, contentSize, radius, mb, pt, pb }) {
  return (
    <ChakraAccordionItem
      // p="10px 0px"
      bg="#fafafa"
      borderRadius={radius}
    >
      <AccordionButton p="25px 0px">
        <Box
          fontSize={fontSize ? fontSize : "17px"}
          fontWeight="500"
          as="span"
          flex="1"
          textAlign="left"
          p="0px 0px"
          mb="0px"
        >
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel fontSize={fontSize} pt="10px" pb="20px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </ChakraAccordionItem>
  );
}

export default AccordionItem;
