import React from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function AnimatedPage({ children }) {
  const location = useLocation();

  const animations = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  // useEffect(() => {
  //   document.documentElement.scrollTo({
  //     top: 0,
  //     // behavior: "instant"
  //   });
  // }, [location.pathname]);

  return (
    <Box w="100%">
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="wait"
        transition={{
          duration: 0.5,
        }}
      >
        {children}
      </motion.div>
    </Box>
  );
}

export default AnimatedPage;
