import { Outlet } from "react-router-dom";
import { Sidebar } from "./components";
import { useDispatch } from "react-redux";
import { initPostList } from "./app/postSlice";
import { useEffect } from "react";
import { getPosts } from "./api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await getPosts();
    dispatch(initPostList(res.data));
  }

  return (
    <main className={"grid grid-cols-12 relative"}>
      <Sidebar />
      <div className={"col-span-10"}>
        <Outlet />
      </div>
      <ToastContainer
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        closeOnClick={false}
        draggable={false}
      />
    </main>
  );
}

export default App;
