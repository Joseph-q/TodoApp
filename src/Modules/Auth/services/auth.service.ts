import axios, { AxiosResponse } from "axios";
import api from "../../../shared/core/api";

export interface UserAuth {
  username: string;
  password: string;
}

const login = async (user: UserAuth): Promise<AxiosResponse> => {
  try {
    const res = await api.post<string>("/auth/login", user);
    localStorage.setItem("auth", res.data);
    return res
  } catch (error) {
    console.error("Error en login:", error);
    throw new Error("No se pudo iniciar sesión. Verifica tus credenciales.");
  }
};

const register = async (user: UserAuth): Promise<AxiosResponse> => {
    try {
      return await api.post("/auth/register", user);
    } catch (error) {
      // Si es un error de Axios (con estado HTTP)
      if (axios.isAxiosError(error)) {
        // Lanza el error con la respuesta de la API, así puedes acceder a detalles como status
        throw error.response;
      }
      // Si no es un error de Axios, lanza un error genérico
      throw new Error("No se pudo registrar el usuario.");
    }
  };

export { login, register };
