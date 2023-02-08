import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";


import lottieEmpty from "../lottie/empty-6.json";
import Required from "../components/notify/Required";

import TeamItem from "../components/TeamItem";

import WorksSection from "../components/WorksSection";
import TestimonialSection from "../components/testimonial/TestimonialSection";
import TestimonialVideoItem from "../components/testimonial/TestimonialVideoItem";
import CourseItem from "../components/CourseItem";
import Footer from "../components/navigation/Footer";
import ProdezignFaq from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection"
import TeamSection from "../components/TeamSection";
import TestimonialTextItem from "../components/testimonial/TestimonialTextItem";
import TestimonialTextSection from "../components/testimonial/TestimonialTextSection";
import TestimonialVideoSection from "../components/testimonial/TestimonialVideoSection";
import CommunitySection from "../components/community/CommunitySection";

function Works() {
  return (
    <React.Fragment>
      <Flex
        textAlign="center"
        justifyContent="center"
        flexDir="column"
        alignItems="center"
        p="50px 0px"
        bg="#fafafa"
      >
        <Required lottieJson={lottieEmpty} lottie_height="300px" />
        <Heading mb="20px" size="2xl">
          Learn from Creative Experts
        </Heading>
        <Text w="50%" fontSize="20px">
          Skillshare classes are taught by industry leaders excited to share
          their tools, techniques, and professional journeys with you.
        </Text>
      </Flex>

      <WorksSection />

      <ServicesSection/>

      <ProdezignFaq />

      <TestimonialSection />

      <CommunitySection />

   
    </React.Fragment>
  );
}

export default Works;
