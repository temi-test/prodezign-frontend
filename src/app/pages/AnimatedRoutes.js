import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
/// Import Pages

// import Header from "../components/navigation/Header";
import AppRoutes from "./AppRoutes";
import Header from "../components/navigation/Header";
import Footer from "../components/navigation/Footer";
import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import OverlayWrapper from "../components/overlay/OverlayWrapper";

function AnimatedRoutes() {
  return (
    <AnimatePresence>
      <AppRoutes />
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
