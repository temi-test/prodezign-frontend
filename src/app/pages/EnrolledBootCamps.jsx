import { Box, SimpleGrid, Center, Heading } from "@chakra-ui/react";
import React from "react";
import ProdezignFaq from "../components/FaqSection";
import TestimonialSection from "../components/testimonial/TestimonialSection";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/notify/Loading";
import Error from "../components/notify/Error";
import useRedirect from "../hooks/useRedirect";
import { readEnrollments } from "../features/auth/authSlice";
import NotifyComponent from "../components/notify/NotifyComponent";
import CourseItem from "../components/CourseItem";
import CommunitySection from "../components/community/CommunitySection";
import EnrolledItem from "../components/EnrolledItem";

function EnrolledBootCamps() {
  const dispatch = useDispatch();
  const redirect = useRedirect();

  const { token, account, enrollments, enrollments_api } = useSelector(
    (state) => state.auth
  );

  const tryAgain = () => {
    dispatch(
      readEnrollments({
        token: token,
        id: account._id,
      })
    );
  };

  const browseBootcamps = () => {
    redirect("/bootcamps");
  };

  const checkUser = () => {
    let isreturn = false;
    // if token doesent exist redirect user to the auth page
    if (!token) {
      // user is redirected to auth page you need to show a toast that says signin in to continue
      redirect("/auth");
      isreturn = true;
      return isreturn;
    }

    // if token exist but account dosen't exist redirect to the init page
    // the init page will get the account based on the token availale
    if (!account) {
      // get the the token
      redirect("/init");
      isreturn = true;
      return isreturn;
    }
    return isreturn;
  };

  useEffect(() => {
    const isreturn = checkUser();
    console.log("is return is " + isreturn);
    if (!isreturn) {
      if (!enrollments_api.success) {
        // read the whole enrollents
        dispatch(
          readEnrollments({
            token: token,
            id: account._id,
          })
        );
      }
    }
  }, []);

  return (
    <React.Fragment>
      <Box p="0px 100px" pt="50px" mb="-30px">
        <Heading fontWeight="400" >Enrolled Courses</Heading>
      </Box>

      {enrollments_api.loading ? (
        <Center p="100px 0px">
          <Loading />
        </Center>
      ) : null}

      {enrollments_api.error && (
        <Center p="100px 0px">
          <NotifyComponent
            title="Error"
            status="error"
            message={enrollments_api.message}
            location="page"
            tryAgain={tryAgain}
          />
        </Center>
      )}

      {enrollments_api.success && (
        <React.Fragment>
          {enrollments.length < 1 ? (
            <Center p="50px 0px">
              {/* show the empty here */}
              <NotifyComponent
                title="Empty"
                status="empty"
                message={enrollments_api.message}
                location="page"
                tryAgain={browseBootcamps}
                btnText="Get Started"
              />
            </Center>
          ) : (
            <Box p="100px 100px">
              <SimpleGrid columns={3} spacing={5} spacingY={2}>
                {enrollments.map((item) => (
                  <EnrolledItem key={item._id} payload={item.bootcamp_id} />
                  
                ))}
              </SimpleGrid>
            </Box>
          )}
          <TestimonialSection />
          <CommunitySection />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default EnrolledBootCamps;
