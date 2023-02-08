import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useRedirect() {
  const navigate = useNavigate();
  const location = useLocation();
  const current_path = location.pathname;

  // console.log("current location");
  // console.log(location);
  const redirect = (next, replace) => {
    console.log("redirect clicked");
    navigate(next, {
      replace: !replace ? false : true,
      state: {
        prevPathname: current_path,
      },
    });
    // navigate(from, { replace: true });
  };

  return redirect;
}

export default useRedirect;
