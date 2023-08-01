import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addPost } from "../app/postSlice";
import { createPost } from "../api";
import { toast } from "react-toastify";
import { makeid } from "../utils/utils.js";
import { FormPost } from "../components";

function AddPost() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const publishDate = new Date().toISOString();
    const post = {
      id: makeid(6),
      publishDate,
      publish: true,
      featuredImage: data.imgSource,
      description: data.detail,
      title: data.title,
    };

    const response = await createPost(post);
    if (response.statusText === "Created") {
      dispatch(addPost(post));
      toast("Thêm mới bài viết thành công", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: false,
        type: "success",
      });
      reset();
    } else {
      toast("Xảy ra lỗi khi tạo bài viết", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: false,
        type: "error",
      });
    }
  };

  return (
    <FormPost
      title={"Thêm bài viết mới"}
      onSubmit={onSubmit}
      register={register}
      handleSubmit={handleSubmit}
      reset={reset}
      errors={errors}
    />
  );
}

export default AddPost;
