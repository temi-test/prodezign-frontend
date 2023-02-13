import { indexOf } from "lodash";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useRedirect() {
  const navigate = useNavigate();
  const location = useLocation();
  const current_path = location.pathname;
  const prev_path = location.state?.prevPathname;
  const current_list = ["/auth", "/auth/login", "/auth/signup", "/auth/verify"];
  const prev_list = ["/auth", "/auth/login", "/auth/signup", "/auth/verify"];

  // console.log("current location");
  // console.log(location);
  const redirect = (next, replace) => {
    let isReturn = false;
    console.log("redirect clicked");
    if (replace) {
      // check the current path and prevPath

      // if the current path is auth page and prev path is auth page,
      // then set the next page to be home page and the prev page to be home page
      if (current_list.indexOf(current_path) > -1) {
        // user is on one of the auth pages
        // if the previous path is also one of the auth pages
        if(prev_list.indexOf(prev_path) > -1){
          // set the route prev route to the home page instead
          // navigate to the home page instead and replace and set the prev path name to the home page
          isReturn = true;
          console.log("special route")
          navigate("/", {
            replace: true,
            state: {
              prevPathname: "/",
            },
          });
          return;
        }
      }
    }

    console.log("is return is " + isReturn);
    if(!isReturn){
      navigate(next, {
        replace: !replace ? false : true,
        state: {
          prevPathname: current_path,
        },
      });
    }
  };

  const checkCurrentPath = (next) => {
    if (current_path === "/auth") {
    }
  };

  return redirect;
}

export default useRedirect;
