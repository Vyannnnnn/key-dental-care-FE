import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const BarChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/patient") // URL sesuai backend
      .then((res) => res.json())
      .then((resData) => {
        const patients = resData.patients;

        // Kumpulin jumlah pasien per bulan
        const monthlyData = patients.reduce((acc, patient) => {
          const month = new Date(patient.hari_tanggal).toLocaleString("id-ID", { month: "short" });
          acc[month] = (acc[month] || 0) + 1;
          return acc;
        }, {});

        // Ubah jadi array buat Recharts
        const chartData = Object.entries(monthlyData).map(([month, count]) => ({
          name: month,
          value: count,
        }));

        setData(chartData);
      })
      .catch((err) => console.error("Gagal fetch data:", err));
  }, []);

  return (
    <div className="chart-container">
      <BarChart
        width={900}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#21695C" />
      </BarChart>
    </div>
  );
};

export default BarChartComponent;
