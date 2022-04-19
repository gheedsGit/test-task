import React from "react";
import "./Tooltip.scss";
import Tippy from "@tippyjs/react";

const Tooltip = ({ children, tooltipText }) => {
  return (
    <Tippy content={<div className="tooltip-wrapper">{tooltipText}</div>}>
      {children}
    </Tippy>
  );
};

export default Tooltip;
