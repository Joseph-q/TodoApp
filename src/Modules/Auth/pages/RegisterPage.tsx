import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router";
import { register, UserAuth } from "../services/auth.service";

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
      const res = await register(user);  // Llamar a la función de registro

      
      if(res.status >=400&& res.status < 500){

        setError(res.data)
        return
      }

      navigate("/auth/login");
  
    } catch {
       
        setError("Somenthing goes wrong try again in other moment");
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
