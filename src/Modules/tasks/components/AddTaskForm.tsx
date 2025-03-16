import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { createTask } from "../services/interfaces/tasks.services";

interface Props {
  OnCancel: () => void;
}

export default function AddTaskForm({ OnCancel }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({ title: "", description: "" });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const validateForm = () => {
    let formIsValid = true;
    let titleError = "";
    let descriptionError = "";

    // Validar título
    if (title.trim() === "") {
      titleError = "El título es obligatorio";
      formIsValid = false;
    }

    // Validar descripción
    if (description.trim() === "") {
      descriptionError = "La descripción es obligatoria";
      formIsValid = false;
    }

    setErrors({ title: titleError, description: descriptionError });
    return formIsValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    mutation.mutate({ title, description });
    setTitle("");
    setDescription("");
    OnCancel();
  };

  return (
    <>
      <h2 className="text-xl font-semibold">Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="border-1 p-2 w-full mt-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="h-3">
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        <textarea
          placeholder="Description"
          className="border-1 p-2 w-full mt-4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div className="h-3">
          {errors.description && (
            <p className="text-red-500 text-sm ">{errors.description}</p>
          )}
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={OnCancel}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
          >
            Cerrar
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-2 hover:bg-blue-600"
          >
            Agregar
          </button>
        </div>
      </form>
    </>
  );
}
