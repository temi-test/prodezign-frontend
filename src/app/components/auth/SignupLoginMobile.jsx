import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import CustomInputField from "../forms/CustomInputField";
import TitleHeadings from "../headings/TitleHeadings";
import LottieAnim from "../notify/LottieAnim";

import LoginAnim from "../../lottie/payment-failed-1.json";
import SignupAnim from "../../lottie/payment-failed-1.json";

import FormError from "../forms/FormError";

function SignupLoginMobile({
  changeCurrentView,
  checkForm,
  formik,
  current_path,
}) {
  const { current_view } = useSelector((state) => state.auth);

  return (
    <Box pos="" overflowX="scroll" w="100%">
      {/* <LottieAnim
        lottieJson={current_view == "signup" ? LoginAnim : SignupAnim}
        mt="-30px"
        mb="10px"
      />

      <Box
        bg="#f5f5f5"
        w="100%"
        p="25px 20px"
        borderRightRadius="20px"
        borderLeftRadius="20px"
      >
        <TitleHeadings
          title={current_view == "signup" ? "Signup" : "Login"}
          size="20px"
          mb="20px"
          text_align="center"
        />

        <FormError
          error={true}
          // message={form_error.message}
          // setFormError={changeFormError}
        />

        {(current_path == "/auth" || current_path == "/auth/register") && (
          <CustomInputField
            type="text"
            name="name"
            label="Full Name"
            bg="white"
            placeholder="Enter Full Name"
          />
        )}

        <CustomInputField
          type="text"
          name="email"
          label="Email"
          placeholder="Enter Email address"
          bg="white"
        />

        <CustomInputField
          type="password"
          name="password"
          label="Password"
          placeholder="Enter Password"
          bg="white"
        />

        <SaveButton
          text={current_view == "signup" ? "Create Account" : "Login"}
          width="100%"
          size="md"
          mt="10px"
          formik={formik}
          handleClick={checkForm}
        />

        <Flex
          mt="20px"
          cursor="pointer"
          onClick={() => {
            changeCurrentView(formik);
          }}
        >
          <TitleHeadings
            title={
              current_view == "login"
                ? "Don't have an account?"
                : "Already have an account?"
            }
            size="16px"
            weight="400"
          />
          <TitleHeadings
            title={current_view == "login" ? "Signup here" : "Login here"}
            size="16px"
            weight="600"
            color="pink.500"
          />
        </Flex>
      </Box> */}
    </Box>
  );
}

export default SignupLoginMobile;
