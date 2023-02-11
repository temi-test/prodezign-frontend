import { Center } from "@chakra-ui/react";
import React from "react";
import NotifyComponent from "../components/notify/NotifyComponent";
function NotFound() {
  return (
    <React.Fragment>
      <Center minH="100vh">
        <NotifyComponent
          title="Not Found"
          status="404"
          message="The resource you were trying to access does not exist."
          location="page"
        />
      </Center>
    </React.Fragment>
  );
}

export default NotFound;
