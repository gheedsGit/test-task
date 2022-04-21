import React from "react";
import "./Button.scss";

const Button = ({ children, disabled, type }) => {
  return (
    <button className="common-button" type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
