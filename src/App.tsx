import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Main from "./components/MainPage";
import Login from "./components/LoginPage";
import SignUp from "./components/SignUpPage";
import PostCreate from "./components/PostCreatePage";
import Navigation from "./components/Navigation";
import About from "./components/AboutPage";
import MovieDetail from "./ToyProject/Netflix/MovieDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import "./css/Netflix.css";
import "./css/Paging.css";
import "react-quill/dist/quill.snow.css";

import NetflixAbout from "./ToyProject/Netflix/NetflixAbout";
import NetflixHome from "./ToyProject/Netflix/NetflixHome";
import Developing from "./components/DevelopingPage";
import Manage from "./components/ManagePage";
import PostDetail from "./components/PostDetailPage";
import PostEdit from "./components/PostEditPage";

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
