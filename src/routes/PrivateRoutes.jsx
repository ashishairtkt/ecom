import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getUserDetails } from "../utils/utils";
import Cookies from "js-cookie";
const PrivateRoute = () => {
  const [isAuth, setIsAuth] = useState(true);
  const isAuthenticated = !!Cookies.get("auth");

  console.log(isAuthenticated, "isAuthenticated");

  useEffect(() => {
    if (getUserDetails() !== null) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
