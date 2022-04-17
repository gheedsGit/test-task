import React from "react";
import "./Header.scss";
import Button from "../../UI/Button";
import Logo from "../../../assets/img/Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={Logo} alt="test task logo" />
        </div>
        <div className="header__btn-container">
          <Button>Users</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
