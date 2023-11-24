import React, { useState, useEffect } from "react";
import Navigation from "../../../components/private/Navigation";
import Navbar from "../../../components/private/Navbar";
import Footer from "../../../components/private/Footer";
import Table from "../../../components/private/Table";
import Pagination from "../../../components/private/Pagination";

const Konsultasi = () => {
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
      <main className="flex justify-center items-center grow">
        <h1 className="text-4xl text-indigo-600 font-bold">Development Mode</h1>
      </main>
    </div>
  );
};

export default Konsultasi;
