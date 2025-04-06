import React from "react";

const NavigationBar = () => {
  return (
    <div className="bg-black h-16 border border-b-gray-50 flex items-center px-8">
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
    </div>
  );
};

export default NavigationBar;
