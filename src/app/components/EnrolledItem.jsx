import { Image, Box, Heading, Text, Fade } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function EnrolledItem({ payload }) {
  const location = useLocation();

  return (
    <Fade in={true} whileHover={{ scale: 0.9 }}>
      <Link
        to={`/bootcamps/${payload._id}/class`}
        state={{ prevPathname: location.pathname }}
      >
        <Box
          w="100%"
          cursor="pointer"
          mb="20px"
          p="10px 10px"
          border="none"
          borderRadius="10px"
          borderWidth="0px"
          //   shadow="md"
        >
          <Heading fontSize="20px" mb="10px" fontWeight="500">
            {payload?.name}
          </Heading>
          <Text noOfLines={2} fontSize="15px" mb="20px">
            {payload?.desc}
          </Text>
          <Image
            objectFit="cover"
            w="100%"
            h="250px"
            bg="gray.100"
            border="none"
            borderWidth="0px"
            src={payload?.preview_img}
            borderRadius="10px"
            shadow="sm"
            mb="10px"
          ></Image>
        </Box>
      </Link>
    </Fade>
  );
}

export default EnrolledItem;
