import { create } from "zustand";

export const usePostStore = create((set) => ({
  posts: [],
  createPost: (title,body) => set((state) => ({
    posts: [...state.posts, {
      id: Date.now(),
      title: title,
      body: body,
    }]
  })),
  deletePost: (id) => set((state) => ({
    posts: state.posts.filter((post) => post.id !==id),
  })),

}))