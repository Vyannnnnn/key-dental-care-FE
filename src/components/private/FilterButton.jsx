import React from "react";
import { CiFilter } from "react-icons/ci";

const FilterButton = () => {
  return (
    <div className="px-3 py-2 rounded-md flex justify-center items-center hover:underline underline-offset-4 hover:bg-[#e0e0e0] text-[#21695C]">
      <CiFilter />
      <button>Filter</button>
    </div>
  );
};

export default FilterButton;
