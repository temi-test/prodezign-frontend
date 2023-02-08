import { Box, Button, Center, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
// import SaveButton from "../button/SaveButton";
import FormError from "../forms/FormError";
import CustomInputField from "../forms/CustomInputField";
import TitleHeadings from "../headings/TitleHeadings";
import { useState } from "react";

function SignupLoginLg({ checkForm, formik, current_path, changeRoute }) {

  const [title, setTitle] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  useEffect(() => {
    if (current_path === "/auth" || current_path === "/auth/signup") {
      setTitle("Signup");
      setIsSignup(true);
    }else{
      setTitle("Login")
      setIsSignup(false);
    }
  }, [current_path]);

  return (
    <Center h="100vh">
      <Box w="50%" textAlign="start">
        <TitleHeadings title={title} mb="10px" />
        <Text mb="50px">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,
          consequatur.
        </Text>

        <FormError
          error={false}
          // message={form_error.message}
          // setFormError={changeFormError}
        />
        {isSignup && (
          <CustomInputField
            type="text"
            name="name"
            label="Full Name"
            placeholder="Enter Full Name"
          />
        )}

        <CustomInputField
          type="text"
          name="email"
          label="Email"
          placeholder="Enter Email address"
        />

        <CustomInputField
          type="password"
          name="password"
          label="Password"
          placeholder="Enter Password"
        />

        <Button
          text={current_path == "signup" ? "Create Account" : "Login"}
          width="100%"
          size="md"
          mt="10px"
          formik={formik}
          type="submit"
          handleClick={(formik) => {
            checkForm(formik);
          }}
        >
          {current_path === "/auth/signup" ? "Create Account" : "Login"}
        </Button>

        <Text mt="10px" onClick={changeRoute}>
          {current_path === "/auth/signup"
            ? "Already a member? Login"
            : "Don't have an account ? Signup here"}
        </Text>
      </Box>
    </Center>
  );
}

export default SignupLoginLg;
