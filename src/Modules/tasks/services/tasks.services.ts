import api from "../../../shared/core/api";
import { CreateTaskRequest } from "./interfaces/CreateTaskRequest";
import GetTasksQueryParams from "./interfaces/GetTasksQueryParams";
import { TaskResponse } from "./interfaces/TaskResponse";
import { UpdateTaskRequest } from "./interfaces/UpdateTaskRequest";

export const getTasks = async (
  queryParams?: GetTasksQueryParams
): Promise<Array<TaskResponse>> => {
  let queryString: string | null = null;

  if (queryParams) {
    const query: Record<string, string> = {};
    // Solo agregar parámetros si existen
    if (queryParams.page !== undefined) {
      query.page = queryParams.page.toString();
    }
    if (queryParams.limit !== undefined) {
      query.limi = queryParams.limit.toString();
    }
    if (queryParams.completed !== undefined) {
      query.completed = queryParams.completed.toString();
    }
    if (queryParams.createdAt !== undefined) {
      query.createdAt = queryParams.createdAt;
    }
    if (queryParams.order !== undefined) {
      query.order = queryParams.order; // 'order' siempre es obligatorio
    }

    // Construir la cadena de consulta
    queryString = new URLSearchParams(query).toString();
  }
  try {
    return (await api.get(`/tasks${queryString ? `?${queryString}` : ""}`))
      .data;
  } catch (err) {
    console.error("Error al obtener las tareas:", err);
    throw err;
  }
};

export const createTask = async (task: CreateTaskRequest): Promise<void> => {
  try {
    await api.post("/tasks", task);
    return;
  } catch (err) {
    console.error("Error al crear las tareas", err);
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
    console.error("Error al actualizar las tareas", err);
    throw err;
  }
};

export const changeTaskStatus = async ({
  id,
  isCompleted,
}: {
  id: number;
  isCompleted: boolean;
}): Promise<void> => {
  try {
    await api.put(`/tasks/${id}`, { isCompleted });
    return;
  } catch (err) {
    console.error("Error al actualizar las tareas", err);
    throw err;
  }
};

export const deleteTask = async ({ id }: { id: number }): Promise<void> => {
  try {
    await api.delete(`/tasks/${id}`);
    return;
  } catch (err) {
    console.error("Error al eliminar las tareas", err);
    throw err;
  }
};
