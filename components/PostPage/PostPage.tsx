import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router";
import PostInfo from "./PostInfo";
import CommentCard from "./CommentCard";

const PostPage = () => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [targetPost, setTargetPost] = useState(undefined);
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const [response, response2] = await Promise.all([
          fetch("http://localhost:3000/auth/current_user", {
            credentials: "include",
          }),
          fetch("http://localhost:3000/posts/" + postId),
        ]);

        const data = await response.json();
        const targetData = await response2.json();

        if (!response.ok) {
          throw new Error();
        }

        setUser(data);
        setTargetPost(targetData);
        setLoading(false);
      } catch (err) {
        setUser(undefined);
        navigate("/login");
      }
    };

    getUser();
  }, []);

  if (loading) return null;
  if (!targetPost) {
    return (
      <div className="text-gray-200 text-5xl text-center my-20">
        Something went wrong. Post not found.
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex justify-center pt-4">
      <div className="h-screen w-1/2 overflow-auto">
        <PostInfo />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </div>
  );
};

export default PostPage;
