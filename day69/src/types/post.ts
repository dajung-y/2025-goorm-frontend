export interface Post {
  id: number;
  title: string;
  content: string;
}

export type PostSummary = Pick<Post, "id" | "title">