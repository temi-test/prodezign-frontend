import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";

// Import Assets
import Error1 from "../lottie/payment-failed-1.json";
// import paymentSuccess2 from "../../lottie/payment-success-2.json";

import lottie from "lottie-web";
import { useRef } from "react";
function LottieComponent({type}) {

  const lottie_ref = useRef(null);
  const anim = useRef(null);

  useEffect(() => {
    if (lottie_ref.current) {
      anim.current = lottie.loadAnimation({
        container: lottie_ref.current,
        animationData: Error1,
        // renderer: "svg",
        autoplay: true,
      });
      return () => anim.current?.destroy();
    }
  }, []);

  return <Box h="300px" w="100%" ref={lottie_ref}></Box>;
}

export default LottieComponent;
