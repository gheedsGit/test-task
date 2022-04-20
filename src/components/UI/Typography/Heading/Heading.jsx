import React from "react";
import "./Heading.scss";

const Heading = ({ children, type }) => {
  return <h2 className={"heading " + type}>{children}</h2>;
};

export default Heading;
