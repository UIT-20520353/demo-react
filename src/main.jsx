import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Dashboard from "./pages/Dashboard.jsx";
import AddPost from "./pages/AddPost.jsx";
import UpdatePost from "./pages/UpdatePost.jsx";
import DetailPost from "./pages/DetailPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "add-post",
        element: <AddPost />,
      },
      { path: "update-post/:postId", element: <UpdatePost /> },
      { path: "post-detail/:postId", element: <DetailPost /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
