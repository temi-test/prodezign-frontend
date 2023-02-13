import { Box, Button, Center, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
// import SaveButton from "../button/SaveButton";
import FormError from "../forms/FormError";
import CustomInputField from "../forms/CustomInputField";
import TitleHeadings from "../headings/TitleHeadings";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FiLock, FiMail } from "react-icons/fi";

function SignupLoginLg() {
  const { changeRoute, form_content, form_error, changeFormError } = useAuth();

  return (
    <Center h="100vh">
      <Box w="50%" textAlign="start">
        <TitleHeadings title={form_content?.title} mb="10px" />
        <Text mb="50px">{form_content?.message}</Text>

        <FormError
          error={form_error.error}
          message={form_error.message}
          setFormError={changeFormError}
        />

        {form_content.current === "signup" && (
          <CustomInputField
            type="text"
            name="name"
            label="Full Name"
            placeholder="Enter Full Name"
            icon={<FiMail />}
          />
        )}

        <CustomInputField
          type="text"
          name="email"
          label="Email"
          placeholder="Enter Email address"
          icon={<FiMail />}
          padding="0px 40px"
        />

        <CustomInputField
          type="password"
          name="password"
          label="Password"
          placeholder="Enter Password"
          icon={<FiLock />}
          padding="0px 40px"
        />

        <Button
          width="100%"
          size="md"
          mt="10px"
          type="submit"
          onClick={() => {
            // checkForm(formik);
          }}
        >
          {form_content?.button}
        </Button>

        <Text mt="10px" onClick={changeRoute} cursor="pointer">
          {form_content?.footer}
        </Text>
      </Box>
    </Center>
  );
}

export default SignupLoginLg;
