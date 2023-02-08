import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function RequireAuth() {
  const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  const { account, token } = useSelector((state) => state.auth);

  return (
    <div>
      {!token ? (
        <Navigate to="/auth" state={{ from: location }} replace />
      ) : !account ? (
        <Navigate to="/init" state={{ from: location }} replace />
      ) : account?.verified !== true ? (
        <Navigate to="/auth" state={{ from: location }} replace />
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default RequireAuth;

// {( !token ? <Navigate to="/auth" state={{ from: location }} replace />

// :!account ? <Navigate to="/init" state={{ from: location }} replace />

// :account?.verified !== true? <Navigate to="/auth" state={{ from: location }} replace />

// :  <Outlet />

// )}
