import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getUserDetails } from "../utils/utils";

const PrivateRoute = () => {
  const [isAuth, setIsAuth] = useState(true);

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
