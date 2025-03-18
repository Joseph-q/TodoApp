import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  changeTaskStatus,
  deleteTask,
  getTasks,
} from "../services/tasks.services";
import { TaskResponse } from "../services/interfaces/TaskResponse";
import { OrderDirection } from "../../../shared/constants/orderDirection";
import GetTasksQueryParams from "../services/interfaces/GetTasksQueryParams";

import HeaderTask from "../components/HeaderTask";
import TaskItem from "../components/TaskItem";
import Modal from "../components/Modal";
import UpdateTaskForm from "../components/UpdateTaskForm";

export default function TodayTaskPage() {
  // Estado para controlar el modal y la tarea seleccionada
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [taskSelect, setTaskSelect] = useState<TaskResponse | null>(null);

  // Funciones para abrir y cerrar el modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Query client de react-query
  const queryClient = useQueryClient();

  // Mutation para cambiar el estado de la tarea
  const mutation = useMutation({
    mutationFn: changeTaskStatus,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  const mutationDelete = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  // Parámetros para la consulta de tareas
  const queryParams: GetTasksQueryParams = {
    page: 1,
    limit: 100,
    completed: false,
    order: OrderDirection.Desc,
  };

  function onDelete(task: TaskResponse) {
    mutationDelete.mutate({ id: task.id });
  }

  // Consulta para obtener las tareas
  const {
    data: tasks,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tasks", queryParams],
    queryFn: () => getTasks(queryParams),
  });

  if (isLoading) return <p>Cargando...</p>;

  if (error) return <p>Error al cargar las tareas</p>;

  function OnDblClic(task: TaskResponse) {
    setTaskSelect(task);

    openModal();
  }

  function onCompleteTask(task: TaskResponse) {
    const updatedStatus = !task.isCompleted;
    mutation.mutate({ id: task.id, isCompleted: updatedStatus });
  }

  return (
    <div className="flex flex-col ml-10 mt-5 mr-10">
      <HeaderTask title="Today" total={tasks!.length}></HeaderTask>
      <div className="flex flex-col gap-1 mt-5">
        {tasks!.map((t) => (
          <TaskItem
            onDelete={onDelete}
            key={t.id}
            OnDblClick={OnDblClic}
            task={t}
            onToggleComplete={onCompleteTask}
          ></TaskItem>
        ))}
      </div>

      {isModalOpen && taskSelect && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <UpdateTaskForm
            task={taskSelect}
            OnCancel={closeModal}
          ></UpdateTaskForm>
        </Modal>
      )}
    </div>
  );
}
