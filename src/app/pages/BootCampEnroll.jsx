import { Box, SimpleGrid, Center } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import useRedirect from "../hooks/useRedirect";
import ChargeInit from "../components/Charge/ChargeInit";

function BootCampEnroll() {
  const redirect = useRedirect();

  /// Note variable name here must be the same woth variable
  /// used in the route parameters
  let { id } = useParams();
  console.log("bootcamp enroll id is " + id);

  return (
    <SimpleGrid columns={2} h="100vh">
      <Box bg="#f7f7f7"></Box>
      <Center>
        <ChargeInit />
      </Center>
    </SimpleGrid>
  );
}

export default BootCampEnroll;
