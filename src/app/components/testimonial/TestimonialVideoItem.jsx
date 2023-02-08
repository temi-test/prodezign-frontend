import { Box , Image} from "@chakra-ui/react";
import React from "react";

function TestimonialVideoItem({ mt, img }) {
  return (
    <Box mt={mt} h="400px" w="100%" bg="gray.100" borderRadius="10px">
      <Image h="100%" w="100%" src={img} objectFit="cover" borderRadius="10px"/>
    </Box>
  );
}

export default TestimonialVideoItem;
