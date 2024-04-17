import React, { useRef } from "react";

const Modal = ({ isOpen, title, onClose, children }) => {
  const modalRef = useRef();

  const handleClose = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      ref={modalRef}
      onClick={handleClose}
    >
      <div className="bg-white p-8 rounded-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
