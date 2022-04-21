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
          <a href="#getRoute">
            <Button>Users</Button>
          </a>
          <a href="#postRoute">
            <Button>Sign up</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
