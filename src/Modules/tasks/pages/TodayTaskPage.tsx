import HeaderTask from "../components/HeaderTask";
import TaskItem from "../components/TaskItem";
import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../services/interfaces/tasks.services";

export default function TodayTaskPage() {
  const { data: tasks, isLoading, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  if (isLoading) return <p>Cargando...</p>;

  if (error) return <p>Error al cargar las tareas</p>;

  return (
    <div className="flex flex-col ml-10 mt-5 mr-10">
      <HeaderTask title="Hoy" total={10}></HeaderTask>

      <div className="flex flex-col gap-1 mt-5">
        {tasks!.map((t) => (
          <TaskItem title={t.title} description={t.description}></TaskItem>
        ))}
      </div>
    </div>
  );
}
