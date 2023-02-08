import React from "react";
import {
  Box,
  Icon,
  Button,
  Image,
  Text,
  Heading,
  Center,
} from "@chakra-ui/react";
import { FiAlertCircle, FiXCircle } from "react-icons/fi";
import EmptyOne from "../../images/empty-one.png";
import EmptyTwo from "../../images/empty-two.png";

import EmptyThree from "../../images/empty-three.png";

function Empty({ text, title }) {
  return (
    <Box>
      <Center>
        <Image
          h={{
            base: "200px",
            sm: "200px",
            md: "220px",
          }}
          w={{
            base: "200px",
            sm: "200px",
            md: "220px",
          }}
          src={EmptyOne}
          objectFit="cover"
        />
      </Center>
      <Heading
        fontSize={{
          base: "25px",
          md: "30px",
           lg: "35px"
        }}
        textAlign="center"
      >
        {title}
      </Heading>
      <Text
        mt={3}
        fontWeight="400"
      
        fontSize={{
          base: "15px",
          md: "18px",
          lg: "19px"
        }}
        p={{
          base: "0px 15px",
          md: "0px 100px",
          lg: "0px 250px"
         
        }}
       
        textAlign="center"
      >
        {text}
      </Text>
    </Box>
  );
}

export default Empty;
