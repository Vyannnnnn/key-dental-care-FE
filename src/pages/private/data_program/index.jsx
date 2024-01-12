import React, { useState, useEffect } from "react";
import Navigation from "../../../components/private/Navigation";
import Navbar from "../../../components/private/Navbar";
import Footer from "../../../components/private/Footer";
import Table from "../../../components/private/Table";
import { ScaleLoader } from "react-spinners";
import ProgramDetailModal from "../../../components/private/ProgramDetailModal";

const DataProgram = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [Programs, setPrograms] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);
      const response = await fetch(
        "https://keydentalcare.isepwebtim.my.id/api/program",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setPrograms(data);
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
    { display: "Nama Program", field: "nama_program" },
    { display: "Harga", field: "harga_program" },
    { display: "Deskripsi", field: "deskripsi_program" },
    { display: "Thumbnail", field: "thumbnail" },
  ];

  const detailPrograms = (row) => {
    setSelectedProgram(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    fetchData();
  };

  return (
    <div className="layout flex">
      <Navigation />
      <main className="flex flex-col grow">
        <Navbar
          page="Data Program"
          breadcrumb=" Data Program"
          showCreateButton={true}
          onDataAdded={fetchData}
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
                        data={Programs}
                        iconType="edit"
                        onActionButtonClick={(row) => detailPrograms(row)}
                        actionButtonLabel="Edit"
                        dataType="programs"
                      />
                      <ProgramDetailModal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        programData={selectedProgram}
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

export default DataProgram;
