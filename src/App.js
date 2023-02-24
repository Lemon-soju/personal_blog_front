import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Main from "./Main";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PostCreate from "./components/PostCreate";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Movies from "./ToyProject/Netflix/Movies";
import MovieDetail from "./ToyProject/Netflix/MovieDetail";
import Netflix from "./ToyProject/Netflix/Netflix";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/About.css";
import "./css/App.css";
import "./css/Netflix.css";
import NetflixAbout from "./ToyProject/Netflix/NetflixAbout";

// api_key = "f013d2d7ff387dc6cb5e16d7550eacab";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        {/* Main */}
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/new" element={<PostCreate />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />

        {/* Netflix */}
        <Route path="/netflix" element={<Netflix />} />
        <Route path="/netflix/movies" element={<Movies />} />
        <Route path="/netflix/movies/:id" element={<MovieDetail />} />
        <Route path="/netflix/about" element={<NetflixAbout />} />
      </Routes>
    </div>
  );
};

export default App;
