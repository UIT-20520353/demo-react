import { useSelector } from "react-redux";
import Post from "../components/Post";

function Dashboard() {
  const postList = useSelector((state) => state.post.postList);

  return (
    <div className={"w-full"}>
      <div className={"flex flex-col items-center mt-10 gap-4"}>
        <p className={"text-3xl font-bold"}>Blog Xàm</p>
        <p className={"text-base text-gray-500"}>
          Đừng bao giờ từ bỏ. Hôm nay khó khăn, ngày mai sẽ trở nên tồi tệ.
          Nhưng ngày mốt sẽ có nắng.
        </p>
      </div>
      <ul className={"grid grid-cols-2 gap-6 m-10 mt-20"}>
        {postList.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </ul>
    </div>
  );
}

export default Dashboard;
