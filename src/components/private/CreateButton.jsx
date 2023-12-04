import React, { useState } from "react";

const CreateButton = ({ onDataAdded }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    Nama_Program: "",
    Harga: "",
    Deskripsi: "",
    Thumbnail: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
      Nama_Program: "",
      Harga: "",
      Deskripsi: "",
      Thumbnail: "",
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://keydentalcare.isepwebtim.my.id/api/programs/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      console.log("Data berhasil ditambahkan!");

      if (onDataAdded) {
        onDataAdded();
      }

      handleCloseModal();
    } catch (error) {
      console.error("Error saat menambahkan data:", error.message);
    }
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className="border-[1px] border-[#21695C] px-3 py-2 rounded-md hover:bg-[#e0e0e0] text-[#21695C] hover:underline underline-offset-4 hover:border-white"
      >
        Tambah Data
      </button>

      {isModalOpen && (
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
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900 mb-6"
                      id="modal-headline"
                    >
                      Detail Program
                    </h3>
                    <form onSubmit={handleSubmitForm}>
                      <div className="mb-4">
                        <label className="text-sm text-gray-500">
                          Nama Program
                        </label>
                        <input
                          type="text"
                          name="Nama_Program"
                          value={formData.Nama_Program}
                          onChange={handleInputChange}
                          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="text-sm text-gray-500">Harga</label>
                        <input
                          type="text"
                          name="Harga"
                          value={formData.Harga}
                          onChange={handleInputChange}
                          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="text-sm text-gray-500">
                          Deskripsi
                        </label>
                        <input
                          type="text"
                          name="Deskripsi"
                          value={formData.Deskripsi}
                          onChange={handleInputChange}
                          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="text-sm text-gray-500">
                          Thumbnail
                        </label>
                        <input
                          type="text"
                          name="Thumbnail"
                          value={formData.Thumbnail}
                          onChange={handleInputChange}
                          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                          type="submit"
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#21695c] text-base font-medium text-white hover:bg-[#165c4a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#21695c] sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Save Changes
                        </button>
                        <button
                          type="button"
                          onClick={handleCloseModal}
                          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#21695c] sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateButton;
