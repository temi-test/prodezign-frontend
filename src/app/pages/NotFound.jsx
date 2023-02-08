import { Center } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/navigation/Footer";
import Error from "../components/notify/Error";

function NotFound() {
  return (
    <React.Fragment>
      <Center minH="100vh">
        <Error />
      </Center>
    
      
    </React.Fragment>
  );
}

export default NotFound;
