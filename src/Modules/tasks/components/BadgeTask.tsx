import { TaskResponse } from "../services/interfaces/TaskResponse";

interface Props{
  task:TaskResponse
}

export default function BadgeTask({task }:Props) {
  return (
    <div className="flex flex-col  shadow-md border-b-1 border-gray-500">
      <h4 className="text-base font-bold">{task.title}</h4>
      <p className="text-sm text-gray-400 font-thin">Completada: <span> {task.updatedAt}</span></p>
    </div>
  );
}
