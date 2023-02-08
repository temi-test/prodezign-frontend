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

function LottieAnim({lottieJson, mt, mb, height}) {
  const lottie_ref = useRef(null);
  const anim = useRef(null);

  useEffect(() => {
    if (lottie_ref.current) {
      anim.current = lottie.loadAnimation({
        container: lottie_ref.current,
        animationData: lottieJson,
         renderer: "svg",
        autoplay: true,
      });
       return () => anim.current?.destroy();
    }
  }, []);
  return (
      <Flex justifyContent="center" alignItems="center" w="100%" mb={mb} mt={mt}>
        <Box h={height}w="100%" ref={lottie_ref}></Box>
      </Flex>
     

  );
}

export default LottieAnim;
