import React from "react";

import UserCard from "../UserIndex/UserCard";

const UserIndex = () => {
  return (
    <div className="h-screen w-full flex justify-center">
      <div className="h-screen w-1/2 overflow-auto">
        <h1 className="text-7xl text-gray-300 text-center my-4">
          Discover Users
        </h1>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default UserIndex;
