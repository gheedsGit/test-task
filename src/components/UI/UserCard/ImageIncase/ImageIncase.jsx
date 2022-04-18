import React from "react";
import mockImg from "../../../../assets/img/photo-cover.svg";
import "./ImageIncase.scss";

const ImageIncase = ({ photo, name }) => {
  const handleImageError = (e) => {
    e.target.src = mockImg;
  };

  return (
    <img
      className="image-incase"
      src={photo}
      alt={name + " profile picture"}
      onError={handleImageError}
    />
  );
};

export default ImageIncase;
