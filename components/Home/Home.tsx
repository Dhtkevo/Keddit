import React from "react";
import Post from "../Post/Post";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-gray-900 flex justify-center">
      <div className="h-full w-1/2 overflow-auto">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Home;
