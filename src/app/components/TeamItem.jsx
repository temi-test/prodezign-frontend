import { Box, Image } from "@chakra-ui/react";
import React from "react";

function TeamItem({ name, img }) {
  return <Box w="100%" bg="blue.500" h="350px" borderRadius="10px">
      <Image h="100%" w="100%" src={img} objectFit="cover" borderRadius="10px"/>
  </Box>;
}

export default TeamItem;
