import { CalendarIcon, ListBulletIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { getTasks } from "../services/tasks.services";
import GetTasksQueryParams from "../services/interfaces/GetTasksQueryParams";
import { OrderDirection } from "../../../shared/constants/orderDirection";

export default function SideBarLinksList() {
  const queryParams: GetTasksQueryParams = {
    page: 1,
    limit: 100,
    completed: false,
    order: OrderDirection.Desc,
  };

  const { data: tasks } = useQuery({
    queryKey: ["tasks", queryParams],
    queryFn: () => getTasks(queryParams),
  });

  return (
    <ul className="space-y-2 font-medium">
      <li>
        <Link
          to="/tasks/today"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <CalendarIcon className="h-6 w-6"></CalendarIcon>
          <span className="flex-1 ms-3 whitespace-nowrap">Hoy</span>
          <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
            {tasks?.length}
          </span>
        </Link>
      </li>
      <li>
        <Link
          to="/tasks/all"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <ListBulletIcon className="h-6 w-6"></ListBulletIcon>
          <span className="flex-1 ms-3 whitespace-nowrap">Tareas</span>
        </Link>
      </li>
    </ul>
  );
}
