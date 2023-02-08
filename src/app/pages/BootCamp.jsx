import {
  Accordion,
  Box,
  Button,
  Flex,
  Icon,
  Grid,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Center,
} from "@chakra-ui/react";
import React from "react";
import AccordionItem from "../components/AccordionItem";
import Divider from "../components/Divider";
import ProdezignFaq from "../components/FaqSection";
import Footer from "../components/navigation/Footer";
import TestimonialSection from "../components/testimonial/TestimonialSection";
import WorksSection from "../components/WorksSection";
import { FaCheck } from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBootcamp,
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
import p10 from "../images/p10.jpg";
import p8 from "../images/p8.jpg";
import p6 from "../images/p6.jpg";
import p3 from "../images/p3.jpg";
import p4 from "../images/p4.jpg";
import p5 from "../images/p5.jpg";

function BootCamp() {
  const dispatch = useDispatch();
  const redirect = useRedirect();

  /// Note variable name here must be the same woth variable
  /// used in the route parameters
  let { id } = useParams();

  const { bootcamp_api, bootcamps, current_bootcamp } = useSelector(
    (state) => state.bootcamp
  );
  const { token, account, enrollments } = useSelector((state) => state.auth);

  const [viewedBootcamp, setViewedBootcamp] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const tryAgain = () => {
    dispatch(getSingleBootcamp(id));
  };

  const checkEnroll = () => {
    if (!token) {
      console.log("token is null");
      redirect("/auth");
      return;
    }

    if (!account) {
      // get the the token
      // dispatch(readUser(token));
      redirect("/init");
      return;
    }

    let index = enrollments.map((item) => item._id).indexOf(id);
    if (index >= 0) {
      // redirect to the the class for this bootcamp
      redirect("/bootcamps/" + id + "/class");
      return;
    }
    // redirect to the payment
    redirect("/bootcamps/" + id + "/enroll");
    return;
    // if user token exist....check if user is signed in or not
    // if user not signed in then sign user in based on the token
    // if token is malformed or matches no account navigate to the auth for the user to login
    // if login is successful then check if the course in part of the users courses
    // if it is then move to the bootcamp training page else move to the payment page
  };

  useEffect(() => {
    /// get the current product from the array of products
    /// if it exits display it here
    // if not then request from server again.....means user probably went through the url route
    let index = bootcamps.map((item) => item._id).indexOf(id);
    if (index < 0) {
      /// dispatch to get details from server
      console.log("getting current bootcamp from server");
      dispatch(getSingleBootcamp(id));
    } else {
      console.log("getting current bootcamp from state");
      let item = cloneDeep(bootcamps[index]);
      setViewedBootcamp(item);
      setLoading(false);
    }
  }, [id]);

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
        <React.Fragment>
          <Box p="100px 100px">
            <SimpleGrid columns={2}>
              <Box textAlign="start" pt="50px">
                <Heading fontSize="40px" pos="sticky" top="50px">UI/UX Design Bootcamp</Heading>
                <Text mt="20px" w="90%" fontSize="18px" fontWeight="400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, dolores. Ratione sint cumque nisi molestias repellendus
                  similique fugiat nobis necessitatibus?
                </Text>
                <Button
                  bg="black"
                  color="white"
                  size="lg"
                  mt="20px"
                  onClick={() => {
                    checkEnroll();
                  }}
                >
                  Enroll Now
                </Button>
              </Box>

              <Image top="0px" position="sticky"  bg="pink.500" h="400px" w="100%" borderRadius="10px" src={p3} objectFit="cover" />
            </SimpleGrid>
          </Box>

          <Box p="100px 100px" overflow="visible">
            <Grid templateColumns="350px 1fr" gridColumnGap={10}>
              <Box
                textAlign="start"
                pt="50px"
                overflow="visible"
                bg="red.100"
                h="600px"
                top="20px"
                pos="sticky"
              >
                {" "}
              </Box>

              <Box>
                <Box mb="50px">
                  <Heading mb="20px">
                    Change your life, become a UX/UI Designer
                  </Heading>
                  <Text mb="20px">
                    Learn the skills of a UX/UI Designer with a micro class
                    around the world. Complete case studies, join live online
                    classes in Figma and publish your job-ready UX/UI Design
                    Portfolio during our live UX/UI Design Bootcamp.
                  </Text>
                  <Image
                    bg="pink.500"
                    h="400px"
                    w="100%"
                    objectFit="cover"
                    src={p10}
                    borderRadius="10px"
                  />
                </Box>

                <Divider />

                <Box mb="50px">
                  <Heading mb="20px">Simple, transparent pricing</Heading>
                  <Text mb="20px">
                    Unlike other courses who tuck away their prices, we are
                    totally transparent with our online Bootcamp pricing and
                    take pride in being accessible and affordable.
                  </Text>

                  <SimpleGrid
                    columns={2}
                    spacing={5}
                    spacingY={6}
                    p="20px"
                    borderRadius="10px"
                    bg="#f5f5f5"
                    borderWidth={2}
                    mb="20px"
                  >
                    <Flex>
                      <Icon as={FaCheck} me="10px" mt="5px" />
                      <Text>
                        Build 16 portfolio projects, ready to apply for junior
                        developers jobs
                      </Text>
                    </Flex>
                    <Flex>
                      <Icon as={FaCheck} me="10px" mt="5px" />
                      <Text>
                        Build 16 portfolio projects, ready to apply for junior
                        developers jobs
                      </Text>
                    </Flex>
                    <Flex>
                      <Icon as={FaCheck} me="10px" mt="5px" />
                      <Text>
                        Build 16 portfolio projects, ready to apply for junior
                        developers jobs
                      </Text>
                    </Flex>
                    <Flex>
                      <Icon as={FaCheck} me="10px" mt="5px" />
                      <Text>
                        Build 16 portfolio projects, ready to apply for junior
                        developers jobs
                      </Text>
                    </Flex>
                    <Flex>
                      <Icon as={FaCheck} me="10px" mt="5px" />
                      <Text>
                        Build 16 portfolio projects, ready to apply for junior
                        developers jobs
                      </Text>
                    </Flex>
                  </SimpleGrid>

                  <Button
                    bg="black"
                    color="white"
                    size="lg"
                    onClick={() => {
                      checkEnroll();
                    }}
                  >
                    Enroll Now
                  </Button>
                </Box>

                <Divider />

                <Box mb="50px">
                  <Heading mb="20px">Learn-by doing with live classes</Heading>
                  <Text mb="20px">
                    Our Bootcamp is setup to make you learn UX/UI step by step
                    with a practical curriculum that focuses 100% on
                    learn-by-doing. Unlike a lotta UX/UI courses who teach the
                    same powerpoint heavy curriculum for years, our Bootcamp
                    teaches you the latest tools, workflows, and best practices
                    live.
                  </Text>

                  <Accordion allowToggle>
                    <AccordionItem />
                    <AccordionItem />
                    <AccordionItem />
                    <AccordionItem />
                    <AccordionItem />
                  </Accordion>
                </Box>

                <Divider />

                <Box mb="50px">
                  <Heading mb="20px">Hands On Projects</Heading>
                  <Text mb="20px">
                    Our Bootcamp is setup to make you learn UX/UI step by step
                    with a practical curriculum that focuses 100% on
                    learn-by-doing. Unlike a lotta UX/UI courses who teach the
                    same powerpoint heavy curriculum for years, our Bootcamp
                    teaches you the latest tools, workflows, and best practices
                    live.
                  </Text>

                  <Accordion allowToggle>
                    <AccordionItem />
                    <AccordionItem />
                    <AccordionItem />
                    <AccordionItem />
                    <AccordionItem />
                  </Accordion>
                </Box>

                <SimpleGrid columns={3} spacing={5}>
                  <Image
                    w="100%"
                    h="200px"
                    borderRadius="10px"
                    bg="pink.500"
                    objectFit="cover"
                    src={p3}
                  />
                  <Image
                    w="100%"
                    h="200px"
                    borderRadius="10px"
                    bg="pink.500"
                    src={p4}
                    objectFit="cover"
                  />
                  <Image
                    w="100%"
                    h="200px"
                    borderRadius="10px"
                    bg="pink.500"
                    objectFit="cover"
                    src={p5}
                  />
                  <Image
                    w="100%"
                    h="200px"
                    borderRadius="10px"
                    bg="pink.500"
                    objectFit="cover"
                    src={p6}
                  />
                  <Image
                    w="100%"
                    h="200px"
                    borderRadius="10px"
                    bg="pink.500"
                    objectFit="cover"
                    src={p8}
                  />
                </SimpleGrid>

                <Divider />

                <Box mb="50px">
                  <Heading mb="20px">Simple, transparent pricing</Heading>
                  <Text mb="20px">
                    Unlike other courses who tuck away their prices, we are
                    totally transparent with our online Bootcamp pricing and
                    take pride in being accessible and affordable.
                  </Text>

                  <Box
                    p="20px"
                    borderRadius="10px"
                    bg="#f5f5f5"
                    borderWidth={2}
                  >
                    <Heading mb="20px">$ 800</Heading>
                    <Heading size="sm" mb="25px">
                      Total Price
                    </Heading>

                    <Text mb="25px">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis architecto maxime nemo excepturi voluptatem
                      molestiae eius non rerum sequi, cum neque vero, nam eum
                      adipisci.
                    </Text>

                    <Button
                      bg="black"
                      color="white"
                      size="lg"
                      onClick={() => {
                        checkEnroll();
                      }}
                    >
                      Enroll Now
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Box>

          <ProdezignFaq />

          <TestimonialSection />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default BootCamp;
