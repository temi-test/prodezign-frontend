import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import TestimonialVideoItem from "./TestimonialVideoItem";
import p1 from "../../images/p1.jpg";
import p2 from "../../images/p2.jpg";
import p5 from "../../images/p5.jpg";
import p6 from "../../images/p6.jpg";
import p7 from "../../images/p7.jpg";
import p8 from "../../images/p8.jpg";

function TestimonialVideoSection() {
  return (
    <Box p="20px 0px">
      <SimpleGrid columns={4} spacing={3}>
        <TestimonialVideoItem img={p1} />
        <TestimonialVideoItem mt="35px" img={p2} />
        <TestimonialVideoItem img={p5} />
        <TestimonialVideoItem mt="35px" img={p6} />
      </SimpleGrid>
    </Box>
  );
}

export default TestimonialVideoSection;
