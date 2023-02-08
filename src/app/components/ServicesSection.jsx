import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import WorkGoalItem from "./WorkGoalItem";

function ServicesSection() {
  return (
    <Box p="50px 100px">

      <Heading mb="70px" textAlign="center">What We Do</Heading>
      <SimpleGrid  columns={3} spacing={5} spacingY={1}>
      <WorkGoalItem type="service"/>
      <WorkGoalItem type="service"/>
      <WorkGoalItem type="service"/>
      <WorkGoalItem type="service"/>
      <WorkGoalItem type="service"/>
      <WorkGoalItem type="service"/>
      
    </SimpleGrid>
    </Box>
   
  );
}

export default ServicesSection;
