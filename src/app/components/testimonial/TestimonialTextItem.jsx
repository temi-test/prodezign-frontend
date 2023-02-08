import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function TestimonialTextItem() {
  return (
    <Box mb={5} mt={5} maxW="sm" w="100%" borderBottomWidth={1} pb="30px">
      <Flex align="center">
        <Image
        //   src=""
          bg="red.500"
          objectFit="cover"
          height="30px"
          w="30px"
          rounded="full"
          mr={3}
        />
        <Text fontWeight="bold">Daramola Temitope</Text>
      </Flex>
      <Box mt={2}>
        <Text >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          adipisci illo esse a. Nobis commodi delectus quas cum totam! Suscipit.
        </Text>
      </Box>
    </Box>
  );
}

export default TestimonialTextItem;
