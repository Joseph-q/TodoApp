import api from "../../../../shared/core/api";
import { CreateTaskRequest } from "./CreateTaskRequest";
import { TaskResponse } from "./TaskResponse";

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
    console.error("Error al obtener los posts:", err);
    throw err;
  }
};
