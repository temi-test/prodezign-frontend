import React from "react";
import { Box, Text, Spinner, Icon, Center } from "@chakra-ui/react";

import { useSelector } from "react-redux";

function Loading() {
  const { overlay } = useSelector((state) => state.overlay);

  return (
    <Box w="100%" h="100%" p="10px 0px">
      <Center>
        <Spinner
          speed="0.97s"
          color="blue.500"
          h={20}
          w={20}
          thickness="4px"
          emptyColor="gray.200"
        />
      </Center>

      <Center mt={5}>
        <Text
          mt={5}
          fontSize={{
            base: "15px",
            md: "18px",
            lg: "18px",
          }}
          p={{
            base: "0px 15px",
            md: "0px 15px",
          }}
          textAlign="center"
        >
          Page Loading...Please wait, this might take a few secondss
          {/* {!overlay.message
            ? "This might take a few seconds. Please wait..."
            : overlay.message} */}
        </Text>
      </Center>
    </Box>
  );
}

export default Loading;
