import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import CourseItem from "../components/CourseItem";
import Footer from "../components/navigation/Footer";
import FaqSection from "../components/FaqSection";
import TeamSection from "../components/TeamSection";
import { useDispatch, useSelector } from "react-redux";
import {
  getBootcamp,
  setGetBootcampApi,
} from "../features/bootcamp/bootcampSlice";

import Loading from "../components/notify/Loading";
import Error from "../components/notify/Error";
import TestimonialSection from "../components/testimonial/TestimonialSection";
import CommunitySection from "../components/community/CommunitySection";
import GoalsSection from "../components/GoalsSection";
import ServicesSection from "../components/ServicesSection";
import p3 from "../images/p3.jpg";
import Typewriter from "../components/Typewriter";
import NotifyComponent from "../components/notify/NotifyComponent";
import BootcampSection from "../components/bootcamps.jsx/BootcampSection";

function Home() {
  const dispatch = useDispatch();

  const { bootcamp_api, bootcamps, filtered_bootcamps } = useSelector(
    (state) => state.bootcamp
  );

  const tryAgain = () => {
    dispatch(getBootcamp(""));
  };

  useEffect(() => {
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
          <NotifyComponent
            title="Error"
            status="error"
            message="There was an error while getting the resurce. Please try again"
            location="page"
            tryAgain={tryAgain}
          />
        </Center>
      )}

      {bootcamp_api.success && (
        <React.Fragment>
          <Box bg="#fafafa" p="100px 100px">
            <Grid gridTemplateColumns="1fr 550px">
              <Box>
                <Box>
                  <Heading fontSize="60px">Change your life</Heading>
                  <Typewriter
                    fontSize="60px"
                    text={[
                      "tech skills live",
                      "coding",
                      "product design",
                      "UI/IX",
                      "grahics design",
                    ]}
                  />
                </Box>

                <Flex mb="40px" mt="30px">
                  <Button bg="black" color="white" me="10px" size="lg">
                    Live Bootcamps
                  </Button>
                  <Button variant="outline" borderColor="black" size="lg">
                    Video Classes
                  </Button>
                </Flex>

                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt dolorem veniam quam mollitia! Error ducimus
                  voluptatibus iste provident illum, molestias beatae dolorum
                  mollitia, quibusdam quis iusto, dolores saepe aperiam ullam!
                </Text>
              </Box>
              <Box pt="120px" ps="30px">
                <Image
                  bg="pink.500"
                  h="400px"
                  w="100%"
                  borderRadius="10px"
                  src={p3}
                  objectFit="cover"
                />
              </Box>
            </Grid>
            {/* <SimpleGrid columns={2}>
              <Box
                // p="220px 0px"
                pe="50px"
              >
                <Image
                  h="400px"
                  w="100%"
                  bg="pink.500"
                  borderRadius="20px"
                  objectFit="cover"
                ></Image>
              </Box>
              <Box pt="120px">
                <Heading fontSize="65px" w="99%" mb="30px">
                  Change your life, learn tech skill live
                </Heading>

                <Flex mb="40px">
                  <Button bg="black" color="white" me="10px" size="lg">
                    Live Bootcamps
                  </Button>
                  <Button variant="outline" borderColor="black" size="lg">
                    Video Classes
                  </Button>
                </Flex>

                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt dolorem veniam quam mollitia! Error ducimus
                  voluptatibus iste provident illum, molestias beatae dolorum
                  mollitia, quibusdam quis iusto, dolores saepe aperiam ullam!
                </Text>
              </Box>
            </SimpleGrid> */}
          </Box>

          <BootcampSection
            list={bootcamps}
            filtered_list={filtered_bootcamps}
          />

          <ServicesSection />

          <FaqSection />

          <GoalsSection />

          <TeamSection />
          <TestimonialSection />
          <CommunitySection />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Home;
