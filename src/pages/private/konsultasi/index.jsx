import React from "react";
import Navigation from "../../../components/private/Navigation";
import Navbar from "../../../components/private/Navbar";
import Footer from "../../../components/private/Footer";
import TableContent from "../../../components/private/TableContent";
import ChatContent from "../../../components/private/ChatContent";
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
    <ReusableButton />,
    "1",
    "Ella Fitriyani Rosyidah",
    "231112-01",
    "Tambal Gigi Dewasa",
    "081392307589",
    <ReusableButton />,
    "1",
    "Ella Fitriyani Rosyidah",
    "231112-01",
    "Tambal Gigi Dewasa",
    "081392307589",
    <ReusableButton />,
  ];

  return (
    <div className="layout flex">
      <Navigation />
      <main className="flex flex-col grow">
        <Navbar
          page="Konsultasi"
          breadcrumb=" Konsultasi"
          showCreateButton={false}
          showSearchButton={true}
        />
        <div className="content grow object-contain">
          <section className="container px-[39px] py-[39px] mx-auto">
            <div className="flex flex-col">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <ChatContent /> <ChatContent /> <ChatContent />
                    <ChatContent /> <ChatContent /> <ChatContent />
                    <ChatContent /> <ChatContent /> <ChatContent />
                    <ChatContent />
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <button
        className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none text-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Button
      </button>

      {isHovered && (
        <div
          className="absolute top-full left-0 bg-gray-200 p-4"
          onClick={() => {
            // Handle click event
            console.log("Div clicked!");
          }}
        >
          This is the div content
        </div>
      )}
    </div>
  );
};

export default DataPasien;
