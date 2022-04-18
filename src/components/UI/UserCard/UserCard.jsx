import React from "react";
import "./UserCard.scss";
import ImageIncase from "./ImageIncase";

const UserCard = ({ user }) => {
  const { photo, name, position, email, phone } = user;
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-container__avatar">
          <ImageIncase photo={photo} name={name} />
        </div>
        <div className="card-container__name">{name}</div>
        <div className="user-container__info">
          <div className="info_item">{position}</div>
          <div className="info_item">{email}</div>
          <div className="info_item">{phone}</div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
