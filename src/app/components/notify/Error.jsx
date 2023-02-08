import React, { useRef, useEffect } from "react";
import { Box, Text, Heading, Center, Flex, Button } from "@chakra-ui/react";
import LottieComponent from "../LottieComponent";

function Notify({ tryAgain, type, location }) {

  // type signiefies the type of notify wether success error loading, confirm
  // location signifies the location either modal or page

  useEffect(()=> {

  }, [type])


  return (
    <Box w="100%">
      <Flex justifyContent="center" alignItems="center">
        <LottieComponent />
      </Flex>
      <Box mt="-30px">
        <Heading size="2xl" textAlign="center" fontWeight="400" mb="20px">
          Server Error
        </Heading>
        <Center>
          <Text textAlign="center" fontSize="19px" w="50%">
            Uh oh. It looks like you've somehow managed to arrive at a terminal
            with no rails leading here. Please click the button below to go back
            to the homepage.
          </Text>
        </Center>
        <Center>
          <Button
            bg="black"
            color="white"
            size="lg"
            mt="30px"
            onClick={() => {
              if (tryAgain) {
                tryAgain();
              }
            }}
          >
            TryAgain
          </Button>
        </Center>
      </Box>
    </Box>
  );
}

export default Notify;
