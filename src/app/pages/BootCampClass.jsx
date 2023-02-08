import {
  Box,
  Flex,
  Icon,
  Grid,
  Heading,
  Text,
  Center,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleBootcamp,
  setCurrentBootcamp,
  setGetBootcampApi,
} from "../features/bootcamp/bootcampSlice";
import Loading from "../components/notify/Loading";
import Error from "../components/notify/Error";
import { useParams } from "react-router-dom";
import useRedirect from "../hooks/useRedirect";
import { useState } from "react";
import { cloneDeep } from "lodash";
import CommunitySection from "../components/community/CommunitySection";

function BootCampClass() {
  const dispatch = useDispatch();
  const redirect = useRedirect();

  /// Note variable name here must be the same woth variable
  /// used in the route parameters
  let { id } = useParams();

  const { bootcamp_api, current_bootcamp } = useSelector(
    (state) => state.bootcamp
  );
  const { token, account, enrollments } = useSelector((state) => state.auth);

  const [viewedBootcamp, setViewedBootcamp] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const tryAgain = () => {
    dispatch(getSingleBootcamp(id));
  };

  const checkSignedin = () => {
    //IF USER IS NOT SIGNED IN USER CANNOT ACCESS THIS PAGE

    // if no token is present....go to the auth page to signin
    if (!token) {
      console.log("token is null");
      redirect("/auth");
      return;
    }

    // if token is present and account is not present
    // then you auto signin based on the token
    if (!account) {
      // get the the token
      // dispatch(readUser(token));
      redirect("/init");
      return;
    }
  };

  const checkEnroll = () => {
    let index = enrollments.map((item) => item._id).indexOf(id);
    if (index >= 0) {
      // redirect to the the class for this bootcamp
      return redirect("/bootcamp/" + id + "/class");
    }
    // redirect to the payment
    redirect("/bootcamp/" + id + "/enroll");
    // if user token exist....check if user is signed in or not
    // if user not signed in then sign user in based on the token
    // if token is malformed or matches no account navigate to the auth for the user to login
    // if login is successful then check if the course in part of the users courses
    // if it is then move to the bootcamp training page else move to the payment page
  };

  const initClass = () => {
    /// get the current bootcamp from the array of bootcamps
    /// if it exits display it here
    // if not then request from server again.....means user probably went through the url route
    let index = enrollments.map((item) => item._id).indexOf(id);
    if (index < 0) {
      /// dispatch to get details from server
      console.log("getting current bootcamp from server");
      dispatch(getSingleBootcamp(id));
    } else {
      console.log("getting current bootcamp from state");
      let item = cloneDeep(enrollments[index]);
      setViewedBootcamp(item);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) {
      // id dosent exist
      // navigate to the 404 page
      redirect("/404");
      return;
    }

    // if id exist, then check if the user is signed in to be able to access this class in the first place
    checkSignedin();

    // after signup check if user has enrolled inthe class or not
    checkEnroll();

    //  if user is enrolled in the bootcamp class then....intialize the bootcamp class so the
    // class info can be visiblel on the ui for the user
    initClass();
  }, []);

  useEffect(() => {
    console.log("read single effect");
    // If success while reading the product details from server
    // update the ui states
    if (bootcamp_api.loading === true) {
      setLoading(true);
      setViewedBootcamp(null);
      setError(false);
    }

    // If success while reding the product details from server
    // update the ui states
    if (bootcamp_api.success === true) {
      setViewedBootcamp(current_bootcamp);
      setLoading(false);
      setError(false);
      dispatch(setGetBootcampApi(true));
      dispatch(setCurrentBootcamp(true));
    }

    // if error while reding the product details from server
    // update the ui states
    if (bootcamp_api.error === true) {
      setError(true);
      setLoading(false);
      setViewedBootcamp(null);
    }
  }, [bootcamp_api]);

  return (
    <React.Fragment>
      {loading ? (
        <Center minH="100vh">
          <Loading />
        </Center>
      ) : null}

      {error && (
        <Center minH="100vh">
          <Error tryAgain={tryAgain} />
        </Center>
      )}

      {viewedBootcamp && (
        <Box minH="100vh" p="50px 50px">
          <Heading fontSize="25px" fontWeight="400" w="90%" mb="20px">
            {viewedBootcamp.name}
          </Heading>
          <Grid templateColumns="3fr 330px" gridColumnGap={2}>
            <Box>
              <Box h="500px" w="100%" bg="gray.200" borderRadius="15px"></Box>
            </Box>

            <Box w="100%" p="10px" minH="100vh">
              <Select mb="20px">
                <option value="">Week One</option>
                <option value="">Week Two</option>
                <option value="">Week Three</option>
                <option value="">Week Four</option>
                <option value="">Week Five</option>
                <option value="">Week Six</option>
                <option value="">Week Seven</option>
                <option value="">Week Eight</option>
                <option value="">Week Nine</option>
                <option value="">Week Ten</option>
                <option value="">Week Eleven</option>
              </Select>

              <React.Fragment>
                <Heading size="md" mb="20px">
                  Description
                </Heading>
                <Text mb="30px">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  dolorem sed autem! Porro inventore nemo odit ipsam obcaecati
                  neque expedita!
                </Text>
              </React.Fragment>

              <React.Fragment>
                <Heading size="md" mb="20px">
                  Content
                </Heading>
                <Flex mb="20px">
                  <Icon as={FaPlayCircle} me="10px" mt="8px" />
                  <Text>Introduction to web development in html and css</Text>
                </Flex>
                <Flex mb="20px">
                  <Icon as={FaPlayCircle} me="10px" mt="6px" />
                  <Text>Introduction to web development in html and css</Text>
                </Flex>
                <Flex mb="20px">
                  <Icon as={FaPlayCircle} me="10px" mt="6px" />
                  <Text>Introduction to web development in html and css</Text>
                </Flex>
                <Flex mb="20px">
                  <Icon as={FaPlayCircle} me="10px" mt="6px" />
                  <Text>Introduction to web development in html and css</Text>
                </Flex>
                <Flex mb="20px">
                  <Icon as={FaPlayCircle} me="10px" mt="6px" />
                  <Text>Introduction to web development in html and css</Text>
                </Flex>
              </React.Fragment>
            </Box>

            {/* <Heading size="lg" mb="30px" mt="50px">
          Week One
        </Heading>
        <Text fontSize="24px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          reiciendis harum earum nisi veritatis cum ullam quos enim est
          temporibus eveniet commodi cumque, repudiandae, blanditiis quaerat
          molestias. Ratione, nostrum perspiciatis?
        </Text> */}
          </Grid>
        </Box>
      )}

      <CommunitySection />
    </React.Fragment>
  );
}

export default BootCampClass;
