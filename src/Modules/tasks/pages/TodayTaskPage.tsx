import { useEffect, useState } from "react";
import HeaderTask from "../components/HeaderTask";
import TaskItem from "../components/TaskItem";
import { TaskResponse } from "../services/interfaces/TaskResponse";
import api from "../../../Shared/core/api";

export default function TodayTaskPage() {
  const [tasks, setTasks] = useState<TaskResponse[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await api.get("/tasks"); 
      setTasks(response.data); 
    };

    fetchTasks();
  }, []);

  return (
    <div className="flex flex-col ml-10 mt-5 mr-10">
      <HeaderTask title="Hoy" total={10}></HeaderTask>

      <div className="flex flex-col gap-1 mt-5">
        {tasks.map((t) => (
          <TaskItem title={t.title} description={t.description}></TaskItem>
        ))}
      </div>
    </div>
  );
}
