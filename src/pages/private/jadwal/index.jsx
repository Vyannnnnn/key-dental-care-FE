import React from "react";
import Navigation from "../../../components/private/Navigation";
import Navbar from "../../../components/private/Navbar";
import Footer from "../../../components/private/Footer";
import TableContent from "../../../components/private/TableContent";
import Pagination from "../../../components/private/Pagination";

const DataPasien = () => {
  const th = ["No", "Hari", "Tanggal", "Mulai Pukul", "Sampai Pukul", "Aksi"];
  const td = [
    "1",
    "Senin",
    "2023-11-6",
    "16.00",
    "21.00",
    "",
    // <ReusableButton />,
    "2",
    "Selasa",
    "2023-11-7",
    "16.00",
    "21.00",
    "",
    // <ReusableButton />,
    "3",
    "Rabu",
    "2023-11-8",
    "16.00",
    "21.00",
    "",
    // <ReusableButton />,
    "4",
    "Kamis",
    "2023-11-9",
    "16.00",
    "21.00",
    "",
    // <ReusableButton />,
    "5",
    "jumat",
    "2023-11-10",
    "16.00",
    "21.00",
    "",
    // <ReusableButton />,
    "6",
    "Sabtu",
    "2023-11-11",
    "16.00",
    "21.00",
    "",
  ];

  return (
    <div className="layout flex">
      <Navigation />
      <main className="flex flex-col grow">
        <Navbar page="Jadwal" breadcrumb=" Jadwal" showCreateButton={false} />
        <div className="content grow object-contain">
          <section className="container px-[39px] py-[39px] mx-auto">
            <div className="flex flex-col">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <TableContent th={th} td={td} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
};

const ReusableButton = () => {
  return (
    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none text-lg">
      ...
    </button>
  );
};

export default DataPasien;
