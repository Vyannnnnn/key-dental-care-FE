import React from "react";
import AddDataProgram from "./AddDataProgram";
import FilterButton from "./FilterButton";
import AddDataTimeTable from "./addDataTimeTable";
import AddDataAntrian from "./AddDataAntrian";

const Navbar = ({ breadcrumb, page, showAddDataProgram, showAddDataTimeTable, showAddDataAntrian,onDataAdded, showFilterButton }) => {
  return (
    <nav>
      {/* Header */}
      <div className="bg-[#21695C] h-[100px] flex items-center text-white px-[32px] justify-end">
        <p>Rima Yunita</p>
        <div className="h-[36px] w-[36px] bg-white rounded-full ml-[13px] overflow-hidden">
          <img
            src="/image.jpg" // Perbaiki path
            alt="Profile"
            className="rounded-full h-[36px] w-[36px] object-cover"
          />
        </div>
      </div>

      {/* Breadcrumb & Title */}
      <div className="px-[31px] pt-[31px] bg-[#f8fafc]">
        <p className="text-[14px] text-black">
          Dashboard / <span className="text-slate-700">{breadcrumb}</span>
        </p>
        <div className="border-gray-300 w-full flex justify-between items-center">
          <p className="text-[32px]">{page}</p>
          <div className="flex items-center gap-2">
            {showAddDataProgram && <AddDataProgram onDataAdded={onDataAdded} />}
            {showAddDataTimeTable && <AddDataTimeTable onDataAdded={onDataAdded} />}
            {showAddDataAntrian && <AddDataAntrian onDataAdded={onDataAdded} />}
            {showFilterButton && <FilterButton />}
          </div>
        </div>
      </div>

      {/* Children */}
      {/* <div className="p-4">{children}</div> */}
    </nav>
  );
};

export default Navbar;
