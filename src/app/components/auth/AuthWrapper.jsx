import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import { cloneDeep } from "lodash";
import { useMediaQuery } from "react-responsive";

import { useredirect, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setOverlay } from "../../features/overlay/overlaySlice";
import { login, register, reset, verify } from "../../features/auth/authSlice";
import AnimatedPage from "../../pages/AnimatedPage";
import useRedirect from "../../hooks/useRedirect";
import useToast from "../../hooks/useToast";

function AuthWrapper({children}) {
  
  const dispatch = useDispatch();
  const redirect = useRedirect()
  const showToast = useToast()

  const { current_view, account, token, loading, error, success, message } =
    useSelector((state) => state.auth);

  const location = useLocation();

  const current_path = location.pathname;
  const from = location.state?.from?.prevPathname || "/";

  const changeRoute = () => {
    if (current_path === "/auth/signup") {
      // redirect to the login page
      redirect("/auth/login");
    } else {
      // redirect to the signup page
      redirect("/auth/signup");
    }
  };

  const signupSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    password: Yup.string().required("Password is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const loginSchema = Yup.object({
    password: Yup.string().required("Password is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const verifySchema = Yup.object({
    otp: Yup.string().required("OTP code is required"),
  });

  const [info_payload, setInfoPayload] = useState({});
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

  const checkForm = (formik) => {
    // reset the form error if its shown
    changeFormError(false, "");

    const form = cloneDeep(formik.values);

    if (current_view == "signup") {
      if (
        !form.name ||
        form.name == "" ||
        !form.email ||
        form.email == "" ||
        !form.password ||
        form.password == ""
      ) {
        setInfoPayload({
          title: "Warning",
          status: "warning",
          message: "Please fill in all fields to create an account",
        });
      }
    } else {
      if (
        !form.email ||
        form.email == "" ||
        !form.password ||
        form.password == ""
      ) {
        setInfoPayload({
          title: "Warning",
          status: "warning",
          message: "Please fill in all fields to login",
        });
      }
    }
  };

  useEffect(() => {
    if (loading) {
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

    
    if (success) {
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
          // else redirect to the page they were trying to access before signup/or login
          // this wont get called if user is signs up successfully...cos
          // account is always not verified after signing up
          // but is user is logging in it can be called if the user logging in is alrady a verified user
          
          showToast({
            title: "Signup successful",
            status: "success"
          })
          redirect(from,  true);
        } else {
          redirect("/auth/verify", true);
        }
      }

      // is user is on the verify page when success is true
      if (current_path === "/auth/verify") {
        // redirect to the page they were trying to access before signup/login
        showToast({
          title: "Signup successful",
          status: "success"
        })
        redirect(from, true );
      }
    }

    if (error) {
      // dispatch the loading overlay action
      console.log("auth error ran");
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
  }, [loading, success, error]);

  useEffect(()=> {
    if (account && account?.verified) {
      console.log("account is verified");
      redirect(location.state.prevPathname, true);
      return;
    } 
  }, [])

  return (
    <Box>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          otp: "",
        }}
        validationSchema={
          (current_path === "/auth" || current_path === "/auth/signup")
            ? signupSchema
            : current_path === "/auth/login"
            ? loginSchema
            : verifySchema
        }
        onSubmit={(values) => {

          console.log("signup values")
          console.log(values)
          if (current_path === "/auth" || current_path === "/auth/signup") {
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
        }}
      >
        {(formik) => (
          <Box as="form" onSubmit={formik.handleSubmit}>
            {/* {props.children} */}
            {children({ checkForm, formik, current_path, changeRoute })}
          </Box>
        )}
      </Formik>
    </Box>
  );
}

export default AuthWrapper;
