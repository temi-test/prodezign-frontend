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
  Tabs,
  TabPanels,
} from "@chakra-ui/react";
import React from "react";
import FaqSection from "../components/FaqSection";
import Footer from "../components/navigation/Footer";
import TestimonialSection from "../components/testimonial/TestimonialSection";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBootcamp,
  setGetBootcampApi,
} from "../features/bootcamp/bootcampSlice";
import Loading from "../components/notify/Loading";
import Error from "../components/notify/Error";
import CommunitySection from "../components/community/CommunitySection";
import BootcampSection from "../components/bootcamps.jsx/BootcampSection";
import BootcampIntro from "../components/bootcamps.jsx/BootcampIntro";

function BootCamps() {
  const dispatch = useDispatch();
  const { bootcamp_api, bootcamps, filtered_bootcamps } = useSelector(
    (state) => state.bootcamp
  );

  const tryAgain = () => {
    dispatch(getBootcamp(""));
  };

  useEffect(() => {
    console.log();
    if (!bootcamp_api.loading) {
      // only get the transactions if there is no data there
      // this saves users data and reduces unncessary network request
      if (bootcamps.length < 7) {
        dispatch(getBootcamp(""));
      } else {
        // set the transactions api to success by default
        dispatch(
          setGetBootcampApi({
            success: true,
            error: false,
            loading: false,
            message: "",
          })
        );
      }
    }
  }, []);

  return (
    <React.Fragment>
      {bootcamp_api.loading ? (
        <Center minH="100vh">
          <Loading />
        </Center>
      ) : null}

      {bootcamp_api.error && (
        <Center minH="100vh">
          <Error tryAgain={tryAgain} />
        </Center>
      )}

      {bootcamp_api.success && (
        <React.Fragment>
          {/* Intro Section */}
          <BootcampIntro />

          <BootcampSection
            list={bootcamps}
            filtered_list={filtered_bootcamps}
          />

          <FaqSection />
          <TestimonialSection />
          <CommunitySection />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default BootCamps;
