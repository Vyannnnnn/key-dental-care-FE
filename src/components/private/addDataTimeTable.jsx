import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddDataTimeTable = ({ onDataAdded, authToken }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    HARI: "",
    TANGGAL: "",
    MULAI_PUKUL: "",
    SAMPAI_PUKUL: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
      HARI: "",
      TANGGAL: "",
      MULAI_PUKUL: "",
      SAMPAI_PUKUL: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = {
      hari: formData.HARI,
      tanggal: formData.TANGGAL,
      mulai_jam: formData.MULAI_PUKUL,
      sampai_jam: formData.SAMPAI_PUKUL,
    };
    console.log("Data yang dikirim:", formDataToSend);
    // formDataToSend.append("HARI", formData.HARI);
    // formDataToSend.append("TANGGAL", formData.TANGGAL);
    // formDataToSend.append("MULAI_PUKUL", formData.MULAI_PUKUL);
    // formDataToSend.append("SAMPAI_PUKUL", formData.SAMPAI_PUKUL);

    try {
      const response = await fetch("http://localhost:3000/api/timetable", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
           Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(formDataToSend),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("error data:", errorData);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Response Data:", responseData);
      toast.success("Data program berhasil ditambahkan!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      if (onDataAdded) {
        onDataAdded();
      }

      handleCloseModal();
    } catch (error) {
      console.error("error addded data:", error.message);
      toast.error(`Error: ${error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <button onClick={handleButtonClick} className="border-[1px] border-[#21695C] px-3 py-2 rounded-md hover:bg-[#e0e0e0] text-[#21695C] hover:underline underline-offset-4 hover:border-white">
        Tambah Data
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Tambah Jadwal</h2>
            <form onSubmit={handleSubmit}>
              <label className="block mb-2">Hari</label>
              <input type="text" name="HARI" value={formData.HARI} onChange={handleChange} required className="w-full p-2 border rounded mb-4" />

              <label className="block mb-2">Tanggal</label>
              <input type="date" name="TANGGAL" value={formData.TANGGAL} onChange={handleChange} required className="w-full p-2 border rounded mb-4" />

              <label className="block mb-2">Mulai Pukul</label>
              <input type="time" name="MULAI_PUKUL" value={formData.MULAI_PUKUL} onChange={handleChange} required className="w-full p-2 border rounded mb-4" />

              <label className="block mb-2">Sampai Pukul</label>
              <input type="time" name="SAMPAI_PUKUL" value={formData.SAMPAI_PUKUL} onChange={handleChange} required className="w-full p-2 border rounded mb-4" />

              <div className="flex justify-end gap-2">
                {/* <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
                Batal
              </button> */}
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
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
          </div>
        </div>
      )}
    </>
  );
};

export default AddDataTimeTable;
