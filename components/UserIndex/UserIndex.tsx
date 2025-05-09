import { useContext, useEffect, useState } from "react";

import UserCard from "../UserIndex/UserCard";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { UserType } from "../../types/types";

const UserIndex = () => {
  const { setUser } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState<UserType[] | []>([]);
  const [loading, setLoading] = useState(true);
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

    fetch(import.meta.env.VITE_BASE_URL + "/users/", { credentials: "include" })
      .then((response) => response.json())
      .then((data) => setAllUsers(data));

    getUser();
  }, []);

  if (loading) return null;

  const displayUsers = allUsers.map((user: UserType) => (
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
