//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import NavigationBar from "../components/NavigationBar/NavigationBar.tsx";
import Home from "../components/Home/Home.tsx";
import Profile from "../components/Profile/Profile.tsx";
import UserIndex from "../components/UserIndex/UserIndex.tsx";
import CreatePostForm from "../components/CreatePostForm/CreatePostForm.tsx";
import Login from "../components/Login/Login.tsx";
import AuthProvider from "../components/AuthProvider/AuthProvider.tsx";
import PostPage from "../components/PostPage/PostPage.tsx";
import SearchResults from "../components/SearchResults/SearchResults.tsx";
import NotificationPage from "../components/NotificationPage/NotificationPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <AuthProvider>
            <NavigationBar />
            <Home />
          </AuthProvider>
        }
      />
      <Route
        path="Profile/:userId"
        element={
          <AuthProvider>
            <NavigationBar />
            <Profile />
          </AuthProvider>
        }
      />
      <Route
        path="Posts/:postId"
        element={
          <AuthProvider>
            <NavigationBar />
            <PostPage />
          </AuthProvider>
        }
      />
      <Route
        path="Discover"
        element={
          <AuthProvider>
            <NavigationBar />
            <UserIndex />
          </AuthProvider>
        }
      />
      <Route
        path="Create/Post"
        element={
          <AuthProvider>
            <NavigationBar />
            <CreatePostForm />
          </AuthProvider>
        }
      />
      <Route
        path="Posts/:postId"
        element={
          <AuthProvider>
            <NavigationBar />
            <PostPage />
          </AuthProvider>
        }
      />
      <Route
        path="Search"
        element={
          <AuthProvider>
            <NavigationBar />
            <SearchResults />
          </AuthProvider>
        }
      />
      <Route
        path="Notifications"
        element={
          <AuthProvider>
            <NavigationBar />
            <NotificationPage />
          </AuthProvider>
        }
      />
    </Routes>
  </BrowserRouter>
);
