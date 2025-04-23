import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

interface UserCardProps {
  username: string;
  avatarUrl: string;
  userId: number;
}

const UserCard = ({ username, avatarUrl, userId }: UserCardProps) => {
  const { user } = useContext(AuthContext);
  const [following, setFollowing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(import.meta.env.VITE_BASE_URL + "/users/check_following", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: user?.id, targetUserId: userId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === null) {
          setFollowing(false);
        } else {
          setFollowing(true);
        }

        setLoading(false);
      });
  }, []);

  const handleFollow = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (userId === user?.id) return;

    await fetch(
      following
        ? import.meta.env.VITE_BASE_URL + "/users/unfollow"
        : import.meta.env.VITE_BASE_URL + "/users/follow",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ userId: user?.id, targetUserId: userId }),
      }
    );

    setFollowing((prev) => !prev);
  };

  if (loading) return null;

  return (
    <div className="border-b border-gray-700 h-32 flex justify-between items-center px-4 rounded-2xl hover:shadow-md hover:shadow-gray-700">
      <Link to={"/profile/" + userId}>
        <div className="flex items-center gap-4 hover:cursor-pointer">
          <img
            src={avatarUrl}
            alt="Profile picture"
            className="h-28 w-28 rounded-full"
          />

          <h2 className="text-4xl text-gray-200 hover:text-gray-600">
            {username}
          </h2>
        </div>
      </Link>
      {user?.id !== userId && (
        <button
          onClick={handleFollow}
          className={`${
            !following
              ? "bg-blue-700 hover:bg-blue-600"
              : "bg-red-400 hover:bg-red-500 text-white"
          } text-gray-300 py-2 px-12 rounded-full hover:cursor-pointer`}
        >
          {!following ? "Follow" : "Unfollow"}
        </button>
      )}
    </div>
  );
};

export default UserCard;
