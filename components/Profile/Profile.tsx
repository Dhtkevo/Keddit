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

  const userPosts = user.post.map((post) => {
    return (
      <Post
        key={post.id}
        userPic={user.avatarUrl}
        username={user.username}
        title={post.title}
        text={post.text}
        upVotes={post.upVotes}
        downVotes={post.downVotes}
        commentsNum={post.comments.length}
      />
    );
  });

  return (
    <div className="h-screen w-full flex justify-center">
      <div className="h-screen w-1/2 overflow-auto">
        <ProfileHeader user={user} />
        {user.post.length > 0 ? (
          userPosts
        ) : (
          <>
            <h2 className="text-5xl/20 text-gray-200 font-bold text-center">
              Nothing to see here...
            </h2>
            <h3 className="text-3xl/20 text-gray-200 font-bold">
              Create a post or follow some users to get things jumping!
            </h3>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
