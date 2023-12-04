import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PiMonitor } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { GoStack } from "react-icons/go";
import { BsFileEarmarkText } from "react-icons/bs";
import { BsCalendar4 } from "react-icons/bs";
import { BsChatLeftDots } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";

const Navigation = () => {
  const location = useLocation();
  const isDashboard = location.pathname === "/admin";
  const isData_pasien = location.pathname === "/admin/data_pasien";
  const isData_antrian = location.pathname === "/admin/data_antrian";
  const isData_program = location.pathname === "/admin/data_program";
  const isJadwal = location.pathname === "/admin/jadwal";
  const isKonsultasi = location.pathname === "/admin/konsultasi";

  return (
    <div className="navigation h-screen w-[300px]">
      <aside className="fixed flex flex-col w-[300px] h-screen px-4 py-8 overflow-y-auto bg-[#f8fafc] border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <Link to="/admin" className="mx-auto">
          <img className="w-auto h-12" src="/logo.svg" alt="" />
        </Link>
        <div className="flex flex-col justify-between flex-1 mt-12">
          <nav className="flex flex-col">
            <div>
              <Link
                className={`flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-md hover:underline underline-offset-4  ${
                  isDashboard
                    ? "bg-[#21695c] text-white hover:bg-[#21695c]"
                    : "hover:bg-[#e0e0e0] hover:text-[#21695c]"
                }`}
                to="/admin"
              >
                <PiMonitor
                  size="1.3em"
                  style={{
                    fill: isDashboard ? "#ffffff" : "#21695c",
                    marginRight: "4px",
                  }}
                />
                <span className="mx-4 font-medium">Dashboard</span>
              </Link>

              <Link
                className={`flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-md hover:underline underline-offset-4 ${
                  isData_pasien
                    ? "bg-[#21695c] text-white hover:bg-[#21695c]"
                    : "hover:bg-[#e0e0e0] hover:text-[#21695c]"
                }`}
                to="/admin/data_pasien"
              >
                <FaRegUser
                  size="1.1em"
                  style={{
                    fill: isData_pasien ? "#ffffff" : "#21695c",
                    marginRight: "8px",
                    marginLeft: "1px",
                  }}
                />
                <span className="mx-4 font-medium">Data Pasien</span>
              </Link>

              <Link
                className={`flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-md hover:underline underline-offset-4   ${
                  isData_antrian
                    ? "bg-[#21695c] text-white hover:bg-[#21695c]"
                    : "hover:bg-[#e0e0e0] hover:text-[#21695c]"
                }`}
                to="/admin/data_antrian"
              >
                <GoStack
                  size="1.1em"
                  style={{
                    fill: isData_antrian ? "#ffffff" : "#21695c",
                    marginRight: "8px",
                    marginLeft: "1px",
                  }}
                />
                <span className="mx-4 font-medium">Data Antrian</span>
              </Link>

              <Link
                className={`flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-md hover:underline underline-offset-4   ${
                  isData_program
                    ? "bg-[#21695c] text-white hover:bg-[#21695c]"
                    : "hover:bg-[#e0e0e0] hover:text-[#21695c]"
                }`}
                to="/admin/data_program"
              >
                <BsFileEarmarkText
                  size="1.2em"
                  style={{
                    fill: isData_program ? "#ffffff" : "#21695c",
                    marginRight: "6px",
                    marginLeft: "1px",
                  }}
                />
                <span className="mx-4 font-medium">Data Program</span>
              </Link>

              <Link
                className={`flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-md  hover:underline underline-offset-4  ${
                  isJadwal
                    ? "bg-[#21695c] text-white hover:bg-[#21695c]"
                    : "hover:bg-[#e0e0e0] hover:text-[#21695c]"
                }`}
                to="/admin/jadwal"
              >
                <BsCalendar4
                  size="1.0em"
                  style={{
                    fill: isJadwal ? "#ffffff" : "#21695c",
                    marginRight: "10px",
                    marginLeft: "3px",
                  }}
                />
                <span className="mx-4 font-medium">Jadwal</span>
              </Link>

              <Link
                className={`flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-md hover:underline underline-offset-4  ${
                  isKonsultasi
                    ? "bg-[#21695c] text-white hover:bg-[#21695c]"
                    : "hover:bg-[#e0e0e0] hover:text-[#21695c]"
                }`}
                to="/admin/konsultasi"
              >
                <BsChatLeftDots
                  size="1.1em"
                  style={{
                    fill: isKonsultasi ? "#ffffff" : "#21695c",
                    marginRight: "8px",
                    marginLeft: "3px",
                  }}
                />
                <span className="mx-4 font-medium">Konsultasi</span>
              </Link>
            </div>

            <div className="mt-24 ">
              <Link
                className="bg-[#21695C] text-white flex items-center px-4 py-2 mt-28 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-[#165549] border-2  hover:text-white"
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
