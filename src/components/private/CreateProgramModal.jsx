import React, { useState } from "react";

const CreateProgramModal = ({ isOpen, onClose, onCreate }) => {
  const [programData, setProgramData] = useState({
    Nama_Program: "",
    Harga: "",
    Deskripsi: "",
    Thumbnail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProgramData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreate = () => {
    if (
      !programData.Nama_Program ||
      !programData.Harga ||
      !programData.Deskripsi
    ) {
      alert("Nama Program, Harga, dan Deskripsi harus diisi.");
      return;
    }

    onCreate(programData);

    setProgramData({
      Nama_Program: "",
      Harga: "",
      Deskripsi: "",
      Thumbnail: "",
    });
    onClose();
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? "" : "hidden"}`}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                {/* Heroicon name: outline/check */}
                <svg
                  className="h-6 w-6 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Tambah Program
                </h3>
                <div className="mt-2">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Nama Program
                    </label>
                    <input
                      type="text"
                      name="Nama_Program"
                      value={programData.Nama_Program}
                      onChange={handleChange}
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Harga
                    </label>
                    <input
                      type="text"
                      name="Harga"
                      value={programData.Harga}
                      onChange={handleChange}
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Deskripsi
                    </label>
                    <textarea
                      name="Deskripsi"
                      value={programData.Deskripsi}
                      onChange={handleChange}
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Thumbnail
                    </label>
                    <input
                      type="text"
                      name="Thumbnail"
                      value={programData.Thumbnail}
                      onChange={handleChange}
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={handleCreate}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Tambahkan
            </button>
            <button
              onClick={onClose}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProgramModal;
