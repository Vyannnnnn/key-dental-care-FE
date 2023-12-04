import React, { useState, useEffect } from "react";

const TimetableDetailModal = ({ isOpen, onClose, timetableData }) => {
  const [editedData, setEditedData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setEditedData({
        Hari: timetableData.hari || "",
        Tanggal: timetableData.tanggal || "",
        Mulai_Pukul: timetableData.mulai_jam || "",
        Sampai_Pukul: timetableData.sampai_jam || "",
      });
    }
  }, [isOpen, timetableData]);

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
        `https://keydentalcare.isepwebtim.my.id/api/timetable/${timetableData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      onClose();
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
                <h3
                  className="text-lg leading-6 font-medium text-gray-900 mb-6"
                  id="modal-headline"
                >
                  Detail Jadwal
                </h3>
                <div className="mb-4">
                  <label className="text-sm text-gray-500">Hari</label>
                  <input
                    type="text"
                    name="Hari"
                    value={editedData.Hari}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-sm text-gray-500">Tanggal</label>
                  <input
                    type="date"
                    name="Tanggal"
                    value={editedData.Tanggal || ""}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-sm text-gray-500">Mulai Pukul</label>
                  <input
                    type="time"
                    name="Mulai_Pukul"
                    value={editedData.Mulai_Pukul || ""}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-sm text-gray-500">Sampai Pukul</label>
                  <input
                    type="time"
                    name="Sampai_Pukul"
                    value={editedData.Sampai_Pukul || ""}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={handleSaveChanges}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#21695c] text-base font-medium text-white hover:bg-[#165c4a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#21695c] sm:ml-3 sm:w-auto sm:text-sm"
            >
              Save Changes
            </button>
            <button
              onClick={onClose}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#21695c] sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
          {error && <div className="text-red-500 mt-4">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default TimetableDetailModal;
