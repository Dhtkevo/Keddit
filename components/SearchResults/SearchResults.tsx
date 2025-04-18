import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Post from "../Home/Post";

const SearchResults = () => {
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
    <div className="h-screen w-screen bg-gray-900 flex flex-col gap-4 items-center pt-4">
      <h1 className="text-5xl text-gray-400">Search Results</h1>
      <div className="h-full w-1/2 overflow-auto">
        <h2 className="text-5xl/20 text-gray-200 font-bold text-center">
          Nothing to see here...
        </h2>
        <Post />
      </div>
    </div>
  );
};

export default SearchResults;
