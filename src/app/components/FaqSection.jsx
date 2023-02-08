import React from "react";
import { Accordion, Box, Heading } from "@chakra-ui/react";
import AccordionItem from "./AccordionItem";

function ProdezignFaq() {
  return (
    <Box bg="#fafafa" p="80px 250px">
      <Heading mb="50px" textAlign="center">
        Frequently Asked Questions
      </Heading>
      <Accordion allowToggle>
        <AccordionItem fontSize="22px"/>
        <AccordionItem fontSize="22px"/>
        <AccordionItem fontSize="22px" />
        <AccordionItem fontSize="22px"/>
        <AccordionItem fontSize="22px"/>
      </Accordion>
    </Box>
  );
}

export default ProdezignFaq;
