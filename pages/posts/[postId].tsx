import Form from "@/components/Form";
import { Header } from "@/components/Header";
import { PostItem } from "@/components/posts/PostItem";
import { usePost } from "@/hooks/usePost";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

type Props = {};

export default function PostView({}: Props) {
  const router = useRouter();
  const { postId } = router.query;

  const {
    data: fetchedPost,
    isLoading,
    error,
    mutate,
  } = usePost(postId as string);

  if (isLoading || !fetchedPost) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    );
  }

  return (
    <>
      <Header label="Tweet" showBackArrow />
      <PostItem postData={fetchedPost} />
      <Form
        postId={postId as string}
        isComment
        placeholder="Tweet your reply"
      />
    </>
  );
}
