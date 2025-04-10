//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import NavigationBar from "../components/NavigationBar/NavigationBar.tsx";
import Home from "../components/Home/Home.tsx";
import Profile from "../components/Profile/Profile.tsx";
import UserIndex from "../components/UserIndex/UserIndex.tsx";
import CreatePostForm from "../components/CreatePostForm/CreatePostForm.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavigationBar />
            <Home />
          </>
        }
      />
      <Route
        path="Profile"
        element={
          <>
            <NavigationBar />
            <Profile />
          </>
        }
      />
      <Route
        path="Discover"
        element={
          <>
            <NavigationBar />
            <UserIndex />
          </>
        }
      />
      <Route
        path="Create/Post"
        element={
          <>
            <NavigationBar />
            <CreatePostForm />
          </>
        }
      />
    </Routes>
  </BrowserRouter>
);
