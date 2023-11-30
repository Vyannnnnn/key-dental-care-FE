import React from "react";

const CreateButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-[1px] border-[#21695C] px-3 py-2 rounded-md hover:bg-[#e0e0e0] text-[#21695C] hover:underline underline-offset-4 hover:border-white"
    >
      Tambah Data
    </button>
  );
};

export default CreateButton;
