import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface Props {
  isOpen: boolean; // Para controlar si el modal está abierto o cerrado
  onClose: () => void; // Función para cerrar el modal
  children: React.ReactNode; // El contenido que se renderiza dentro del modal
}

const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    // Añadir o eliminar el evento de cierre al presionar 'Escape'
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    } else {
      document.removeEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-xs">
      <div className="dark:bg-gray-900 shadow-lg rounded-2xl p-4 mt-5 md:w-1/3">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body // Renderizar el modal directamente en el body
  );
};

export default Modal;
