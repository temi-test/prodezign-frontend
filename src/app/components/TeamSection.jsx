import React from "react";
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import TeamItem from "./TeamItem";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p5 from "../images/p5.jpg";
import p6 from "../images/p6.jpg";
import p7 from "../images/p7.jpg";
import p8 from "../images/p8.jpg";

function TeamSection() {
  return (
    <Box pb="0px" color="white" mb="200px">
      <Box
        maxH="800px"
        //   bg="#002333"
        bg="#000000"
        p="50px 150px"
        pt="50px"
      >
        <Flex
          textAlign="center"
          justifyContent="center"
          flexDir="column"
          alignItems="center"
        >
          <Heading mb="10px" size="2xl">
            Learn from Creative Experts
          </Heading>
          <Text w="60%" fontSize="22px">
            Skillshare classes are taught by industry leaders excited to share
            their tools, techniques, and professional journeys with you.
          </Text>
        </Flex>
        <SimpleGrid columns={2} spacing={5} pos="relative" top="50px">
          <TeamItem img={p1} />
          <TeamItem img={p7} />
          <TeamItem img={p2} />
          <TeamItem img={p5} />
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default TeamSection;
