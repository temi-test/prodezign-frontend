import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useRedirect from "../../hooks/useRedirect";

function RequireRedirect() {
  const navigate = useNavigate();
  const redirect = useRedirect();
  const location = useLocation();
  const { account, token } = useSelector((state) => state.auth);
  //   only users that are not signed in can access the routes in this category
  useEffect(() => {
    // if (account) {
    //   redirect(location.state.prevPathname | "/", true);
    // }
  }, []);
  return <div><Outlet /> </div>;
}

export default RequireRedirect;
