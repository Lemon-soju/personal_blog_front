import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import Login from "./Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      return null;
    },
  },
  {
    path: "/signup",
    element: <SignUp />,
    loader: () => {
      return null;
    },
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      return null;
    },
  },
]);

export default routes;
