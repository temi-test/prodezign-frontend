import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import LottieComponent from "../LottieComponent";

function BootcampIntro() {
  return (
    <Flex
      p="50px 100px"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <LottieComponent />

      <Heading w="80%" size="2xl" mt="-30px">
        Live Tech Bootcamps. Accelerate your digital career
      </Heading>
      <Text mt="25px" fontSize="20px" w="50%">
        Kickstart or accelerate your digital tech career with a live, immersive
        Bootcamp.
      </Text>
    </Flex>
  );
}

export default BootcampIntro;
