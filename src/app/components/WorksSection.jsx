import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import TeamItem from "./TeamItem";

function WorksSection() {
  return (
    <Box p="100px 100px">
      <SimpleGrid columns={3} spacing={5}>
        <TeamItem />
        <TeamItem />
        <TeamItem />
        <TeamItem />
        <TeamItem />
      </SimpleGrid>
    </Box>
  );
}

export default WorksSection;
