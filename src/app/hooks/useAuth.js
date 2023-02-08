import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../features/auth/authSlice";
import useToast from "../hooks/useToast";
import {
  setConfirmed,
  setConfirmedAction,
  setOverlay,
} from "../features/overlay/overlaySlice";

function useAuth() {
  const { confirmed_action, confirmed } = useSelector((state) => state.overlay);
  const showToast = useToast();

  useEffect(() => {
    if (confirmed === true) {

      console.log("use auth is logging out")
      // check if the confirmed_action is logout
      if (confirmed_action === "logout") {
        // call the logout from the slice
        dispatch(signOut())
        
        // reset the confirmed_logout here
        dispatch(setConfirmedAction(""));
        dispatch(setConfirmed(false));
        showToast({
          status: "success",
          title: "Signed Out",
          message: "You have successfully signed out of your account",
        });
      
      }
    }
  }, [confirmed]);

  const dispatch = useDispatch();
  const confirmLogout = () => {
    dispatch(
      setOverlay({
        show: true,
        view: "confirm",
        // title: "Confirm",
        message: "Are you sure you want to log out of your account?",
      })
    );
    // set the confirmed action here
    dispatch(setConfirmedAction("logout"));
  };

  return confirmLogout;
}

export default useAuth;
