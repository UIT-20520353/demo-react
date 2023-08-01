import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postList: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    initPostList: (state, action) => {
      const posts = action.payload;
      state.postList = posts;
    },
    deletePost: (state, action) => {
      const postId = action.payload;
      state.postList = state.postList.filter((post) => post.id !== postId);
    },
    addPost: (state, action) => {
      const post = action.payload;
      state.postList.push(post);
    },
    updatePost: (state, action) => {
      const { postId, data } = action.payload;
      state.postList = state.postList.map((post) => {
        if (post.id === postId)
          return {
            ...post,
            title: data.title,
            description: data.detail,
            featuredImage: data.imgSource,
          };
        else return post;
      });
    },
  },
});

export const { initPostList, deletePost, addPost, updatePost } =
  postSlice.actions;

export default postSlice.reducer;
