export interface User {
  id: number;
  username: string;
  githubId: string;
  avatarUrl: string;
  createdAt: string;
  notifications: Notification[];
  post: Post[];
}

export interface Post {
  id: number;
  text: string;
  createdAt: string;
  downVotes: number;
  upVotes: number;
  title: string;
  user: User;
  userId: number;
  comments: Comment[];
}

export interface Comment {
  id: number;
  createdAt: string;
  postId: number;
  text: string;
  user: User;
  userId: number;
}
