import React, { useContext, useEffect } from "react";

import ProfileHeader from "../Profile/ProfileHeader";
import Post from "../Home/Post";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("http://localhost:3000/auth/current_user", {
        credentials: "include",
      });

      const data = await response.json();

      setUser(data);
    };

    getUser();
  }, []);

  return (
    <div className="h-screen w-full flex justify-center">
      <div className="h-screen w-1/2 overflow-auto">
        <ProfileHeader user={user} />
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
