import React from "react";

const Navbar = () => {
  return (
    <nav className="h-1/4 bg-emerald-700">
      <div className="h-full flex items-start justify-between px-6 py-6 text-white">
          <span>Data Antrian</span>

          <div className="flex flex-row items-center gap-3">
          <div className="flex items-center gap-3">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100"
              alt=""
            />
          </div>
          <span>Drg. Rima</span>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
