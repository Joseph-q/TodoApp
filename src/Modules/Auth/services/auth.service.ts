import  { AxiosResponse } from "axios";
import api from "../../../shared/core/api";

export interface UserAuth {
  username: string;
  password: string;
}


const login = async (user: UserAuth): Promise<AxiosResponse> => {
  try {
    const res = await api.post<string>("/auth/login", user);
    localStorage.setItem("auth", res.data);
    return res;
  } catch (error) {
    console.error("Error en login:", error);
    throw new Error("No se pudo iniciar sesión. Verifica tus credenciales.");
  }
};

const register = async (user: UserAuth): Promise<AxiosResponse> => {
  return await api.post("/auth/register", user, {
    validateStatus: (status) => status < 500,
  });
};



export { login, register };
