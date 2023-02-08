import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import HeaderLink from "./HeaderLink";


function Footer() {
  return (
    <Box p="100px 50px" bg="gray.100">
      <Grid templateColumns="1.5fr 1fr 1fr" gridGap={10} spacing={5}>
        <Box>
          <Heading size="md" mb="50px">
            Prodezign · Live Bootcamps & Online Classes
          </Heading>

          <Text w="100%">
            Being fully bootstrapped, we're not driven by money or interested in
            becoming a mystical unicorn. We happily cut through the noise and
            teach designers and devs personally, taking a 100% learn-by-doing
            approach with a zero Powerpoint policy.
          </Text>
        </Box>

        <Box>
          <Heading size="sm">Navigation</Heading>
          <Divider m="20px 0px" />
          <Flex flexDir="column">
            <HeaderLink name="Home" link="/" mb={true} />
            <HeaderLink name="Bootcamps" link="/bootcamps" mb={true} />
            <HeaderLink name="Works" link="/works" mb={true} />
            <HeaderLink name="About" link="/about" mb={true} />
          </Flex>
        </Box>

        <Box>
          <Heading size="sm">Get in Touch</Heading>
          <Divider m="20px 0px" />
          <Heading fontWeight="500" size="sm" mb="20px">
            Email : prodezign@gmail.com
          </Heading>
          <Heading fontWeight="500" size="sm" mb="20px">
            Phone: +234-902-988-6869 - Nigeria
          </Heading>
          <Heading fontWeight="500" size="sm" mb="20px">
            Phone: +42-323-545-324- United Kingdom
          </Heading>
        </Box>
      </Grid>
    </Box>
  );
}

export default Footer;
