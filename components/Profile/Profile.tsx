import React, { useContext, useEffect, useState } from "react";

import ProfileHeader from "../Profile/ProfileHeader";
import Post from "../Home/Post";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/auth/current_user",
          {
            credentials: "include",
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error();
        }

        setUser(data);
        setLoading(false);
      } catch (err) {
        setUser(undefined);
        navigate("/login");
      }
    };

    getUser();
  }, []);

  if (loading) return null;

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
