import { Box, Center, Heading, Text, Icon, Button } from "@chakra-ui/react";
import React from "react";

function CommunityItem({ icon, title, content, btnText }) {
  return (
    <Box
      w="100%"
      borderRadius="10px"
      p="10px 10px"
      pb="20px"
      borderWidth={1}
      cursor="pointer"
      borderColor="#00000030"
    >
      <Center h="250px" p="10px" bg="gray.200" mb="20px" borderRadius="10px">
        <Icon as={icon} h="50px" w="50px" />
      </Center>

      <Heading mb="10px" size="md">
        {title}
      </Heading>
      <Text>{content}</Text>
      <Button
        mt="10px"
        color="white"
        bg={
          title === "Facebook"
            ? "facebook.500"
            : title === "Youtube"
            ? "red.500"
            : title === "Twitter"
            ? "twitter.500"
            : "pink.500"
        }
      >
        {btnText}
      </Button>
    </Box>
  );
}

export default CommunityItem;
