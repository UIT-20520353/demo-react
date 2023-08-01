import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function DetailPost() {
  const { postId } = useParams();
  const postList = useSelector((state) => state.post.postList);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const temp = postList.find((p) => p.id === postId);
    if (temp) setPost(temp);
  }, []);

  if (!post) return <div className="m-10">Loading...</div>;

  return (
    <div className="flex flex-col items-center gap-5 m-10">
      <h1 className="text-4xl font-semibold text-center text-gray-900">
        {post.title}
      </h1>
      <p className="text-base text-gray-600">{post.description}</p>
      <img src={post.featuredImage} className="max-w-full" />
    </div>
  );
}

export default DetailPost;
