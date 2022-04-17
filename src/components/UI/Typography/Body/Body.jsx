import React from "react";
import "./Body.scss";

const Body = ({ children, type }) => {
  return <p className={"text-body " + type}>{children}</p>;
};

export default Body;
