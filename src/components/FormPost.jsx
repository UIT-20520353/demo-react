function FormPost({ onSubmit, register, handleSubmit, reset, errors, title }) {
  const resetForm = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"m-10 space-y-4"}>
      <h2 className="text-2xl font-medium">{title}</h2>
      <div>
        <label
          htmlFor="post__title"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Tiêu đề
        </label>
        <input
          type="text"
          id="post__title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Nhập tiêu đề của bài viết"
          autoComplete="off"
          {...register("title", { required: "Vui lòng nhập tiêu đề bài viết" })}
        />
        {errors.title && (
          <span className="text-xs font-medium text-red-500">
            {errors.title.message}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor="post__detail"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Chi tiết
        </label>
        <textarea
          id="post__detail"
          className="resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Nhập chi tiết nội dung của bài viết"
          autoComplete="off"
          rows={10}
          {...register("detail", {
            required: "Vui lòng nhập nội dung bài viết",
          })}
        />
        {errors.detail && (
          <span className="text-xs font-medium text-red-500">
            {errors.detail.message}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor="post__img"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Đường dẫn ảnh
        </label>
        <input
          type="text"
          id="post__img"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Đường dẫn cho hình ảnh của bài viết"
          autoComplete="off"
          {...register("imgSource", {
            required: "Vui lòng nhập đường dẫn của ảnh",
          })}
        />
        {errors.imgSource && (
          <span className="text-xs font-medium text-red-500">
            {errors.imgSource.message}
          </span>
        )}
      </div>
      <div className="flex flex-row items-center justify-end gap-x-4">
        <button
          type="submit"
          className="px-4 py-2 text-white bg-green-700 min-w-[150px] rounded-lg hover:bg-green-600 duration-200"
        >
          Lưu
        </button>
        <button
          onClick={resetForm}
          type="button"
          className="px-4 py-2 text-white bg-red-700 min-w-[150px] rounded-lg hover:bg-red-600 duration-200"
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export { FormPost };
