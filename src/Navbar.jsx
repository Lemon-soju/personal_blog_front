import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "./logo.jpg";

const Navbar = () => {
  const menuList = ["About", "Home", "토이 프로젝트"];

  return (
    <>
      <div className="login-button">
        <FontAwesomeIcon icon={faUser} />
        <Link to="/login">로그인</Link>
      </div>
      <div className="signup-button">
        <Link to="/signup">회원가입</Link> <br />
      </div>
      <div className="logo-section">
        <img width={200} src={logo} alt="logo"></img>
      </div>
      <div>
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search-section">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
