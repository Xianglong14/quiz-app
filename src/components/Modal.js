import React from "react";

const Modal = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-xl font-bold text-center text-red-600 mb-4">Error</h2>
                <p className="text-center text-gray-700 mb-4">{message}</p>
                <div className="flex justify-center">
                    <button
                        onClick={onClose}
                        className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
