import HeaderTask from "../components/HeaderTask";
import TaskItem from "../components/TaskItem";

export default function MainContent() {
  return (
    <div className="flex flex-col ml-10 mt-5 mr-10">
      <HeaderTask title="Hoy" total={10}></HeaderTask>

      <div className="flex flex-col gap-1 mt-5">
        <TaskItem
          title="Hola mundo"
          description="Como estas espero que bien "
        ></TaskItem>
        <TaskItem
          title="Hola mundo"
          description="Como estas espero que bien "
        ></TaskItem>
        <TaskItem
          title="Hola mundo"
          description="Como estas espero que bien "
        ></TaskItem>
        <TaskItem
          title="Hola mundo"
          description="Como estas espero que bien "
        ></TaskItem>
        <TaskItem
          title="Hola mundo"
          description="Como estas espero que bien "
        ></TaskItem>
      </div>
    </div>
  );
}
