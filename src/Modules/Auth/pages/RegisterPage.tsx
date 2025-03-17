import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router";
import { register, UserAuth } from "../services/auth.service";
import axios from "axios";

export default function RegisterPage() {
  const [user, setUser] = useState<UserAuth>({ username: "", password: "" });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");  // Limpiar errores previos
  
    try {
      await register(user);  // Llamar a la función de registro
  
      // Si la respuesta es correcta, redirigir al login
      navigate("/login");
  
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          console.log(err.status)
        // Si el error es de Axios, verifica el código de estado
        if (err.response.status != 400) {
          setError("User already exists");
        } else {
          // Si es otro tipo de error de la API, mostrar mensaje genérico
          setError("Ocurrió un error al registrar el usuario");
        }
      } else {
        // Si el error no es de Axios, es un error genérico
        setError("Credenciales incorrectas");
      }
    }
  };
  
  

  return (
    <div className="w-96 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Register
      </h2>
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          value={user.username}
          onChange={handleChange}
          className="w-full p-2 mb-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={user.password}
          onChange={handleChange}
          className="w-full p-2 mb-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Register
        </button>
      </form>
      <Link
        to="/auth/login"
        className="text-blue-500 hover:text-blue-700 underline focus:outline-none"
      >
        Already have an account? Log in here!
      </Link>
    </div>
  );
}
