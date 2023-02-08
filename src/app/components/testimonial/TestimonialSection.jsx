import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import TestimonialTextSection from "./TestimonialTextSection";
import TestimonialVideoSection from "./TestimonialVideoSection";

function TestimonialSection() {
  return (
    <Box p="70px 100px" bg="#f7f7f7">
      <Heading w="50%" mb="25px">
        What Student's Say About Prodezign
      </Heading>
      <Text fontSize="20px" w="50%" mb="25px">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
        deserunt molestiae iste voluptas quod libero blanditiis enim excepturi
        sed eligendi.
      </Text>

      <Button bg="blue.500" size="lg" color="white" mb="50px">
        Get Started
      </Button>
      <TestimonialVideoSection />
      <TestimonialTextSection />
    </Box>
  );
}

export default TestimonialSection;
