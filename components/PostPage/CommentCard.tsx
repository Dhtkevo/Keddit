import { Link } from "react-router";

interface CommentCardProps {
  userId: number;
  text: string;
  username: string;
  avatar: string;
}

const CommentCard = ({ userId, text, username, avatar }: CommentCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-700 px-2 mb-2 pt-2">
      <div className="flex items-center gap-2 mb-4">
        <img
          src={avatar ? avatar : "../../src/assets/Keddit_Logo_Text.png"}
          alt="comment profile picture"
          className="h-8 w-8 rounded-full"
        />
        <Link
          to={"/profile/" + userId}
          className="text-gray-200 hover:text-blue-600 hover:cursor-pointer"
        >
          {username}
        </Link>
      </div>
      <p className="text-gray-200 mb-4">{text}</p>
    </div>
  );
};

export default CommentCard;
