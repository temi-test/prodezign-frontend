import React from "react";
import {Alert, Box, HStack, Heading, Flex, CloseButton, AlertDescription,AlertIcon} from "@chakra-ui/react"

function FormError({error, message, setFormError, width}) {
  return (
    <Box w={width}>
      {error == true && (
        <Alert mb="20px" status="error" borderRadius={10} p={3} pe={0} >
          <Box w="100%">
            <Flex w="100%" alignItems="center" justifyContent="space-between" mb={1}>
              <HStack>
              <AlertIcon />
                <Heading size="sm">Error</Heading>
              </HStack>
           
              <CloseButton
                onClick={() => {
                  setFormError(false, "");
                }}
              />
            </Flex>

            <Flex w="100%">
              <AlertDescription
               
                fontSize={{
                  base: "14px",
                  lg: "16px",
                }}
              >
                {message}
              </AlertDescription>
            </Flex>
          </Box>
        </Alert>
      )}
    </Box>
  );
}

export default FormError;
