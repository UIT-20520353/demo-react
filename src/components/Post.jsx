import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../app/postSlice";
import { toast } from "react-toastify";
import { deletePostById } from "../api";
import { NavLink } from "react-router-dom";

function Post({ post }) {
  const dispatch = useDispatch();

  const dateDisplay = useMemo(() => {
    const date = new Date(post.publishDate);
    return `${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  }, [post.publishDate]);

  const handleDeletePost = async (id) => {
    await deletePostById(id);

    dispatch(deletePost(id));
    toast("Xóa bài viết thành công", {
      position: "top-right",
      autoClose: 3000,
      closeOnClick: false,
      type: "success",
    });
  };

  return (
    <li key={post.id} className={"grid grid-cols-3"}>
      <div>
        <NavLink to={`/post-detail/${post.id}`} className={"block"}>
          <img
            src={post.featuredImage}
            className="object-cover object-center w-full h-72 rounded-l-md"
          />
        </NavLink>
      </div>
      <div className={"col-span-2 border rounded-r-md px-5 py-8 space-y-3"}>
        <p className="text-sm text-gray-500">{dateDisplay}</p>
        <NavLink
          to={`/post-detail/${post.id}`}
          className="text-base font-bold duration-200 line-clamp-2 hover:text-purple-700"
        >
          {post.title}
        </NavLink>
        <p className="text-sm text-gray-500 line-clamp-3">{post.description}</p>
        <div className="flex flex-row items-center">
          <NavLink
            to={`/update-post/${post.id}`}
            className="inline-block px-4 py-2 text-sm font-semibold duration-200 border rounded-l-md hover:bg-gray-100"
          >
            Cập nhật
          </NavLink>
          <button
            onClick={(event) => {
              event.stopPropagation();
              handleDeletePost(post.id);
            }}
            className="inline-block px-4 py-2 text-sm font-semibold duration-200 border rounded-r-md hover:bg-gray-100"
          >
            Xóa
          </button>
        </div>
      </div>
    </li>
  );
}

export default Post;
