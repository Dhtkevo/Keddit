import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import NotificationCard from "./NotificationCard";
import { NotificationType } from "../../types/types";

const NotificationPage = () => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const [response, response2] = await Promise.all([
          fetch(import.meta.env.VITE_BASE_URL + "/auth/current_user", {
            credentials: "include",
          }),
          fetch(
            import.meta.env.VITE_BASE_URL +
              "/users/" +
              user?.id +
              "/notifications",
            { credentials: "include" }
          ),
        ]);

        const data = await response.json();
        const notifs = await response2.json();
        console.log(notifs);

        if (!response.ok) {
          throw new Error();
        }

        setUser(data);
        setNotifications(notifs);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setUser(undefined);
        navigate("/login");
      }
    };

    getUser();
  }, []);

  if (loading) return null;

  const userNotifs = notifications.map((noti: NotificationType) => (
    <NotificationCard
      key={noti.id}
      id={noti.id}
      type={noti.type}
      message={noti.message}
      date={noti.createdAt}
    />
  ));

  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col gap-4 items-center pt-4">
      <h1 className="text-5xl text-gray-400">
        {user ? `${user.username}'s Notifications` : "Please Log In"}{" "}
      </h1>
      <div className="h-full w-1/2 overflow-auto">
        {notifications.length > 0 ? (
          userNotifs
        ) : (
          <h2 className="text-5xl/20 text-gray-200 font-bold text-center">
            You're all caught up!
          </h2>
        )}
      </div>
    </div>
  );
};

export default NotificationPage;
