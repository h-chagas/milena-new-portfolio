// components/Modal.js
import React from "react";

const Modal = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4"> Reduced Availability Notice </h2>
        <p>Please be advised that my availability is currently limited. If you send me a message, please understand that there may be a delay in my response.</p>
        <button 
          onClick={() => setShowModal(false)} 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
