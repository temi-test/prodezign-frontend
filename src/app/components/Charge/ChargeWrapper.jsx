import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import { cloneDeep } from "lodash";

import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setOverlay } from "../../features/overlay/overlaySlice";
import useRedirect from "../../hooks/useRedirect";
import useToast from "../../hooks/useToast";

function ChargeWrapper({ children }) {
  const dispatch = useDispatch();
  //   const redirect = useRedirect()
  //   const showToast = useToast()

  const { current_view, account, token, loading, error, success, message } =
    useSelector((state) => state.auth);

  const location = useLocation();
  const current_path = location.pathname;

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

  return (
    <Box w="70%">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          otp: "",
        }}
        validationSchema={
          current_path === "/auth" || current_path === "/auth/signup"
            ? signupSchema
            : current_path === "/auth/login"
            ? loginSchema
            : verifySchema
        }
        onSubmit={(values) => {}}
      >
        {(formik) => (
          <Box as="form" onSubmit={formik.handleSubmit}>
            {children({ checkForm, formik, current_path })}
          </Box>
        )}
      </Formik>
    </Box>
  );
}

export default ChargeWrapper;
