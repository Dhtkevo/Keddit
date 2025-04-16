import React from "react";
import { Link } from "react-router";

const Post = ({
  postId,
  userPic,
  username,
  title,
  upVotes,
  downVotes,
  commentsNum,
}) => {
  const handleUpvote = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await fetch("http://localhost:3000/posts/" + postId + "/upvote", {
      method: "PUT",
    });
  };

  return (
    <div className="border-b border-gray-800 h-fit flex flex-col py-1.5 px-4 gap-4 hover:shadow-md hover:shadow-gray-800 rounded-3xl">
      <div className="flex justify-between">
        <div className="w-fit flex items-center gap-2 hover:cursor-pointer">
          <img
            src={userPic}
            alt="profile picture"
            className="h-6 w-6 rounded-full"
          />
          <p className="text-gray-500 text-xs hover:text-blue-400">
            {username}
          </p>
        </div>
        <Link to={"/posts/" + postId}>
          <button className="bg-blue-700 py-1 px-3 text-white text-xs rounded-full hover:cursor-pointer hover:bg-blue-600">
            View
          </button>
        </Link>
      </div>
      <Link className="w-fit" to={"/posts/" + postId}>
        <h2 className="text-gray-300 text-xl w-fit hover:cursor-pointer hover:text-blue-600">
          {title}
        </h2>
      </Link>
      <div className="flex gap-4">
        <button className="bg-gray-700 text-white flex gap-2 items-center rounded-full py-1.5 px-3">
          <i
            onClick={handleUpvote}
            className="fa-solid fa-angle-up text-lg hover:cursor-pointer hover:bg-gray-500 rounded-full hover:text-green-400 p-2"
          ></i>
          <p className="text-xs">{upVotes - downVotes}</p>
          <i className="fa-solid fa-angle-down text-lg hover:cursor-pointer hover:bg-gray-500 rounded-full hover:text-red-400 p-2"></i>
        </button>

        <Link
          to={"/posts/" + postId}
          className="bg-gray-700 text-white flex gap-2 items-center rounded-full py-1.5 px-5 hover:cursor-pointer hover:bg-gray-500"
        >
          <i className="fa-solid fa-comment"></i>
          <p className="text-xs">{commentsNum}</p>
        </Link>
      </div>
    </div>
  );
};

export default Post;
