import HeaderTask from "../components/HeaderTask";
import TaskItem from "../components/TaskItem";
import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../services/interfaces/tasks.services";
import { TaskResponse } from "../services/interfaces/TaskResponse";
import { useState } from "react";
import Modal from "../components/Modal";
import UpdateTaskForm from "../components/UpdateTaskForm";

export default function TodayTaskPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [taskSelect, setTaskSelect] = useState<TaskResponse | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const {
    data: tasks,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  if (isLoading) return <p>Cargando...</p>;

  if (error) return <p>Error al cargar las tareas</p>;

  function OnDblClic(task: TaskResponse) {
    setTaskSelect(task);

    openModal();
  }

  return (
    <div className="flex flex-col ml-10 mt-5 mr-10">
      <HeaderTask title="Hoy" total={10}></HeaderTask>
      <div className="flex flex-col gap-1 mt-5">
        {tasks!.map((t) => (
          <TaskItem key={t.id} OnDblClick={OnDblClic} task={t}></TaskItem>
        ))}
      </div>
      {isModalOpen && taskSelect != null && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <UpdateTaskForm task={taskSelect} OnCancel={closeModal}></UpdateTaskForm>
        </Modal>
      )}
    </div>
  );
}
