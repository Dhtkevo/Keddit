import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  const [searchText, setSearchText] = useState("");
  const [unReadNotis, setUnReadNotis] = useState(false);
  const navigate = useNavigate();

  const handleClearSearch = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    setSearchText("");
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (searchText.length === 0) return;

    const params = new URLSearchParams();
    params.set("title", searchText);
    navigate("/search?" + params);
  };

  return (
    <div className="bg-black h-16 border border-b-gray-700 flex justify-between items-center px-8 py-2 sticky top-0">
      <div className="flex h-full w-28 hover:cursor-pointer">
        <div className="h-full w-14">
          <Link to="/">
            <img
              src="../../src/assets/Keddit_Logo_No_Text.png"
              alt="Keddit Logo"
              className="object-cover h-full w-full"
            />
          </Link>
        </div>
        <div className="h-full w-14">
          <Link to="/">
            <img
              src="../../src/assets/Keddit_Text.png"
              alt="Keddit Logo Text"
              className="object-cover h-full w-full"
            />
          </Link>
        </div>
      </div>

      <form className="bg-gray-900 rounded-4xl h-full w-112 flex items-center px-4 py-1 gap-2 group hover:bg-gray-700">
        <button className="bg-none" onClick={handleSearchSubmit}>
          <i className="fa-solid fa-magnifying-glass h-fit text-white text-lg"></i>
        </button>
        <input
          type="text"
          name="searchBar"
          className="rounded-4xl h-full grow px-1 text-white placeholder-gray-500 focus:outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Keddit"
        />
        {searchText && (
          <div
            onClick={handleClearSearch}
            className="text-white rounded-full w-10 h-full flex justify-center items-center text-xs hover:bg-gray-400 hover:cursor-pointer"
          >
            X
          </div>
        )}
      </form>
      <div className="text-gray-300 text-2xl flex items-center gap-6">
        <Link to="/discover">
          <i className="fa-solid fa-users hover:cursor-pointer"></i>
        </Link>
        <div className="flex gap-2 items-center hover:cursor-pointer">
          <Link className="flex gap-2" to="/create/post">
            <i className="fa-solid fa-plus"></i>
            <p className="text-lg">Create</p>
          </Link>
        </div>
        <Link to="/notifications">
          <i
            className={`fa-solid fa-bell hover:cursor-pointer ${
              user && user.notifications.length > 0 && "text-red-300"
            } ${"text-yellow-200animate-bounce"}`}
          ></i>
        </Link>
        <div className="rounded-full h-max border border-gray-500 hover:cursor-pointer">
          <Link to={user ? `/profile/${user.id}` : "/profile"}>
            <img
              src={
                user ? user.avatarUrl : "../../src/assets/Keddit_Logo_Text.png"
              }
              alt="Profile Photo"
              className="h-8 w-12 rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
