import { TrashIcon } from "@heroicons/react/24/outline";
import { TaskResponse } from "../services/interfaces/TaskResponse";

interface Props {
  task: TaskResponse;
  OnDblClick: (task: TaskResponse) => void;
  onToggleComplete: (task: TaskResponse) => void;
  onDelete:(task:TaskResponse)=>void;
}

export default function TaskItem({
  task,
  OnDblClick,
  onToggleComplete,
  onDelete
}: Props) {
  return (
    <div
    onDoubleClick={() => OnDblClick(task)}
    className="bg-white hover:bg-gray-100 flex dark:bg-gray-800 p-5 dark:hover:bg-gray-700 rounded-lg shadow-md items-center justify-between"
  >
    <div className="flex items-center gap-3">
      <input
        id={`checkboxTask-${task.id}`}
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onToggleComplete(task)}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <div className="text-sm">
        <label className="font-medium text-gray-900 dark:text-gray-300">
          {task.title}
        </label>
        <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
          {task.description}
        </p>
      </div>
    </div>
    
    <button 
      onClick={() => onDelete(task)}
      className="cursor-pointer bg-red-600 hover:bg-red-800 text-white p-2 rounded-lg transition-colors"
      >
      <TrashIcon className="h-5 w-5" />
    </button>
  </div>
  );
}
