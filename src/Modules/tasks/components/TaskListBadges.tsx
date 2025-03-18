import BadgeTask from "./BadgeTask";
import { getTasks } from "../services/tasks.services";
import { useQuery } from "@tanstack/react-query";
import GetTasksQueryParams from "../services/interfaces/GetTasksQueryParams";
import { OrderDirection } from "../../../shared/constants/orderDirection";

export default function TaskListBadges() {

  const queryParams: GetTasksQueryParams = {
      page: 1,
      limit: 10,
      completed: true,
      orderBy:"UpdatedAt",
      order: OrderDirection.Desc,
    };

  const { data: tasks, isLoading, error } = useQuery({
    queryKey: ["tasks", queryParams],
    queryFn: ()=> getTasks(queryParams),
  });

  if (isLoading) return <p>Cargando...</p>;

  if (error) return <p>Error al cargar las tareas</p>;

  return tasks!.map((t) => <BadgeTask key={t.id} task={t}></BadgeTask>);
}
