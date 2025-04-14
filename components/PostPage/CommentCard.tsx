import React from "react";

const CommentCard = () => {
  return (
    <div className="rounded-2xl border border-gray-700 px-2 mb-2">
      <div className="flex items-center gap-2 mb-4">
        <img
          src="../../src/assets/Keddit_Logo_Text.png"
          alt="comment profile picture"
          className="h-8 w-8 rounded-full"
        />
        <h4 className="text-gray-200">*Username</h4>
      </div>
      <p className="text-gray-200 mb-4">
        Can you please confirm what you mean by in memory? Do I save the access
        token in localstorage or set it as a cookie? And can a http only, secure
        cookie be accessed in the browser or not?
      </p>
    </div>
  );
};

export default CommentCard;
