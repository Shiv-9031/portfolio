import { Routes, Route } from "react-router-dom";
import React from "react";

import { Login, SignUp } from "../Account/index.mjs";

function BlogRoutes() {
  const blogRoutes = [
    {
      path: "blog/login",
      element: <Login />,
    },
    {
      path: "blog/signup",
      element: <SignUp />,
    },
  ];
  return (
    <Routes>
      {blogRoutes.map((route, index) => (
        <Route path={route.path} element={route.element} key={index} />
      ))}
    </Routes>
  );
}

export default BlogRoutes;
