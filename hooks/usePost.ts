import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const usePost = (postId: string) => {
    const url = postId ? `/api/posts/${postId}` : null;
};

export default usePost;
