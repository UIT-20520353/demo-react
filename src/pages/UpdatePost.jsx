import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FormPost } from "../components";
import { updatePostById } from "../api";
import { updatePost } from "../app/postSlice";
import { toast } from "react-toastify";

function UpdatePost() {
  const { postId } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.postList);
  const [post, setPost] = useState(null);

  const onSubmit = async (data) => {
    const response = await updatePostById(
      postId,
      data.title,
      data.detail,
      data.imgSource
    );
    if (response) {
      dispatch(updatePost({ postId, data }));
      toast("Cập nhật bài viết thành công", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: false,
        type: "success",
      });
    } else {
      toast("Xảy ra lỗi khi cập nhật bài viết", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: false,
        type: "error",
      });
    }
  };

  useEffect(() => {
    const temp = postList.find((p) => p.id === postId);
    if (!temp) return;

    setPost(temp);
    setValue("title", temp.title);
    setValue("detail", temp.description);
    setValue("imgSource", temp.featuredImage);
  }, []);

  if (!post) return <div className="m-10">Loading...</div>;

  return (
    <FormPost
      title={"Cập nhật thông tin bài viết"}
      onSubmit={onSubmit}
      register={register}
      handleSubmit={handleSubmit}
      reset={reset}
      errors={errors}
    />
  );
}

export default UpdatePost;
