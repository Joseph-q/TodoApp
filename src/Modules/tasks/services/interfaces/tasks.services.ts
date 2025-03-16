import api from "../../../../shared/core/api";
import { CreateTaskRequest } from "./CreateTaskRequest";
import { TaskResponse } from "./TaskResponse";
import { UpdateTaskRequest } from "./UpdateTaskRequest";

export const getTasks = async (): Promise<Array<TaskResponse>> => {
  try {
    return (await api.get("/tasks")).data;
  } catch (err) {
    console.error("Error al obtener los posts:", err);
    throw err;
  }
};

export const createTask = async (task: CreateTaskRequest): Promise<void> => {
  try {
    await api.post("/tasks", task);
    return;
  } catch (err) {
    console.error("Error al crear los posts:", err);
    throw err;
  }
};
export const updateTask = async ({
  id,
  task,
}: {
  id: number;
  task: UpdateTaskRequest;
}): Promise<void> => {
  try {
    await api.put(`/tasks/${id}`, task);
    return;
  } catch (err) {
    console.error("Error al actualizar los posts:", err);
    throw err;
  }
};

export const deleteTask = async ({ id }: { id: number }): Promise<void> => {
  try {
    await api.delete(`/tasks/${id}`);
    return;
  } catch (err) {
    console.error("Error al eliminar los posts:", err);
    throw err;
  }
};
