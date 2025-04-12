import { useContext, useEffect } from "react";
import Post from "./Post";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("http://localhost:3000/auth/current_user", {
        credentials: "include",
      });

      const data = await response.json();

      setUser(data);
    };

    getUser();
  }, []);

  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col gap-4 items-center">
      <h1 className="text-5xl text-gray-400">
        {user ? `${user.username}'s Feed` : "My Feed"}{" "}
      </h1>
      <div className="h-full w-1/2 overflow-auto">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Home;
