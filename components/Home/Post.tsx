import React from "react";

const Post = ({
  userPic,
  username,
  title,
  upVotes,
  downVotes,
  commentsNum,
}) => {
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
        <button className="bg-blue-700 py-1 px-3 text-white text-xs rounded-full hover:cursor-pointer hover:bg-blue-600">
          View
        </button>
      </div>
      <h2 className="text-gray-300 text-xl">{title}</h2>
      <div className="flex gap-4">
        <button className="bg-gray-700 text-white flex gap-2 items-center rounded-full py-1.5 px-3">
          <i className="fa-solid fa-angle-up text-lg hover:cursor-pointer hover:bg-gray-500 rounded-full hover:text-green-400 p-2"></i>
          <p className="text-xs">{upVotes - downVotes}</p>
          <i className="fa-solid fa-angle-down text-lg hover:cursor-pointer hover:bg-gray-500 rounded-full hover:text-red-400 p-2"></i>
        </button>
        <button className="bg-gray-700 text-white flex gap-2 items-center rounded-full py-1.5 px-5 hover:cursor-pointer hover:bg-gray-500">
          <i className="fa-solid fa-comment"></i>
          <p className="text-xs">{commentsNum}</p>
        </button>
      </div>
    </div>
  );
};

export default Post;
