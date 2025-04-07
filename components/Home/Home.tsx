import React from "react";
import Post from "./Post";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col gap-4 items-center">
      <h1 className="text-5xl text-gray-600">k/*name_of_community*</h1>
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
