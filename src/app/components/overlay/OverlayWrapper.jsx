import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Box,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/notify/Loading";
import { setOverlay, setConfirmed } from "../../features/overlay/overlaySlice";
import NotifyComponent from "../notify/NotifyComponent";

function OverlayWrapper() {
  const dispatch = useDispatch();
  const { overlay } = useSelector((state) => state.overlay);

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      // leastDestructiveRef={cancelRef}
      // onClose={onClose}
      isOpen={overlay.show}
      isCentered
      onOverlayClick={() => {
        if (overlay.view === "loading") {
          return;
        } else {
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
        }
      }}
      // onCloseComplete={() => {
      //   if (overlay.view === "success" || overlay.view === "error") {
      //     dispatch(
      //       reset()
      //     );
      //   }
      // }}
    >
      <AlertDialogOverlay />

      <AlertDialogContent
        borderRadius="lg"
        m={{
          base: "0px 10px",
        }}
        p={{
          base: "10px 0px",
          sm: "10px 10px",
        }}
        // ps={5} pe={5}
      >
        <AlertDialogBody>
          <Box>
            {overlay.view === "loading" ? (
              <Loading />
            ) : (
              <NotifyComponent location="modal" />
            )}
          </Box>
        </AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default OverlayWrapper;
