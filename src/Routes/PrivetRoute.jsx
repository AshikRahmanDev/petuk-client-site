import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { PropagateLoader } from "react-spinners";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="h-[90vh] flex justify-center items-center">
        <PropagateLoader color="orange" />
      </div>
    );
  }
  if (user?.uid) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivetRoute;
