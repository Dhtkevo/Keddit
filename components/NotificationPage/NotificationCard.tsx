import React from "react";

const NotificationCard = () => {
  return (
    <div className="bg-black border border-gray-500 rounded-2xl p-2 flex flex-col">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 justify-center">
          <h3 className="text-xl text-gray-300">New Follower - </h3>
          <p className="text-lg text-white">*DATE*</p>
        </div>
        <h3 className="text-lg text-gray-300">
          *USER has followed your account.*
        </h3>
      </div>
      <div className="flex gap-2 text-lg text-gray-400 self-end">
        <p className="text-blue-300 hover:cursor-pointer hover:text-gray-400">
          Mark as Read
        </p>
        <p className="text-red-400 hover:cursor-pointer hover:text-red-300">
          Delete Notification
        </p>
      </div>
    </div>
  );
};

export default NotificationCard;
