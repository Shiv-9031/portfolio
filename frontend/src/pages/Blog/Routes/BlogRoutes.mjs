import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import React from "react";
import DataProvider from "../hooks/DataProvider.jsx";
import { Login, Home } from "../Account/index.mjs";
import Header from "../header/Header.jsx";
import { CreatePost } from "../createPost/CreatePost.jsx";

function PrivateRoutes({ isAuthenticated, ...props }) {
  return isAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to={"/blog/login"} />
  );
}

function BlogRoutes() {
  const [isAuthenticated, setUserAuthenticated] = React.useState(false);

  // const blogRoutes = [
  //   {
  //     path: "/blog/login",
  //     element: (
  //       <DataProvider>
  //         <Login setUserAuthenticated={setUserAuthenticated} />
  //       </DataProvider>
  //     ),
  //   },
  //   {
  //     path: "/blog",
  //     element: (
  //       <PrivateRoutes isAuthenticated={isAuthenticated}>
  //         <DataProvider>
  //           <Home />
  //         </DataProvider>
  //       </PrivateRoutes>
  //     ),
  //   },
  // ];
  return (
    <>
      <Routes>
        {/* {blogRoutes.map((route, index) => (
          <Route path={route.path} element={route.element} key={index} />
        ))} */}
        <Route
          path="/blog/login"
          element={
            <DataProvider>
              <Login setUserAuthenticated={setUserAuthenticated} />
            </DataProvider>
          }
        />
        <Route
          path="/"
          element={<PrivateRoutes isAuthenticated={isAuthenticated} />}
        >
          <Route
            path="blog"
            element={
              <DataProvider>
                <Home />
              </DataProvider>
            }
          />
        </Route>

        {/* route for create post */}
        <Route
          path="/blog"
          element={<PrivateRoutes isAuthenticated={isAuthenticated} />}
        >
          <Route
            path="create"
            element={
              <DataProvider>
                <CreatePost />
              </DataProvider>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default BlogRoutes;
