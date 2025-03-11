import CheckSvg from "./CheckSvg";

interface Props {
  title:string,
  total:number
}

export default function HeaderTask({title, total}:Props) {
  return (
    <header className="flex flex-col">
      <h1 className="text-4xl ">{title}</h1>
      <div className="flex items-center text-gray-500 dark:text-gray-400">
        <CheckSvg></CheckSvg>
        <span className="ml-1 text-sm">{total} tareas</span>
      </div>
    </header>
  );
}
