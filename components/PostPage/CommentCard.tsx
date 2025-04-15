import React from "react";

const CommentCard = ({ text, username, avatar }) => {
  return (
    <div className="rounded-2xl border border-gray-700 px-2 mb-2 pt-2">
      <div className="flex items-center gap-2 mb-4">
        <img
          src={avatar ? avatar : "../../src/assets/Keddit_Logo_Text.png"}
          alt="comment profile picture"
          className="h-8 w-8 rounded-full"
        />
        <h4 className="text-gray-200">{username}</h4>
      </div>
      <p className="text-gray-200 mb-4">{text}</p>
    </div>
  );
};

export default CommentCard;
