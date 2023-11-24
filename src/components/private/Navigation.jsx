import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation h-screen w-[300px]">
      <aside className="fixed flex flex-col w-[300px] h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <Link to="/admin" className="mx-auto">
          <img className="w-auto h-12" src="/logo.svg" alt="" />
        </Link>
        <div className="flex flex-col justify-between flex-1 mt-12">
          <nav className="flex flex-col">
            <div>
              <Link
                // bg-gray-100
                className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="/admin"
              >
                <img className="w-auto h-[16px]" src="/dashboard.svg" alt="" />
                <span className="mx-4 font-medium">Dashboard</span>
              </Link>

              <Link
                className="flex items-center px-4 py-2 mt-5  text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="/admin/data_pasien"
              >
                <img
                  className="w-auto h-[16px]"
                  src="/data_pasien.svg"
                  alt=""
                />
                <span className="mx-4 font-medium">Data Pasien</span>
              </Link>

              <Link
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="/admin/data_antrian"
              >
                <img
                  className="w-auto h-[16px]"
                  src="/data_antrian.svg"
                  alt=""
                />
                <span className="mx-4 font-medium">Data Antrian</span>
              </Link>

              <Link
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="/admin/data_program"
              >
                <img
                  className="w-auto h-[16px]"
                  src="/data_program.svg"
                  alt=""
                />
                <span className="mx-4 font-medium">Data Program</span>
              </Link>

              <Link
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="/admin/jadwal"
              >
                <img className="w-auto h-[16px]" src="/jadwal.svg" alt="" />
                <span className="mx-4 font-medium">Jadwal</span>
              </Link>

              <Link
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="/admin/konsultasi"
              >
                <img className="w-auto h-[16px]" src="/konsultasi.svg" alt="" />
                <span className="mx-4 font-medium">Konsultasi</span>
              </Link>
            </div>

            <div className="mt-24 ">
              <Link
                className="bg-[#21695C] text-white flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-[#165549]
                 border-2  hover:text-white"
                to="/login"
              >
                <img className="w-auto h-[16px]" src="/logout.svg" alt="" />
                <span className="mx-4 font-medium">Log Out</span>
              </Link>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Navigation;
