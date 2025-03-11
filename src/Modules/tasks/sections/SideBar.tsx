import { useState } from "react";
import BadgeTask from "../components/BadgeTask";
import SideBarLinksList from "../components/SideBarLinksList";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";

interface Props {
  children: React.ReactNode;
}

export default function SideBar({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 bg-gray-50 dark:bg-gray-800">
          <header className="mb-8 mt-2">
            <a className="flex items-center space-x-2 cursor-pointer" href="#">
              <ArrowLeftStartOnRectangleIcon className="h-6 w-6 " />
              <span className=" font-medium">Log out</span>
            </a>
          </header>

          <SideBarLinksList></SideBarLinksList>

          <div className="flex flex-col dark:bg-gray-900 shadow-lg rounded-2xl p-4 mt-5">
            <h3 className="text-2xl font-extrabold mb-2">Completas</h3>
            <div className="overflow-y-auto flex h-[50vh] flex-col gap-5">
              <BadgeTask></BadgeTask>
              <BadgeTask></BadgeTask>
              <BadgeTask></BadgeTask>
              <BadgeTask></BadgeTask>
              <BadgeTask></BadgeTask>
              <BadgeTask></BadgeTask>
              <BadgeTask></BadgeTask>
              <BadgeTask></BadgeTask>
            </div>
          </div>
        </div>
      </aside>
      <main
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "ml-0" : "ml-64"
        }`}
      >
        {children}
      </main>
    </>
  );
}
