import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import WorkGoalItem from "./WorkGoalItem";

function GoalsSection() {
  return (
    <Box p="50px 100px">

      <Heading mb="70px" textAlign="center">Our Goals</Heading>
      <SimpleGrid  columns={3} spacing={10} spacingY={1} w="100%">
      <WorkGoalItem />
      <WorkGoalItem />
      <WorkGoalItem />
      <WorkGoalItem />
      <WorkGoalItem />
      <WorkGoalItem />
      
    </SimpleGrid>
    </Box>
   
  );
}

export default GoalsSection;
