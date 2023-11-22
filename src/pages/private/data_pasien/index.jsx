import React from "react";
import Navigation from "../../../components/private/Navigation";
import Navbar from "../../../components/private/Navbar";
import Footer from "../../../components/private/Footer";
import TableContent from "../../../components/private/TableContent";
import Pagination from "../../../components/private/Pagination";
import { useState } from "react";

const DataPasien = () => {
  const th = [
    "Nomor",
    "Nama",
    "Kode Antrian",
    "Pelayanan",
    "No Telepon",
    "Aksi",
  ];
  const td = [
    "1",
    "Ella Fitriyani Rosyidah",
    "231112-01",
    "Tambal Gigi Dewasa",
    "081392307589",
    "",
    // <ReusableButton />,
    "2",
    "Ella Fitriyani Rosyidah",
    "231112-01",
    "Tambal Gigi Dewasa",
    "081392307589",
    "",
    // <ReusableButton />,
    "3",
    "Ella Fitriyani Rosyidah",
    "231112-01",
    "Tambal Gigi Dewasa",
    "081392307589",
    "",
    // <ReusableButton />,
    "4",
    "Ella Fitriyani Rosyidah",
    "231112-01",
    "Tambal Gigi Dewasa",
    "081392307589",
    "",
    // <ReusableButton />,
    "5",
    "Ella Fitriyani Rosyidah",
    "231112-01",
    "Tambal Gigi Dewasa",
    "081392307589",
    "",
    // <ReusableButton />,
    "6",
    "Ella Fitriyani Rosyidah",
    "231112-01",
    "Tambal Gigi Dewasa",
    "081392307589",
    "",
    // <ReusableButton />,
    "7",
    "Ella Fitriyani Rosyidah",
    "231112-01",
    "Tambal Gigi Dewasa",
    "081392307589",
    "",
    // <ReusableButton />,
    "8",
    "Ella Fitriyani Rosyidah",
    "231112-01",
    "Tambal Gigi Dewasa",
    "081392307589",
    "",
    // <ReusableButton />,
    "9",
    "Ella Fitriyani Rosyidah",
    "231112-01",
    "Tambal Gigi Dewasa",
    "081392307589",
    "",
    // <ReusableButton />,
    "10",
    "Ella Fitriyani Rosyidah",
    "231112-01",
    "Tambal Gigi Dewasa",
    "081392307589",
    "",
    // <ReusableButton />,
  ];

  return (
    <div className="layout flex">
      <Navigation />
      <main className="flex flex-col grow">
        <Navbar
          page="Data Pasien"
          breadcrumb=" Data Pasien"
          showCreateButton={false}
        />
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
            <Pagination />
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
};

const ReusableButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <button
        className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none text-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        ...
      </button>

      {isHovered && (
        <div
          className="absolute top-full left-0 z-50 bg-gray-800 p-4"
          onClick={() => {
            console.log("Div clicked!");
          }}
        >
          <ul>
            <li>Show</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DataPasien;
