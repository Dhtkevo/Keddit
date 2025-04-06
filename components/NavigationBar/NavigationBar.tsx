import React from "react";

const NavigationBar = () => {
  return (
    <div className="bg-black h-16 border border-b-gray-50 flex justify-between items-center px-8 py-2">
      <div className="flex border border-blue-400">
        <img
          src="../../src/assets/Keddit_Logo_No_Text.png"
          alt="Keddit Logo"
          className="w-14 h-14"
        />
        <img
          src="../../src/assets/Keddit_Text.png"
          alt="Keddit Logo Text"
          className="w-14 h-14"
        />
      </div>

      <div className="bg-gray-900 rounded-4xl h-full w-112 flex items-center px-4 py-1 gap-2 border border-blue-500">
        <i className="fa-solid fa-magnifying-glass h-fit text-white text-lg border border-red-500"></i>
        <input
          type="text"
          name="searchBar"
          className="bg-gray-900 rounded-4xl h-full grow-1 border px-1 text-white border-red-500 placeholder-gray-500"
          placeholder="Search Keddit"
        />
        <div className="text-white border border-red-600 rounded-full w-10 h-full flex justify-center items-center text-xs">
          X
        </div>
      </div>
      <div className="text-gray-300 text-2xl flex items-center gap-6">
        <i className="fa-brands fa-rocketchat"></i>
        <div className="flex gap-2 items-center">
          <i className="fa-solid fa-plus"></i>
          <p className="text-lg">Create</p>
        </div>
        <i className="fa-solid fa-bell"></i>
        <div className="rounded-full h-max border border-gray-500">
          <img
            src="../../src/assets/Keddit_Logo_No_Text.png"
            alt="Profile Photo"
            className="h-8 w-12 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
