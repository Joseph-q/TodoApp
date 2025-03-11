interface Props {
  title: string;
  description: string;
}

export default function TaskItem({ title, description }: Props) {
  function OnDblClick() {}

  return (
    <div onDoubleClick={OnDblClick} className="
    bg-white hover:bg-gray-100
    flex dark:bg-gray-800 p-5 cursor-pointer select-none dark:hover:bg-gray-700">
      <div className="flex items-center h-5">
        <input
          id="helper-checkbox"
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <div className="ms-2 text-sm">
        <label
          className="font-medium text-gray-900 dark:text-gray-300"
        >
          {title}
        </label>
        <p
          className="text-xs font-normal text-gray-500 dark:text-gray-400"
        >
          {description}
        </p>
      </div>
    </div>
  );
}
