import React, { useState } from "react";
import Modal from "./Modal"; // Asegúrate de ajustar la ruta según tu estructura de carpetas
import AddTaskForm from "./AddTaskForm";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const AddTaskModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="cursor-pointer w-full flex items-center font-bold py-2.5 px-5 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        <PlusCircleIcon className="h-7 w-7"></PlusCircleIcon>
        <span className="ml-3">
         Add Task
        </span>
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddTaskForm OnCancel={closeModal}></AddTaskForm>
      </Modal>
    </>
  );
};

export default AddTaskModal;
