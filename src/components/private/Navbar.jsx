import React from "react";
import CreateButton from "./CreateButton";
import SearchButton from "./FilterButton";

const Navbar = (props) => {
  return (
    <nav className="">
      <div className="bg-[#21695C] h-[100px] flex items-center text-white px-[32px] justify-end">
        <p>Rima Yunita</p>
        <div className="h-[36px] w-[36px] bg-white rounded-full ml-[13px]"></div>
      </div>
      <div className="px-[31px] pt-[31px] bg-[#f8fafc]">
        <p className="text-[14px] text-black">
          Dashboard /<span className="text-slate-700">{props.breadcrumb}</span>
        </p>
        <div className="border-gray-300 w-full flex justify-between">
          <p className="text-[32px]">{props.page}</p>
          <div className="flex items-center">
            {props.showCreateButton && (
              <CreateButton onDataAdded={props.onDataAdded} />
            )}
            {props.showSearchButton && <SearchButton />}
          </div>
        </div>
        <div className="flex items-center mt-[27px]"></div>
      </div>
    </nav>
  );
};

export default Navbar;
