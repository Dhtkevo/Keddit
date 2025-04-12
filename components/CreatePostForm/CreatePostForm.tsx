import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";

const CreatePostForm = () => {
  const { user, setUser } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleCreatePost = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, text, userId: user.id }),
    });

    navigate("/");
  };

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
    <div className="h-screen w-screen flex justify-center pt-4">
      <div className="h-full w-1/2">
        <h1 className="text-gray-400 text-center text-3xl mt-8 mb-8">
          Create Post
        </h1>
        <form className="">
          <div className="flex flex-col gap-4">
            <p className="text-gray-200 text-xl ml-4 border-b-4 border-blue-400 w-fit hover:bg-gray-600 hover:cursor-pointer">
              Text
            </p>
            <input
              type="text"
              name="postTitle"
              minLength={5}
              required
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-black text-gray-300 py-4 px-4 w-full rounded-2xl border border-gray-700"
            />
          </div>
          <div className="flex flex-col gap-3 mt-16">
            <textarea
              name="postBody"
              placeholder="Body"
              required
              minLength={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="resize-y w-full h-64 bg-black text-gray-300 p-4 rounded-2xl border border-gray-700"
            ></textarea>
            <button
              onClick={handleCreatePost}
              className="rounded-full bg-blue-600 py-2 px-6 text-gray-100 hover:cursor-pointer hover:bg-blue-800 w-fit self-end"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostForm;
