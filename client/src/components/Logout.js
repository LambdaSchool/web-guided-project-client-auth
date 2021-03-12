import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  const logout = () => {
    localStorage.removeItem("authToken");
    props.history.push("/");
  };
  
  return (
    <Link onClick={logout}>Logout</Link>
  )
}

export default Logout;