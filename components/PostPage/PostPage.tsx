import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router";
import PostInfo from "./PostInfo";
import CommentCard from "./CommentCard";
import { CommentType, PostType } from "../../types/types";

const PostPage = () => {
  const { setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [targetPost, setTargetPost] = useState<PostType | undefined>(undefined);
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
        console.error(err);
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
  const allComments = targetPost.comments.map((comment: CommentType) => (
    <CommentCard
      key={comment.id}
      userId={comment.user.id}
      text={comment.text}
      username={comment.user.username}
      avatar={comment.user.avatarUrl}
    />
  ));

  return (
    <div className="h-screen w-full flex justify-center pt-4">
      <div className="h-screen w-1/2 overflow-auto">
        <PostInfo
          key={targetPost.id}
          postId={targetPost.id}
          userId={targetPost.user.id}
          title={targetPost.title}
          username={targetPost.user.username}
          avatarUrl={targetPost.user.avatarUrl}
          votes={targetPost.upVotes - targetPost.downVotes}
          commentsNum={targetPost.comments.length}
          text={targetPost.text}
        />
        {allComments}
      </div>
    </div>
  );
};

export default PostPage;
