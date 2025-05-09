import { useContext, useEffect, useState } from "react";

import ProfileHeader from "../Profile/ProfileHeader";
import Post from "../Home/Post";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router";
import { PostType, UserType } from "../../types/types";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [targetUser, setTargetUser] = useState<UserType | undefined>(undefined);
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const [response, response2] = await Promise.all([
          fetch(import.meta.env.VITE_BASE_URL + "/auth/current_user", {
            credentials: "include",
          }),
          fetch(import.meta.env.VITE_BASE_URL + "/users/" + userId, {
            credentials: "include",
          }),
        ]);

        const data = await response.json();
        const targetData = await response2.json();

        if (!response.ok) {
          throw new Error();
        }

        setUser(data);
        setTargetUser(targetData);
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
  if (!targetUser) {
    return (
      <div className="text-gray-200 text-5xl text-center my-20">
        Something went wrong. User not found.
      </div>
    );
  }

  const userPosts = targetUser.post.map((post: PostType) => {
    return (
      <Post
        postId={post.id}
        key={post.id}
        userPic={targetUser.avatarUrl}
        username={targetUser.username}
        title={post.title}
        upVotes={post.upVotes}
        downVotes={post.downVotes}
        commentsNum={post.comments.length}
      />
    );
  });

  return (
    <div className="h-screen w-full flex justify-center pt-4">
      <div className="h-screen w-1/2 overflow-auto">
        <ProfileHeader user={targetUser} />
        {targetUser.post.length > 0 ? (
          userPosts
        ) : (
          <>
            <h2 className="text-5xl/20 text-gray-200 font-bold text-center">
              Nothing to see here...
            </h2>
            {user?.id == userId && (
              <h3 className="text-3xl/20 text-gray-200 font-bold">
                Create a post or follow some users to get things jumping!
              </h3>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
