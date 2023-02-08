import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Heading, Box, Flex, Center } from "@chakra-ui/react";
import AnimatedPage from "./AnimatedPage";

import { readUser } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../components/notify/Loading";
import Error from "../components/notify/Error";
import useRedirect from "../hooks/useRedirect";
import InfoToast from "../components/toast/InfoToast";
import useToast from "../hooks/useToast";
import Footer from "../components/navigation/Footer";
function Init() {
  const dispatch = useDispatch();
  const redirect = useRedirect();
  const location = useLocation();
  const showToast = useToast();

  const { token, account, read_user } = useSelector((state) => state.auth);

  const tryAgain = () => {
    dispatch(readUser(token));
  };

  useEffect(() => {
    if (read_user.success === true) {
      // if account.verified is false or is null or undefined
      if (account?.verified != true) {
        // navigate to the verify auth page
        // and set the flag to true....so they cant come back to the init route again
        redirect("/auth/verify", true);
        return;
      }
      // user is signedin and verified...navigate back to where they were coming from
      // and set the flag to true....so they cant come back to the init route again

      // show the signin success toast
      showToast({
        title: "Signup successful",
        status: "success",
      });
      redirect(location.state.prevPathname, true);
      return;
    }

    if (read_user.error) {
      console.log("read user is error");
      // chek if it needs t redirect to the login page
      // and set the flag to true....so they cant come back to the init route again
      if (read_user?.redirect === true) {
        redirect("/auth/login", true);
        return;
      }
      // not redirect mode.....just show the error and the try again option
    }
  }, [read_user]);

  useEffect(() => {
    // console.log("init auth token below");
    // console.log(token);
    // TEST THIS if account exist and is verified
    // then redirect back to where user was coming from
    if (account && account?.verified) {
      console.log("account is verified");
      redirect(location.state.prevPathname, true);
      return;
    } else {
      // if account doesnt exist the read the user from the database
      dispatch(readUser(token));
    }
  }, []);

  return (
    <React.Fragment>
      {read_user.loading ? (
        <Center minH="100vh">
          <Loading />
        </Center>
      ) : null}

      {read_user.error && (
        <Center minH="100vh">
          <Error tryAgain={tryAgain} />
        </Center>
      )}

     
      
    </React.Fragment>
  );
}

export default Init;
