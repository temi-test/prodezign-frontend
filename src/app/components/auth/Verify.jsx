import React, { useEffect } from "react";
import { Box, Button, Center } from "@chakra-ui/react";

import { Formik, useFormik } from "formik";
import * as Yup from "yup";

import {} from "react-icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verify, reset } from "../../features/auth/authSlice";
import LottieAnim from "../notify/LottieAnim";
import lottieVerify from "../../lottie/verify-otp.json";
import TitleHeadings from "../headings/TitleHeadings";
import InfoToast from "../toast/InfoToast";
import FormError from "../forms/FormError";
import CustomInputField from "../forms/CustomInputField";
import AnimatedPage from "../../pages/AnimatedPage";
import { useMediaQuery } from "react-responsive";
import AuthWrapper from "./AuthWrapper";

function Verify({ info_payload }) {
  const screenLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const screenLaptopLg = useMediaQuery({ query: "(min-width: 1300px)" });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });

  return (
    <React.Fragment>
      <AuthWrapper>
        {({ formik, current_path, changeRoute, checkForm }) => (
          <React.Fragment>
            <InfoToast payload={info_payload} />

            <Center h="100vh" p="0px 10px">
              <Box
                w={
                  screenLaptop || screenLaptopLg || isBigScreen ? "40%" : "100%"
                }
              >
                <LottieAnim
                  lottieJson={lottieVerify}
                  mt="-100px"
                  height="250px"
                />
                <Box textAlign="center" mt="-40px" mb="20px">
                  <TitleHeadings
                    size="20px"
                    title="Verify Your Email"
                    mb="20px"
                  />

                  <TitleHeadings
                    title="Didn't receive the otp in your email? Click here to resend"
                    size="16px"
                    weight="400"
                    textAlign="center"
                    mb="0px"
                  />
                </Box>

                {/* <FormError
      error={form_error.error}
      message={form_error.message}
      setFormError={changeFormError}
    /> */}
                <CustomInputField
                  type="text"
                  name="otp"
                  placeholder="Enter OTP Here"
                />

                <Button
                  width="100%"
                  size="md"
                  mt="12px"
                  type="submit"
                  onclick={() => {
                    checkForm(formik);
                  }}
                >
                  Verify
                </Button>
              </Box>
            </Center>
          </React.Fragment>
        )}
      </AuthWrapper>
    </React.Fragment>
  );
}

export default Verify;
