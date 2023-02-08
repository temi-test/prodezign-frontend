import React from "react";
import { Accordion, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import AccordionItem from "../AccordionItem";
import TestimonialVideoItem from "./TestimonialVideoItem";
import TestimonialTextItem from "./TestimonialTextItem";

function TestimonialTextSection() {
  return (
    <Box p="50px 0px">
      <SimpleGrid columns={3} spacing={5}>
        <TestimonialTextItem />
        <TestimonialTextItem />
        <TestimonialTextItem />
        <TestimonialTextItem />
        <TestimonialTextItem />
        <TestimonialTextItem />
        <TestimonialTextItem />
        <TestimonialTextItem />
      </SimpleGrid>
    </Box>
  );
}

export default TestimonialTextSection;
