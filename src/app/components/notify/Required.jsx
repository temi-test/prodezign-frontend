import React, { useRef, useEffect } from "react";
import {
  Box,
  Icon,
  Button,
  Image,
  Text,
  Heading,
  Center,
  Flex,
} from "@chakra-ui/react";
import { FiAlertCircle, FiXCircle } from "react-icons/fi";

import lottie from "lottie-web";

function Required({
  title,
  message,
  lottieJson,
  heading_font_size,
  message_font_size,
  lottie_margin_top,
  content_margin_top,
  content_width,
  lottie_height,
}) {
  const lottie_ref = useRef(null);
  const anim = useRef(null);

  useEffect(() => {
    if (lottie_ref.current) {
      anim.current = lottie.loadAnimation({
        container: lottie_ref.current,
        animationData: lottieJson,
        // renderer: "svg",
        autoplay: true,
      });
      return () => anim.current?.destroy();
    }
  }, []);
  return (
    <Box w="100%">
      <Flex justifyContent="center" alignItems="center">
        <Box
          h={lottie_height}
          mt={lottie_margin_top}
          w="100%"
          ref={lottie_ref}
        ></Box>
      </Flex>
      <Box mt={content_margin_top}>
        <Heading
          fontSize={!heading_font_size ? "25px" : heading_font_size}
          textAlign="center"
          fontWeight="500"
          mb="10px"
        >
          {title}
        </Heading>
        <Center>
          <Text textAlign="center" fontSize={message_font_size} w={content_width}>
            {message}
          </Text>
        </Center>
      </Box>
    </Box>
  );
}

export default Required;
