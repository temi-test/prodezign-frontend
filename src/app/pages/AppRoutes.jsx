import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

/// Import Pages
import Home from "./Home";
import About from "./About";
import Works from "./Works";
import Init from "./Init";
import Auth from "./Auth";
import SignupLogin from "../components/auth/SignupLogin";
import Verify from "../components/auth/Verify";
import BootCamp from "./BootCamp";
import BootCamps from "./BootCamps";
import NotFound from "./NotFound";
import BootCampClass from "./BootCampClass";
import BootCampEnroll from "./BootCampEnroll";
import AnimatedPage from "./AnimatedPage";
import { useState } from "react";
import EnrolledBootCamps from "./EnrolledBootCamps";
import RequireRedirect from "../components/auth/RequireRedirect";

function AppRoutes() {
  const location = useLocation();
  const [prev, setPrev] = useState("");
  useEffect(() => {
    console.log("app location below");
    console.log(location);
    let prev = location.state?.prevPathname;
    if (!prev) {
      prev = "/";
    }
    setPrev(prev);
  }, [location]);
  return (
    <Routes key={location.pathname}>
      {/* Public Routes */}

      <Route
        path="/"
        element={
          <AnimatedPage>
            <Home />
          </AnimatedPage>
        }
      />
      <Route
        path="/home"
        element={
          <AnimatedPage>
            <Home />
          </AnimatedPage>
        }
      />
      <Route
        path="/works"
        element={
          <AnimatedPage>
            <Works />
          </AnimatedPage>
        }
      />
      <Route
        path="/about"
        element={
          <AnimatedPage>
            <About />
          </AnimatedPage>
        }
      />
      <Route
        path="/bootcamps"
        element={
          <AnimatedPage>
            <BootCamps />
          </AnimatedPage>
        }
      />

      <Route
        path="/enrolled-bootcamps"
        element={
          <AnimatedPage>
            <EnrolledBootCamps />
          </AnimatedPage>
        }
      />
      <Route
        path="/bootcamps/:id"
        element={
          <AnimatedPage>
            <BootCamp />
          </AnimatedPage>
        }
      />
      <Route
        path="/bootcamps/:id/class"
        element={
          <AnimatedPage>
            <BootCampClass />
          </AnimatedPage>
        }
      />
      <Route
        path="/bootcamps/:id/enroll"
        element={
          <AnimatedPage>
            <BootCampEnroll />
          </AnimatedPage>
        }
      />

      <Route element={<RequireRedirect />}>
        <Route
          path="/auth"
          element={
            <AnimatedPage>
              <Auth />
            </AnimatedPage>
          }
        >
          <Route
            index
            element={
              <Navigate
                replace
                to="/auth/signup"
                state={{
                  prevPathname: prev,
                }}
              />
            }
          />
          <Route path="/auth/signup" element={<SignupLogin />} />
          <Route path="/auth/login" element={<SignupLogin />} />
          <Route path="/auth/verify" element={<Verify />} />
        </Route>
      </Route>

      <Route
        path="/init"
        element={
          <AnimatedPage>
            <Init />
          </AnimatedPage>
        }
      />

      <Route
        path="/404"
        element={
          <AnimatedPage>
            <NotFound />
          </AnimatedPage>
        }
      />
      <Route
        path="*"
        element={
          <Navigate
            to="/404"
            replace
            state={{
              prevPathname: prev,
            }}
          />
        }
      />
      {/* <Route path="*" element={<Navigate to="/404" replace/>} /> */}
    </Routes>
  );
}

export default AppRoutes;
