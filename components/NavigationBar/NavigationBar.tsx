import React from "react";

const NavigationBar = () => {
  return (
    <div className="bg-black h-16 border border-b-gray-700 flex justify-between items-center px-8 py-2 sticky top-0">
      <div className="flex h-full w-28 hover:cursor-pointer">
        <div className="h-full w-14">
          <img
            src="../../src/assets/Keddit_Logo_No_Text.png"
            alt="Keddit Logo"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="h-full w-14">
          <img
            src="../../src/assets/Keddit_Text.png"
            alt="Keddit Logo Text"
            className="object-cover h-full w-full"
          />
        </div>
      </div>

      <div className="bg-gray-900 rounded-4xl h-full w-112 flex items-center px-4 py-1 gap-2 group hover:bg-gray-700">
        <i className="fa-solid fa-magnifying-glass h-fit text-white text-lg"></i>
        <input
          type="text"
          name="searchBar"
          className="rounded-4xl h-full grow px-1 text-white placeholder-gray-500 focus:outline-none"
          placeholder="Search Keddit"
        />
        <div className="text-white rounded-full w-10 h-full flex justify-center items-center text-xs hover:bg-gray-400 hover:cursor-pointer">
          X
        </div>
      </div>
      <div className="text-gray-300 text-2xl flex items-center gap-6">
        <i className="fa-brands fa-rocketchat hover:cursor-pointer"></i>
        <div className="flex gap-2 items-center hover:cursor-pointer">
          <i className="fa-solid fa-plus"></i>
          <p className="text-lg">Create</p>
        </div>
        <i className="fa-solid fa-bell hover:cursor-pointer"></i>
        <div className="rounded-full h-max border border-gray-500 hover:cursor-pointer">
          <img
            src="../../src/assets/Keddit_Logo_Text.png"
            alt="Profile Photo"
            className="h-8 w-12 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
