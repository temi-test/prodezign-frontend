import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Text,
  Heading,
  Center,
  Icon,
  Flex,
  Button,
  HStack,
} from "@chakra-ui/react";
import LottieComponent from "../LottieComponent";
import {
  setConfirmed,
  setConfirmedAction,
  setOverlay,
} from "../../features/overlay/overlaySlice";
import { useDispatch, useSelector } from "react-redux";
import { FiAlertCircle } from "react-icons/fi";
import { capitalize } from "lodash";

function NotifyComponent({ tryAgain, status, title, message, location }) {
  // status signifies the status of notify wether success, error, loading, confirm
  // location signifies the location either modal or page

  // constants
  const LOCATION_PAGE = "page";
  const LOCATION_MODAL = "modal";
  const STATUS_CONFIRM = "confirm";

  const [titleSize, setTitleSize] = useState("");
  const [messageSize, setMessageSize] = useState("");
  const [messageWidth, setMessageWidth] = useState("");
  const [isConfirm, setIsConfirm] = useState(false);

  const dispatch = useDispatch();
  const { overlay, confirmed } = useSelector((state) => state.overlay);
  

  const default_message =
    "Uh oh. It looks like you've somehow managed to arrive at a termina with no rails leading here. Please click the button below to go backto the homepage";
  useEffect(() => {
    if (location === LOCATION_PAGE) {
      setTitleSize("2xl");
      setMessageSize("20px");
      setMessageWidth("50%")
    } else {
      setTitleSize("lg");
      setMessageSize("18px");
      setMessageWidth("100%")
      // if its location modal check if the view of the overlay is
      if (overlay.view === STATUS_CONFIRM) {
        setIsConfirm(true);
      }
    }
  }, [location]);

  return (
    <Box w="100%">
      <Flex justifyContent="center" alignItems="center">
        {/* if status is not set then its from the modal  */}
        {isConfirm ? (
          <Icon color="red.500" h={20} w={20} as={FiAlertCircle}></Icon>
        ) : (
          <LottieComponent type={!status ? overlay.view : status} />
        )}
      </Flex>
      <Box mt="16px">
        <Heading size={titleSize} textAlign="center" fontWeight="400" mb="10px">
          {!title ? capitalize(overlay.view) : title}
        </Heading>
      
        <Center>
          <Text textAlign="center" fontSize={messageSize} w={messageWidth}>
            {!message ? overlay.message : message}
          </Text>
        </Center>

        {/* SHOW THE TRY AGAIN BUTTON IF THE PROPS EXIST */}
        {tryAgain && (
          <Center>
            <Button
              bg="black"
              color="white"
              size="lg"
              mt="30px"
              onClick={() => {
                if (tryAgain) {
                  tryAgain();
                }
              }}
            >
              TryAgain
            </Button>
          </Center>
        )}

        {overlay.view === STATUS_CONFIRM && (
          <Center mt={5}>
            <HStack>
              <Button
                onClick={() => {
                  // reset the overlay state... this close the overlay
                  dispatch(setOverlay(true));
                  // reset the confirmed_action back to an empty string
                  dispatch(setConfirmedAction(""));
                }}
              >
                Cancel
              </Button>
              <Button
                bg="red.500"
                color="white"
                onClick={() => {
                    // reset the overlay state... this close the overlay
                    dispatch(setOverlay(true));
                    // set the confirmed state to true
                  dispatch(setConfirmed(true));
                }}
              >
                Yes
              </Button>
            </HStack>
          </Center>
        )}
      </Box>
    </Box>
  );
}

export default NotifyComponent;
