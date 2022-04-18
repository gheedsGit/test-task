import React from "react";
import "./ShowMoreButton.scss";

const ShowMoreButton = ({ clickFn, isHiding }) => {
  return (
    <button
      className="button"
      onClick={clickFn}
      style={{ visibility: isHiding ? "hidden" : "visible" }}
    >
      Show more
    </button>
  );
};

export default ShowMoreButton;
