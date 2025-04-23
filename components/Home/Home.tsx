import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { PostType } from "../../types/types";

const Home = () => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [feed, setFeed] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BASE_URL + "/auth/current_user",
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
        console.error(err);
        setUser(undefined);
        navigate("/login");
      }
    };

    getUser();

    if (user) {
      fetch(import.meta.env.VITE_BASE_URL + "/users/" + user.id + "/feed")
        .then((response) => response.json())
        .then((data) => setFeed(data));
    }
  }, [loading]);

  if (loading) return null;

  const releventPosts = feed.map((post: PostType) => (
    <Post
      postId={post.id}
      key={post.id}
      userPic={post.user.avatarUrl}
      username={post.user.username}
      title={post.title}
      upVotes={post.upVotes}
      downVotes={post.downVotes}
      commentsNum={post.comments.length}
    />
  ));

  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col gap-4 items-center pt-4">
      <h1 className="text-5xl text-gray-400">
        {user ? `${user.username}'s Feed` : "My Feed"}{" "}
      </h1>
      <div className="h-full w-1/2 overflow-auto">
        {feed ? (
          releventPosts
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

export default Home;
