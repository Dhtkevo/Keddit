import React, { useState } from "react";

const PostInfo = () => {
  const [commentText, setCommentText] = useState("");

  return (
    <div className="border border-blue-500">
      <div className="flex items-center gap-4 mb-8">
        <img
          src="../../src/assets/Keddit_Logo_Text.png"
          alt="Profile Picture"
          className="h-12 w-12 rounded-full"
        />
        <h3 className="text-gray-400">*Username*</h3>
      </div>
      <h1 className="text-gray-200 text-xl mb-8">*POST TITLE*</h1>
      <p className="text-gray-400 text-lg mb-12">
        Thee solution si know of so far is localStorage (dangerous to store),
        sessionStorage (good alternative but user might need to log in with
        every new tab), or use cookies (which i think is good but it doesn't
        have enough storage for jwt so might need to use a few to store the jwt
        + its sent with each request so its generating lots of unnecessary
        traffic"
      </p>
      <div className="flex gap-4 mb-8">
        <button className="bg-gray-700 text-white flex gap-2 items-center rounded-full py-1.5 px-3">
          <i className="fa-solid fa-angle-up text-lg hover:cursor-pointer hover:bg-gray-500 rounded-full hover:text-green-400 py-1 px-2"></i>
          <p className="text-xs">50</p>
          <i className="fa-solid fa-angle-down text-lg hover:cursor-pointer hover:bg-gray-500 rounded-full hover:text-red-400 p-2"></i>
        </button>
        <button className="bg-gray-700 text-white flex gap-2 items-center rounded-full py-1.5 px-5 hover:cursor-pointer hover:bg-gray-500">
          <i className="fa-solid fa-comment"></i>
          <p className="text-xs">12</p>
        </button>
      </div>
      <div className="flex flex-col">
        <input
          type="text"
          name="commentText"
          placeholder="Add a comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="py-3 px-3 w-full bg-black rounded-full border border-gray-700 placeholder-gray-400 text-gray-200"
          required
        />
        <button className="rounded-full bg-blue-700 py-1.5 px-3 text-gray-200 mt-2 w-fit self-end mb-8">
          Comment
        </button>
      </div>
    </div>
  );
};

export default PostInfo;
