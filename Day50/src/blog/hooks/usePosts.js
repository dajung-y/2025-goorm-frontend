import { useQuery } from "@tanstack/react-query"
import posts from "../api/posts";

export default function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    // posts 불러오는 함수 : api/posts
    queryFn: posts,
  });
}
