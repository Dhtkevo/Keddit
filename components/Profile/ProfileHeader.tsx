import React from "react";

const ProfileHeader = () => {
  return (
    <div className="border-b border-gray-700 h-52 flex flex-col">
      <div className="flex items-center gap-4">
        <img
          src="../../src/assets/Keddit_Logo_No_Text.png"
          alt="Profile Picture"
          className="rounded-full h-28 w-28"
        />
        <div className="">
          <h1 className="text-gray-300 text-4xl">*Username*</h1>
        </div>
      </div>
      <div className="grow flex items-center pl-2">
        <button className="bg-gray-500 text-gray-100 py-2 px-6 rounded-full">
          Posts
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
