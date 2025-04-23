import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../context/AuthContext";

interface NotificationCardProps {
  id: number;
  type: string;
  message: string;
  date: string;
}

const NotificationCard = ({
  id,
  type,
  message,
  date,
}: NotificationCardProps) => {
  const { user } = useContext(AuthContext);
  const formattedDate = format(new Date(date), "MMM-dd-yyyy");

  const handleDeleteNotification = async (
    e: React.FormEvent<HTMLParagraphElement>
  ) => {
    if (!user) return;

    e.preventDefault();

    await fetch(
      import.meta.env.VITE_BASE_URL +
        "/users/" +
        user.id +
        "/notifications/" +
        id,
      { method: "DELETE" }
    );
  };

  return (
    <div className="bg-black border border-gray-500 rounded-2xl p-2 flex flex-col mb-4">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 justify-center">
          <h3 className="text-xl text-gray-300">{type}: </h3>
          <p className="text-lg text-white">{formattedDate}</p>
        </div>
        <h3 className="text-lg text-gray-300">{message}</h3>
      </div>
      <div className="flex gap-2 text-lg text-gray-400 self-end">
        <p
          onClick={handleDeleteNotification}
          className="text-blue-300 hover:cursor-pointer hover:text-gray-400"
        >
          Mark as Read
        </p>
      </div>
    </div>
  );
};

export default NotificationCard;
