import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";

// Import Assets
import Error1 from "../lottie/payment-failed-1.json";
import empty1 from "../lottie/empty-1.json";
import empty2 from "../lottie/empty-2.json";
import empty3 from "../lottie/empty-3.json";
import empty4 from "../lottie/empty-4.json";
import empty5 from "../lottie/empty-5.json";
import empty6 from "../lottie/empty-6.json";
import empty7 from "../lottie/empty-7.json";
import notFound1 from "../lottie/not-found-1.json";
import notFound2 from "../lottie/not-found-2.json";
import notFound3 from "../lottie/not-found-3.json";
import notFound4 from "../lottie/not-found-4.json";

// import paymentSuccess2 from "../../lottie/payment-success-2.json";

import lottie from "lottie-web";
import { useRef } from "react";
function LottieComponent({ type }) {
  const lottie_ref = useRef(null);
  const anim = useRef(null);
  let lottieFile = null;

  useEffect(() => {
    if (type === "error") {
      lottieFile = Error1;
    } else if (type === "empty") {
      lottieFile = empty1;
    } else if (type === "404") {
      lottieFile = notFound1;
    }
  }, [type]);

  useEffect(() => {
    if (lottie_ref.current) {
      anim.current = lottie.loadAnimation({
        container: lottie_ref.current,
        animationData: lottieFile,
        // renderer: "svg",
        autoplay: true,
      });
      return () => anim.current?.destroy();
    }
  }, []);

  return <Box h="300px" w="100%" ref={lottie_ref}></Box>;
}

export default LottieComponent;
