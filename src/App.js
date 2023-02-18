import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import SignUp from "./SignUp";
import PostCreate from "./PostCreate";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* // async 붙여야함 */}
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/new" element={<PostCreate />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
