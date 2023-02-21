import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Main from "./Main";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PostCreate from "./components/PostCreate";
import Navigation from "./components/Navigation";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/About.css";
import "./css/App.css";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        {/* // async 붙여야함 */}
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/new" element={<PostCreate />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
