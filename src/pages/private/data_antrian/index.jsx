import React, { useState, useEffect } from "react";
import Navigation from "../../../components/private/Navigation";
import Navbar from "../../../components/private/Navbar";
import Footer from "../../../components/private/Footer";
import Table from "../../../components/private/Table";
import { ScaleLoader } from "react-spinners";

const DataAntrian = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://keydentalcare.isepwebtim.my.id/api/queue"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setQueue(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  const headers = [
    { display: "No", field: "id" },
    { display: "Nama", field: "nama" },
    { display: "Kode Antrian", field: "kode_antrian" },
    { display: "Pelayanan", field: "pelayanan" },
    { display: "No Telepon", field: "no_telepon" },
    { display: "Hari / Tanggal", field: "hari_tanggal" },
  ];

  const detailQueue = async (row) => {
    try {
      const response = await fetch(
        `https://keydentalcare.isepwebtim.my.id/api/move-to-patient/${row.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(row),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const deleteResponse = await fetch(
        `https://keydentalcare.isepwebtim.my.id/api/queue/${row.id}`,
        {
          method: "DELETE",
        }
      );

      if (!deleteResponse.ok) {
        throw new Error(`HTTP error! Status: ${deleteResponse.status}`);
      }

      fetchData();
    } catch (error) {
      console.error(
        "Error moving to patient and deleting from queue:",
        error.message
      );
    }
  };

  return (
    <div className="layout flex">
      <Navigation />
      <main className="flex flex-col grow">
        <Navbar
          page="Data Antrian"
          breadcrumb=" Data Antrian"
          showCreateButton={false}
        />
        <div className="content grow object-contain bg-[#f8fafc]">
          <section className="container px-[39px] py-[39px] mx-auto">
            <div className="flex flex-col">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  {isLoading ? (
                    <div className="flex items-center justify-center h-40">
                      <div className="flex justify-around mt-8">
                        <ScaleLoader
                          color="#21695c"
                          loading={isLoading}
                          height={30}
                        />
                      </div>
                    </div>
                  ) : (
                    <Table
                      headers={headers}
                      data={queue}
                      onActionButtonClick={(row) => detailQueue(row)}
                      actionButtonLabel="Accept"
                      dataType="queue"
                    />
                  )}
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
