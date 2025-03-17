import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { createTask } from "../services/tasks.services";

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
            className="text-white bg-red-600 border border-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:border-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Close
          </button>
          <button
            type="submit"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
