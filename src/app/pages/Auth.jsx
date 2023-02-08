import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import AnimatedPage from "./AnimatedPage";
import TitleHeadings from "../components/headings/TitleHeadings";

function Auth() {
  const location = useLocation();

  return (
    <AnimatedPage>
      {location.pathname === "/auth/verify" ? (
        <Outlet />
      ) : (
        <Grid templateColumns="1fr 2fr">
          <Flex
            bg="#000000"
            p="0px 20px"
            flexDir="column"
            // alignItems="center"
            justifyContent="center"
            textAlign="start"
          >
            <TitleHeadings title="Signup For Free" color="white" mb="30px" />

            <Box
              w="40%"
              bg="green.300"
              h="6px"
              borderRadius="10px"
              mb="30px"
            ></Box>

            <Text color="white" fontSize="18px">
              Explore your creativity with thousand of inspiring classes in Web
              Development, UI/UX, Product Design and more
            </Text>
          </Flex>

          <Box>
            <Outlet />
          </Box>
        </Grid>
      )}
    </AnimatedPage>
  );
}

export default Auth;
