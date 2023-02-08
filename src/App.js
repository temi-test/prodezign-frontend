// import "./App.css";

import React, { useEffect, useState } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";

import AnimatedRoutes from "./app/pages/AnimatedRoutes";
import OverlayWrapper from "./app/components/overlay/OverlayWrapper";

import AnimatedPage from "./app/pages/AnimatedPage";
import Header from "./app/components/navigation/Header";
import { useLocation } from "react-router-dom";
import Footer from "./app/components/navigation/Footer";

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/auth/signup" ||
      location.pathname === "/auth/login"
      // location.pathname === "/bootcamps/:id/enroll"  ||
    ) {
      // hide the header on these routes

      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  }, [location.pathname]);
  return (
    <ChakraProvider>
      <Box className="App" overflowX="hidden">
        {/* {modal_overlay.show && <ModalOverlay />}
         */}
        {/* <DrawerComponent /> */}
        {/* {overlay.show && <Overlay />} */}

        <OverlayWrapper />
        {showHeader && <Header />}
        <Box minH="100vh">
          <AnimatedPage>
            <AnimatedRoutes />
          </AnimatedPage>
        </Box>


        {/* display the footer only after a state change */}
        <Footer/>

      </Box>
    </ChakraProvider>
  );
}

export default App;
