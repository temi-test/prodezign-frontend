import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Formik } from "formik";
import useAuth from "../../hooks/useAuth";

function AuthWrapper({ children }) {
  const { runAuth, current_schema } = useAuth("afweag");

  // useEffect(()=> {
  //   if (account && account?.verified) {
  //     console.log("account is verified");
  //     redirect(location.state.prevPathname, true);
  //     return;
  //   }
  // }, [])
  return (
    <Box>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          otp: "",
        }}
        validationSchema={current_schema}
        onSubmit={(values) => {
          runAuth(values);
        }}
      >
        {(formik) => (
          <Box as="form" onSubmit={formik.handleSubmit}>
            {/* {props.children} */}
            {/* {children({ checkForm, formik, current_path, changeRoute })} */}
            {children({})}
          </Box>
        )}
      </Formik>
    </Box>
  );
}

export default AuthWrapper;
