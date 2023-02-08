import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import CommunityItem from "./CommunityItem";
import {
  FaSlackHash,
  FaSlack,
  FaFacebookSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
  FaFacebook,
} from "react-icons/fa";

function CommunitySection() {
  return (
    <Box p="50px 100px">
      <Heading w="50%" mb="25px">
        Join Our Community
      </Heading>

      <Text fontSize="20px" w="50%" mb="25px">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
        deserunt molestiae iste voluptas quod libero blanditiis enim excepturi
        sed eligendi.
      </Text>

      <SimpleGrid columns={4} spacingX={5}>
        <CommunityItem
          icon={FaSlack}
          title="Slack"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, neque!"
          btnText="Join"
        />
        <CommunityItem
          icon={FaFacebookSquare}
          title="Facebook"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, neque!"
          btnText="Connect"
        />
        <CommunityItem
          icon={FaTwitterSquare}
          title="Twitter"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, neque!"
          btnText="Follow"
        />
        <CommunityItem
          icon={FaYoutubeSquare}
          title="Youtube"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, neque!"
          btnText="Subscribe"
        />
      </SimpleGrid>
    </Box>
  );
}

export default CommunitySection;
