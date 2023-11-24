import React, { useState, useEffect } from "react";
import Navigation from "../../../components/private/Navigation";
import Navbar from "../../../components/private/Navbar";
import Footer from "../../../components/private/Footer";
import Table from "../../../components/private/Table";
import Pagination from "../../../components/private/Pagination";
import { ScaleLoader } from "react-spinners";

const DataProgram = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [Timetable, setTimetable] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/timetable");
        const data = await response.json();
        setTimetable(data);
      } catch (error) {
        console.error("Error fetching data:", error);
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
    { display: "Hari", field: "Hari" },
    { display: "Tanggal", field: "Tanggal" },
    { display: "Mulai Pukul", field: "Mulai_Pukul" },
    { display: "Sampai Pukul", field: "Sampai_Pukul" },
  ];

  return (
    <div className="layout flex">
      <Navigation />
      <main className="flex flex-col grow">
        <Navbar page="Jadwal" breadcrumb="Jadwal" showCreateButton={false} />
        <div className="content grow object-contain">
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
                      data={Timetable}
                      onActionButtonClick={(row) => moveToPatients(row)}
                      actionButtonLabel="Accept"
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

export default DataProgram;
