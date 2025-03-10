import React, { useState, useEffect } from "react";
import Navigation from "../../../components/private/Navigation";
import Navbar from "../../../components/private/Navbar";
import Footer from "../../../components/private/Footer";
import Table from "../../../components/private/Table";
import PatientDetailModal from "../../../components/private/PatientDetailModal";
import { ScaleLoader } from "react-spinners";

const DataPasien = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [Patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/patient"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };

    fetchData();
  }, []);

  const headers = [
    { display: "No", field: "id" },
    { display: "Nama", field: "nama" },
    { display: "Kode Antrian", field: "kode_antrian" },
    { display: "Pelayanan", field: "layanan" },
    { display: "No Telepon", field: "nomor_telepon" },
    { display: "Hari / Tanggal", field: "hari_tanggal" },
  ];

  const detailPatients = (row) => {
    setSelectedPatient(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="layout flex">
      <Navigation />
      <main className="flex flex-col grow">
        <Navbar
          page="Data Pasien"
          breadcrumb=" Data Pasien"
          showCreateButton={false}
        />
        <div className="content grow object-contain bg-[#f8fafc]">
          <section className="container px-[39px] py-[39px]">
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
                    <>
                      <Table
                        headers={headers}
                        data={Patients}
                        iconType="detail"
                        onActionButtonClick={(row) => detailPatients(row)}
                        actionButtonLabel="Detail"
                        dataType="patients"
                      />
                      <PatientDetailModal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        patientData={selectedPatient}
                      />
                    </>
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

export default DataPasien;