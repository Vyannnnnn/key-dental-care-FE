import React, { useState, useEffect } from "react";
import Navigation from "../../../components/private/Navigation";
import Navbar from "../../../components/private/Navbar";
import Footer from "../../../components/private/Footer";
import Table from "../../../components/private/Table";
import Pagination from "../../../components/private/Pagination";

const DataAntrian = () => {
  const [Queue, setQueue] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/queue")
      .then((response) => response.json())
      .then((data) => {
        console.log("Patient Data:", data);
        setQueue(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const headers = [
    { display: "No", field: "id" },
    { display: "Nama", field: "Nama" },
    { display: "Kode Antrian", field: "Kode_Antrian" },
    { display: "Pelayanan", field: "Pelayanan" },
    { display: "No Telepon", field: "No_Telepon" },
    { display: "Hari / Tanggal", field: "Hari_Tanggal" },
  ];

  return (
    <div className="layout flex">
      <Navigation />
      <main className="flex flex-col grow">
        <Navbar
          page="Data Antrian"
          breadcrumb=" Data Antrian"
          showCreateButton={false}
        />
        <div className="content grow object-contain">
          <section className="container px-[39px] py-[39px] mx-auto">
            <div className="flex flex-col">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <Table
                      headers={headers}
                      data={Queue}
                      onActionButtonClick={(row) => moveToPatients(row)}
                      actionButtonLabel="Accept"
                    />
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

export default DataAntrian;
