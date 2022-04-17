import React from "react";
import "./Button.scss";

const Button = ({ children, disabled }) => {
  return (
    <button className="common-button" disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
