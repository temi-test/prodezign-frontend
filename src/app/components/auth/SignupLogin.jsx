import React, { useEffect, useState } from "react";
import SignLoginMobile from "./SignupLoginMobile";
import SignupLoginLg from "./SignupLoginLg";
import AuthWrapper from "./AuthWrapper";
import { useMediaQuery } from "@chakra-ui/react";

function SignupLogin() {

  const screenMobileSm = useMediaQuery({ query: "(min-device-width: 0px)" });
  const screenMobileMd = useMediaQuery({ query: "(min-device-width: 375px)" });
  const screenMobileLg = useMediaQuery({ query: "(min-device-width: 425px)" });
  const screenTablet = useMediaQuery({ query: "(min-width: 768px)" });

  const screenLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const screenLaptopLg = useMediaQuery({ query: "(min-width: 1300px)" });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });

  return (
    <React.Fragment>
      <AuthWrapper>
        {({ formik, current_path, changeRoute, checkForm }) => (
          <React.Fragment>
            {screenLaptop || screenLaptopLg || isBigScreen ? (
              <SignupLoginLg
                formik={formik}
                checkForm={checkForm}
                changeRoute={changeRoute}
                current_path={current_path}
              />
            ) : (
              <SignLoginMobile
                formik={formik}
                checkForm={checkForm}
                current_path={current_path}
                changeRoute={changeRoute}
              />
            )}
          </React.Fragment>
        )}
      </AuthWrapper>
    </React.Fragment>
  );
}

export default SignupLogin;
