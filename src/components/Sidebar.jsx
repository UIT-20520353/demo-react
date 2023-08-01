import { NavLink } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { HiDocumentAdd } from "react-icons/hi";

function Sidebar() {
  return (
    <aside
      className={
        "w-full px-3 py-4 col-span-2 min-h-screen bg-gray-100 border-r"
      }
    >
      <ul className={"space-y-2 font-medium sticky top-5"}>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `flex flex-row items-center gap-x-3 p-2 hover:bg-gray-200 duration-300 rounded-md ${
                isActive && "bg-gray-200 shadow-md"
              }`
            }
          >
            <BiSolidDashboard className={"w-6 h-6"} />
            <span>Trang chủ</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/add-post"}
            className={({ isActive }) =>
              `flex flex-row items-center gap-x-3 p-2 hover:bg-gray-200 duration-300 rounded-md ${
                isActive && "bg-gray-200 shadow-md"
              }`
            }
          >
            <HiDocumentAdd className={"w-6 h-6"} />
            <span>Thêm bài viết</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export { Sidebar };
