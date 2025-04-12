import React from "react";
import { Link } from "react-router";

const UserCard = ({ username, avatarUrl, userId }) => {
  return (
    <div className="border-b border-gray-700 h-32 flex justify-between items-center px-4 rounded-2xl hover:shadow-md hover:shadow-gray-700">
      <Link to={"/profile/" + userId}>
        <div className="flex items-center gap-4 hover:cursor-pointer">
          <img
            src={avatarUrl}
            alt="Profile picture"
            className="h-28 w-28 rounded-full"
          />

          <h2 className="text-4xl text-gray-200 hover:text-gray-600">
            {username}
          </h2>
        </div>
      </Link>
      <button className="bg-blue-700 text-gray-300 py-2 px-12 rounded-full hover:cursor-pointer hover:bg-blue-600">
        Follow
      </button>
    </div>
  );
};

export default UserCard;
