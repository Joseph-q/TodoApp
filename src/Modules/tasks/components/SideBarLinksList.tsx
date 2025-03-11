import { CalendarIcon, ListBulletIcon } from "@heroicons/react/24/solid";

export default function SideBarLinksList() {
  return (
    <ul className="space-y-2 font-medium">
      <li>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <CalendarIcon className="h-6 w-6"></CalendarIcon>
          <span className="flex-1 ms-3 whitespace-nowrap">Hoy</span>
          <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
            3
          </span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <ListBulletIcon className="h-6 w-6"></ListBulletIcon>
          <span className="flex-1 ms-3 whitespace-nowrap">Tareas</span>
        </a>
      </li>
    </ul>
  );
}
