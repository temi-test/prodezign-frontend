import React from "react";
import {
  Box,
  Text,
  Heading,
  Button,
  HStack,
  Icon,
  Center,
} from "@chakra-ui/react";
import { FiAlertCircle } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";

import { reset, setOverlay, setConfirmed } from "../../features/overlay/overlaySlice";

function Confirm() {
  const dispatch = useDispatch();

  const { overlay, confirmed } = useSelector((state) => state.overlay);

  return (
    <Box w="100%" p="30px 0px">
      <Center>
        <Icon color="red.500" h={20} w={20} as={FiAlertCircle}></Icon>
      </Center>

      <Center mt={5}>
        <Heading size="lg">Confirm</Heading>
      </Center>

      <Center mt={5}>
        <Text textAlign="center" fontSize={20}>
          {overlay.message}
        </Text>
      </Center>

      <Center mt={5}>
        <HStack>
          <Button
            onClick={() => {
              // reset the overlay state... this close the overlay
              dispatch(setOverlay(true));

              // reset the confirmed state in case there is data there
              dispatch(
                setConfirmed({
                  status: false,
                  action: "",
                  pending: "",
                  data: "",
                })
              );
              // dispatch the reset overlay action...this hides the overlay
            }}
          >
            Cancel
          </Button>
          <Button
            bg="pink.500"
            color="white"
            onClick={() => {
              dispatch(
                setConfirmed({
                  status: true,
                  action: confirmed.action,
                  data: confirmed.data
                })
              );
            }}
          >
            Yes
          </Button>
        </HStack>
      </Center>
    </Box>
  );
}

export default Confirm;
