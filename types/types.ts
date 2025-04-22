export interface UserType {
  id: number;
  username: string;
  githubId: string;
  avatarUrl: string;
  createdAt: string;
  notifications: Notification[];
  post: PostType[];
}

export interface PostType {
  id: number;
  text: string;
  createdAt: string;
  downVotes: number;
  upVotes: number;
  title: string;
  user: UserType;
  userId: number;
  comments: CommentType[];
}

export interface CommentType {
  id: number;
  createdAt: string;
  postId: number;
  text: string;
  user: UserType;
  userId: number;
}

export interface NotificationType {
  id: number;
  createdAt: string;
  isRead: boolean;
  message: string;
  type: string;
  userId: number;
}
