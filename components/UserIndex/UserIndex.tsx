import React, { useContext, useEffect, useState } from "react";

import UserCard from "../UserIndex/UserCard";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";

const UserIndex = () => {
  const { user, setUser } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState([]);
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

    fetch("http://localhost:3000/users/")
      .then((response) => response.json())
      .then((data) => setAllUsers(data));

    getUser();
  }, []);

  if (loading) return null;

  const displayUsers = allUsers.map((user) => (
    <UserCard
      key={user.id}
      userId={user.id}
      username={user.username}
      avatarUrl={user.avatarUrl}
    />
  ));

  return (
    <div className="h-screen w-full flex justify-center pt-4">
      <div className="h-screen w-1/2 overflow-auto">
        <h1 className="text-7xl text-gray-300 text-center my-4">
          Discover Users
        </h1>
        {displayUsers}
      </div>
    </div>
  );
};

export default UserIndex;
