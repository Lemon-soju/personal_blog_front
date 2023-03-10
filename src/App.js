import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PostCreate from "./components/PostCreate";
import Navigation from "./components/Navigation";
import About from "./components/About";
import MovieDetail from "./ToyProject/Netflix/MovieDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/About.css";
import "./css/App.css";
import "./css/Netflix.css";
import "./css/Paging.css";
import "./css/Post.css";
import NetflixAbout from "./ToyProject/Netflix/NetflixAbout";
import NetflixHome from "./ToyProject/Netflix/NetflixHome";
import Developing from "./components/Developing";
import Manage from "./components/Manage";
import PostDetail from "./components/PostDetail";
import PostEdit from "./components/PostEdit";
import MyPostDetail from "./components/MyPostDetail";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        {/* Main */}
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/new" element={<PostCreate />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/mypost/:id" element={<MyPostDetail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/developing" element={<Developing />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />

        {/* Netflix */}
        <Route path="/netflix" element={<NetflixHome />} />
        <Route path="/netflix/movies/:id" element={<MovieDetail />} />
        <Route path="/netflix/about" element={<NetflixAbout />} />
      </Routes>
    </div>
  );
};

export default App;
