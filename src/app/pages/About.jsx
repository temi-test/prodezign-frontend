import {
  Box,
  Button,
  Flex,
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
import React from "react";

import lottieEmpty from "../lottie/empty-6.json";
import Required from "../components/notify/Required";

import TeamItem from "../components/TeamItem";

import TestimonialSection from "../components/testimonial/TestimonialSection";
import ProdezignFaq from "../components/FaqSection";
import TeamSection from "../components/TeamSection";
import CommunitySection from "../components/community/CommunitySection";
import ServicesSection from "../components/ServicesSection";
import GoalsSection from "../components/GoalsSection";

function About() {
  return (
    <React.Fragment>
      <Flex
        textAlign="center"
        justifyContent="center"
        flexDir="column"
        alignItems="center"
        pt="50px"
        pb="100px"
        bg="#fafafa"
      >
        <Required lottieJson={lottieEmpty} lottie_height="300px" />
        <Heading mb="20px" size="2xl">
          About Prodezigns
        </Heading>
        <Text w="50%" fontSize="20px">
          Skillshare classes are taught by industry leaders excited to share
          their tools, techniques, and professional journeys with you.
        </Text>
      </Flex>

      <ServicesSection />

      <GoalsSection />
    
      <TeamSection />

      <ProdezignFaq />

      <TestimonialSection />

      <CommunitySection />
    </React.Fragment>
  );
}

export default About;
