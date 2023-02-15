import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import logo from "./logo.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const menuList = ["About", "Home", "토이 프로젝트"];
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="login-button" onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>
      <div className="logo-section">
        <img width={200} src={logo} alt="logo"></img>
      </div>
      <div>
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
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
