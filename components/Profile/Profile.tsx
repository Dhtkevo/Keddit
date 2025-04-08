import React from "react";

import ProfileHeader from "../Profile/ProfileHeader";
import Post from "../Home/Post";

const Profile = () => {
  return (
    <div className="h-screen w-full flex justify-center">
      <div className="h-screen w-1/2 overflow-auto">
        <ProfileHeader />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Profile;
