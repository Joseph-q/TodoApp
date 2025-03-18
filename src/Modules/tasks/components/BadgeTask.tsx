import { TaskResponse } from "../services/interfaces/TaskResponse";

interface Props {
  task: TaskResponse;
}

export default function BadgeTask({ task }: Props) {
  return (
    <div className="flex flex-col  shadow-md border-b-1 border-gray-500">
      <h4 className="text-base font-bold">{task.title}</h4>
      <p className="text-sm text-gray-400 font-thin flex flex-col">
        Completed: <span>
          {new Date(task.updatedAt ?? Date.now()).toLocaleString("en-US", {
            day: "numeric",
            month: "long",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </p>
    </div>
  );
}
