import React from "react";
import "./UserCard.scss";
import ImageIncase from "./ImageIncase";
import Tooltip from "../Tooltip";

const UserCard = ({ user }) => {
  const { photo, name, position, email, phone } = user;
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-container__avatar">
          <ImageIncase photo={photo} name={name} />
        </div>
        <div className="card-container__name">
          <Tooltip tooltipText={name}>
            <span>{name}</span>
          </Tooltip>
        </div>
        <div className="card-container__info">
          <div className="info_item">
            <Tooltip tooltipText={position}>
              <span>{position}</span>
            </Tooltip>
          </div>
          <div className="info_item">
            <Tooltip tooltipText={email}>
              <span>{email}</span>
            </Tooltip>
          </div>
          <div className="info_item">
            <Tooltip tooltipText={phone}>
              <span>{phone}</span>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
