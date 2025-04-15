import React, { useState } from "react";

const PostInfo = ({
  postId,
  userId,
  title,
  username,
  avatarUrl,
  votes,
  commentsNum,
  text,
}) => {
  const [commentText, setCommentText] = useState("");

  const handleCreateComment = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (commentText.length > 0) {
      await fetch("http://localhost:3000/posts/" + postId + "/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ commentText: commentText, userId: userId }),
      });

      setCommentText("");
    }
  };

  return (
    <div className="">
      <div className="flex items-center gap-4 mb-8">
        <img
          src={avatarUrl ? avatarUrl : "../../src/assets/Keddit_Logo_Text.png"}
          alt="Profile Picture"
          className="h-12 w-12 rounded-full"
        />
        <h3 className="text-gray-400">{username}</h3>
      </div>
      <h1 className="text-gray-200 text-xl mb-8">{title}</h1>
      <p className="text-gray-400 text-lg mb-12">{text}</p>
      <div className="flex gap-4 mb-8">
        <button className="bg-gray-700 text-white flex gap-2 items-center rounded-full py-1.5 px-3">
          <i className="fa-solid fa-angle-up text-lg hover:cursor-pointer hover:bg-gray-500 rounded-full hover:text-green-400 py-1 px-2"></i>
          <p className="text-xs">{votes}</p>
          <i className="fa-solid fa-angle-down text-lg hover:cursor-pointer hover:bg-gray-500 rounded-full hover:text-red-400 p-2"></i>
        </button>
        <button className="bg-gray-700 text-white flex gap-2 items-center rounded-full py-1.5 px-5 hover:cursor-pointer hover:bg-gray-500">
          <i className="fa-solid fa-comment"></i>
          <p className="text-xs">{commentsNum}</p>
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
        <button
          onClick={handleCreateComment}
          className="rounded-full bg-blue-700 py-1.5 px-3 text-gray-200 mt-2 w-fit self-end mb-8 hover:bg-blue-600 hover:cursor-pointer"
        >
          Comment
        </button>
      </div>
    </div>
  );
};

export default PostInfo;
