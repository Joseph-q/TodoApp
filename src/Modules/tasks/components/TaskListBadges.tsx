import BadgeTask from "./BadgeTask";
import { getTasks } from "../services/interfaces/tasks.services";
import { useQuery } from "@tanstack/react-query";

export default function TaskListBadges() {

  const { data: tasks, isLoading, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  if (isLoading) return <p>Cargando...</p>;

  if (error) return <p>Error al cargar las tareas</p>;

  return tasks!.map((t) => <BadgeTask title={t.title}></BadgeTask>);
}
