import {
  Box,
  Center,
  Circle,
  Flex,
  Heading,
  Text,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaServer } from "react-icons/fa";

function WorkGoalItem({ type, title, content, icon }) {
  const type_goal = "goal";
  const type_service = "service";

  const [margin_top, setMarginTop] = useState("0px");

  useEffect(() => {
    if (type === type_service) {
      setMarginTop("10px");
    } else {
      setMarginTop("0px");
    }
  }, [type]);

  return (
    <Flex
      // me="20px"
      mb="40px"
      bg={type === type_service ? "#f5f5f5" : "none"}
      borderRadius={type === type_service ? "10px" : "none"}
      w="100%"
      flexDir={type === type_service ? "column" : "row"}
      ms={type === type_service ? "15px" : "0px"}
      p={type === type_service ? "10px 15px" : "0px"}
    >
      {type === type_service ? (
        <Circle bg="gray.100" h="50px" w="50px">
          <Center>
            <Icon as={FaServer} />
          </Center>
        </Circle>
      ) : (
        <Box h="80%" bg="pink.500" w="10px" borderRadius="5px"></Box>
      )}

      <Box ms={type === type_service ? "0px" : "15px"} mt={margin_top}>
        <Heading size="md" mb="20px" fontWeight="500">
          Goal Number One
        </Heading>
        <Text textAlign="justify" fontSize="15.5px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sint
          itaque mollitia ratione! Ea quae natus minima, eos numquam debitis
          provident aperiam architecto quas mollitia!
        </Text>
      </Box>
    </Flex>
  );
}

export default WorkGoalItem;
