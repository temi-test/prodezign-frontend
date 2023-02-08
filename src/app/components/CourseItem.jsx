import { Image, Box, Heading, Text, Fade } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function CourseItem({ payload }) {
  // console.log("course item");
  // console.log(payload);
  return (
    <Fade in={true} whileHover={{ scale: 0.9 }}>
      <Link to={`/bootcamps/${payload._id}`}>
        <Box
          w="100%"
          cursor="pointer"
          mb="20px"
          p="5px"
          border="none"
          borderWidth="0px"
        >
          <Image
            objectFit="cover"
            w="100%"
            h="180px"
            bg="gray.100"
            border="none"
            borderWidth="0px"
            src={payload?.preview_img}
            borderRadius="10px"
            shadow="sm"
            mb="10px"
          ></Image>
          <Heading size="sm" mb="10px" fontWeight="500">
            {payload?.name}
          </Heading>
          <Text noOfLines={1}>{payload?.desc}</Text>
        </Box>
      </Link>
    </Fade>
  );
}

export default CourseItem;
