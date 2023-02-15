import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Main from "./Main";
import SignUp from "./SignUp";
import Write from "./Write";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* // async 붙여야함 */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/write" element={<Write />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
