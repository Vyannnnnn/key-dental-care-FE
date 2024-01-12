import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProgramDetailModal = ({ isOpen, onClose, programData }) => {
  const [editedData, setEditedData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setEditedData({
        Nama_Program: programData?.nama_program || "",
        Harga_Program: programData?.harga_program || "",
        Deskripsi_Program: programData?.deskripsi_program || "",
        Thumbnail: programData?.thumbnail || "",
      });
    }
  }, [isOpen, programData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch(
        `https://keydentalcare.isepwebtim.my.id/api/program/${programData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Nama_Program: editedData.Nama_Program,
            Harga: editedData.Harga_Program,
            Deskripsi: editedData.Deskripsi_Program,
            Thumbnail: editedData.Thumbnail,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(
          `HTTP error! Status: ${response.status}, Data: ${errorData}`
        );
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        setTimeout(() => {
          onClose();
        }, 1000);
        toast.success("Changes saved successfully!");
        console.log("Data added successfully:", data);
      } else {
        throw new Error("Invalid JSON response from the server");
      }
    } catch (error) {
      console.error("Error saving changes:", error.message);
      setError("Error saving changes. Please try again.");
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 w-full">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Detail Program
                  </h3>
                  <button
                    onClick={onClose}
                    type="button"
                    className="inline-flex justify-center items-center rounded-md border border-transparent p-2 text-base font-medium text-white hover:bg-[#dadada] focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    <img
                      className="w-4 h-4"
                      src="/close.svg"
                      alt="Close Icon"
                    />
                  </button>
                </div>
                <div className="mb-4">
                  <label className="text-sm text-gray-500">Nama Program</label>
                  <input
                    type="text"
                    name="Nama_Program"
                    value={editedData.Nama_Program || ""}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-sm text-gray-500">Harga</label>
                  <input
                    type="text"
                    name="Harga_Program"
                    value={editedData.Harga_Program || ""}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-sm text-gray-500">Deskripsi</label>
                  <input
                    type="text"
                    name="Deskripsi_Program"
                    value={editedData.Deskripsi_Program || ""}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-sm text-gray-500">Thumbnail</label>
                  <input
                    type="file"
                    name="Thumbnail"
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={handleSaveChanges}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#0EA5E9] text-base font-medium text-white hover:bg-[#dadada] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0EA5E9] sm:ml-3 sm:w-auto sm:text-sm"
            >
              Update
            </button>
          </div>
          {error && <div className="text-red-500 mt-4">{error}</div>}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ProgramDetailModal;
