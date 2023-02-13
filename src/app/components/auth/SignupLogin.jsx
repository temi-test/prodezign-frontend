import React from "react";
import SignLoginMobile from "./SignupLoginMobile";
import SignupLoginLg from "./SignupLoginLg";
import AuthWrapper from "./AuthWrapper";
import { useMediaQuery } from "@chakra-ui/react";


function SignupLogin() {
  const screenLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const screenLaptopLg = useMediaQuery({ query: "(min-width: 1300px)" });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });

  return (
    <React.Fragment>
      <AuthWrapper>
        {({ formik }) => (
          <React.Fragment>
            {screenLaptop || screenLaptopLg || isBigScreen ? (
              <SignupLoginLg formik={formik} />
            ) : (
              <SignLoginMobile formik={formik} />
            )}
          </React.Fragment>
        )}
      </AuthWrapper>
    </React.Fragment>
  );
}

export default SignupLogin;
