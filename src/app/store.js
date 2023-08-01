import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../app/postSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
