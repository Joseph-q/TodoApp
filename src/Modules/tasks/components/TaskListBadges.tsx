import { useEffect, useState } from "react";
import { TaskResponse } from "../services/interfaces/TaskResponse";
import BadgeTask from "./BadgeTask";
import api from "../../../Shared/core/api";

export default function TaskListBadges() {
  const [tasks, setTasks] = useState<TaskResponse[]>([]);

  useEffect(() => {
    // Función para obtener las tareas del usuario
    const fetchTasks = async () => {
      const response = await api.get("/tasks"); // Endpoint de la API
      setTasks(response.data); // Guardar los datos de las tareas
    };

    fetchTasks();
  }, []);

  return tasks.map((t) => <BadgeTask title={t.title}></BadgeTask>);
}
