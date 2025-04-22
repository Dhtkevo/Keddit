import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Post from "../Home/Post";
import { PostType } from "../../types/types";

const SearchResults = () => {
  const { setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [matchedPosts, setMatchedPosts] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const [response, response2] = await Promise.all([
          fetch("http://localhost:3000/auth/current_user", {
            credentials: "include",
          }),
          fetch(
            "http://localhost:3000/posts/search?" + searchParams.toString()
          ),
        ]);

        const data = await response.json();
        const searchData = await response2.json();

        if (!response.ok) {
          throw new Error();
        }

        setUser(data);
        setMatchedPosts(searchData);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setUser(undefined);
        navigate("/login");
      }
    };

    getUser();
  }, [searchParams]);

  if (loading) return null;

  const displayPosts = matchedPosts.map((post: PostType) => {
    return (
      <Post
        key={post.id}
        postId={post.id}
        userPic={post.user.avatarUrl}
        username={post.user.username}
        title={post.title}
        upVotes={post.upVotes}
        downVotes={post.downVotes}
        commentsNum={post.comments.length}
      />
    );
  });

  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col gap-4 items-center pt-4">
      <h1 className="text-5xl text-gray-400">
        Search Results for '{searchParams.get("title")}'
      </h1>
      <div className="h-full w-1/2 overflow-auto">
        {matchedPosts.length > 0 ? (
          displayPosts
        ) : (
          <h2 className="mt-40 text-center text-7xl text-gray-600">
            No matches found.
          </h2>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
