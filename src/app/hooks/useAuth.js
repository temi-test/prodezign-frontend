import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../features/auth/authSlice";
import useToast from "../hooks/useToast";
import {
  setConfirmed,
  setConfirmedAction,
  setOverlay,
} from "../features/overlay/overlaySlice";
import useRedirect from "./useRedirect";

import * as Yup from "yup";
import { cloneDeep } from "lodash";
import { useLocation } from "react-router-dom";

import { login, register, reset, verify } from "../features/auth/authSlice";

function useAuth(isTrue) {
  const { confirmed_action, confirmed } = useSelector((state) => state.overlay);
  const { account, token, loading, error, success, message } = useSelector(
    (state) => state.auth
  );

  const showToast = useToast();
  const dispatch = useDispatch();
  const redirect = useRedirect();
  const location = useLocation();

  // AUTH SCHEMA
  const schema = {
    signupSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      password: Yup.string().required("Password is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),

    loginSchema: Yup.object({
      password: Yup.string().required("Password is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    verifySchema: Yup.object({
      otp: Yup.string().required("OTP code is required"),
    }),
  };
  const [current_schema, setCurrentSchema] = useState({});
  const [form_content, setFormContent] = useState({});
  const current_path = location.pathname;

  useEffect(() => {
    if (location.pathname === "/auth/signup") {
      setCurrentSchema(schema.signupSchema);
      setFormContent({
        current: "signup",
        title: "Signup",
        message: "create an account with prodezign to get started",
        footer: "Already have an account?. Login here",
        button: "Create Account",
      });
    } else if (location.pathname === "/auth/login") {
      setCurrentSchema(schema.loginSchema);
      setFormContent({
        current: "login",
        title: "Login",
        message: "continue your journey, signin to your account",
        footer: "Don't have an account?. Signup here",
        button: "Signin",
      });
    } else if (location.pathname === "/auth/verify") {
      setCurrentSchema(schema.verifySchema);
    }
  }, [location]);

  const [form_error, setFormError] = useState({
    error: false,
    message: "",
  });
  // function prop passed into the FormError Component for reseting the form errors
  const changeFormError = (error, message) => {
    setFormError({
      error: error,
      message: message,
    });
  };

  const runAuth = (values) => {
    if (current_path === "/auth" || current_path === "/auth/signup") {
      console.log("signup values");
      console.log(values);
      dispatch(register(values));
    } else if (current_path === "/auth/login") {
      dispatch(login(values));
    } else {
      dispatch(
        verify({
          token: token,
          data: values,
        })
      );
    }
  };

  const changeRoute = () => {
    if (current_path === "/auth/signup") {
      // redirect to the login page
      redirect("/auth/login", true);
    } else {
      // redirect to the signup page
      redirect("/auth/signup", true);
    }
  };

  const checkForm = (formik) => {
    // reset the form error if its shown
    changeFormError(false, "");
    const form = cloneDeep(formik.values);
    // IF SIGNUP CHECK IF THE FIELDS

    // if (current_view == "signup") {
    //   if (
    //     !form.name ||
    //     form.name == "" ||
    //     !form.email ||
    //     form.email == "" ||
    //     !form.password ||
    //     form.password == ""
    //   ) {
    //     setInfoPayload({
    //       title: "Warning",
    //       status: "warning",
    //       message: "Please fill in all fields to create an account",
    //     });
    //   }
    // } else {
    //   if (
    //     !form.email ||
    //     form.email == "" ||
    //     !form.password ||
    //     form.password == ""
    //   ) {
    //     setInfoPayload({
    //       title: "Warning",
    //       status: "warning",
    //       message: "Please fill in all fields to login",
    //     });
    //   }
    // }
  };

  // LOGOUT CODES
  useEffect(() => {
    if (confirmed === true) {
      console.log("use auth is logging out");
      // check if the confirmed_action is logout
      if (confirmed_action === "logout") {
        // call the logout from the slice
        dispatch(signOut());

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

  const memoLoading = useMemo(() => loading, [loading]);
  const memoError = useMemo(() => error, [error]);
  const memoSuccess = useMemo(() => success, [success]);



  useEffect(() => {
    if (isTrue) {
      if (memoLoading) {
        // if loading hide form error
        changeFormError(false, "");
        dispatch(
          setOverlay({
            show: true,
            view: "loading",
            message: "Please wait. This might take a few seconds",
          })
        );
      }

      if (memoError) {
        // dispatch the loading overlay action
        console.log("auth error ran ");
        changeFormError(error, message);
        dispatch(
          setOverlay({
            show: true,
            // title: "",
            view: "error",
            message: message,
          })
        );
        dispatch(reset());
      }

      if (memoSuccess) {
        console.log("auth success");
        // reset the overlay loading
        dispatch(setOverlay(true));
        //reset the auth state too
        dispatch(reset());

        // if user is in the signup or login route
        // check if the account is verified
        // if its nt....then move to the verfiy url/page

        // if user is in the register page
        if (
          current_path === "/auth/signup" ||
          current_path === "/auth" ||
          current_path === "/auth/login"
        ) {
          if (account?.verified === true) {
            console.log("auth success verified");
            // else redirect to the page they were trying to access before signup/or login
            // this wont get called if user is signs up successfully...cos
            // account is always not verified after signing up
            // but is user is logging in it can be called if the user logging in is alrady a verified user
            showToast({
              title: "Successful",
              message:
                "Welcome back, you have successfully signed in to your account",
              status: "success",
            });
            redirect(location.state.prevPathname, true);
          } else {
            redirect("/auth/verify", true);
          }
        }

        // is user is on the verify page when success is true
        if (current_path === "/auth/verify") {
          console.log("auth success verified");
          // redirect to the page they were trying to access before signup/login
          showToast({
            title: "Success",
            message: "Hurray, you have successfully verified your account",
            status: "success",
          });
          redirect(location.state.prevPathname, true);
        }
      }
    }
  }, [memoLoading, , memoSuccess, memoError]);

  return {
    runAuth,
    current_schema,
    form_error,
    form_content,
    changeFormError,
    changeRoute,
    confirmLogout,
  };
}

export default useAuth;
