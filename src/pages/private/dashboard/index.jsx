import React, { useState, useEffect } from "react";
import Navigation from "../../../components/private/Navigation";
import Navbar from "../../../components/private/Navbar";
import Footer from "../../../components/private/Footer";
import { Link } from "react-router-dom";
import BarChartComponent from "../../../components/private/BarChartComponent";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/dashboard"
        );
        const data = await response.json();
        setDashboardData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const data = [
    { name: "Jan", value: 30 },
    { name: "Feb", value: 40 },
    { name: "Mar", value: 25 },
    { name: "Apr", value: 35 },
    { name: "May", value: 15 },
    { name: "Jun", value: 25 },
    { name: "Jul", value: 25 },
    { name: "Aug", value: 45 },
    { name: "Sep", value: 25 },
    { name: "Okt", value: 55 },
    { name: "Nov", value: 67 },
    { name: "Dec", value: 88 },
  ];

  return (
    <div className="layout flex">
      <Navigation />
      <main className="flex flex-col grow">
        <Navbar page="Dashboard" breadcrumb="" showCreateButton={false} />
        <div className="content grow object-contain">
          <section className="container px-[39px] py-[39px]">
            <div className="flex flex-col">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden md:rounded-lg">
                    <div className="mb-[70px] w-full  flex flex-wrap gap-8 justify-start">
                      <div className="rounded-lg w-full md:w-[300px] h-[123px] bg-[#F5365C] p-4">
                        <div className="flex justify-between text-white w-full px-[12px]">
                          <div>
                            <p className="text-xs">Pasien</p>
                            <p className="text-xl">
                              {dashboardData.patients || 0}
                            </p>
                          </div>
                          <div className="bg-white h-[48px] w-[48px] rounded-full"></div>
                        </div>
                        <div className="h-1/2 flex items-end">
                        
                          <Link className="text-white" to="/admin/data_pasien">
                            Show More
                          </Link>
                        </div>
                      </div>
                      <div className="rounded-lg w-full md:w-[300px] h-[123px] bg-[#FB6340] p-4">
                        <div className="flex justify-between text-white w-full px-[12px]">
                          <div>
                            <p className="text-xs">Antrian</p>
                            <p className="text-xl">
                              {dashboardData.queue || 0}
                            </p>
                          </div>
                          <div className="bg-white h-[48px] w-[48px] rounded-full"></div>
                        </div>
                        <div className="h-1/2 flex items-end">
                          <Link className="text-white" to="/admin/data_antrian">
                            Show More
                          </Link>
                        </div>
                      </div>
                      <div className="rounded-lg w-full md:w-[300px] h-[123px] bg-[#FFD600] p-4">
                        <div className="flex justify-between text-white w-full px-[12px]">
                          <div>
                            <p className="text-xs">Program</p>
                            <p className="text-xl">
                              {dashboardData.programs || 0}
                            </p>
                          </div>
                          <div className="bg-white h-[48px] w-[48px] rounded-full"></div>
                        </div>
                        <div className="h-1/2 flex items-end">
                          <Link className="text-white" to="/admin/data_program">
                            Show More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="mb-[70px] w-full  flex flex-wrap gap-8 justify-start">
                      <div className="rounded-lg w-full md:w-[300px] h-[123px] bg-[#11CDEF] p-4">
                        <div className="flex justify-between text-white w-full px-[12px]">
                          <div>
                            <p className="text-xs">Jadwal</p>
                            <p className="text-xl">
                              {dashboardData.timetable || 0}
                            </p>
                          </div>
                          <div className="bg-white h-[48px] w-[48px] rounded-full"></div>
                        </div>
                        <div className="h-1/2 flex items-end">
                          <Link className="text-white" to="/admin/jadwal">
                            Show More
                          </Link>
                        </div>
                      </div>
                      <div className="rounded-lg w-full md:w-[300px] h-[123px] bg-[#2DCE89] p-4">
                        <div className="flex justify-between text-white w-full px-[12px]">
                          <div>
                            <p className="text-xs">Konsultasi</p>
                            <p className="text-xl">
                              {dashboardData.chats || 0}
                            </p>
                          </div>
                          <div className="bg-white h-[48px]cdcd w-[48px] rounded-full"></div>
                        </div>
                        <div className="h-1/2 flex items-end">
                          <Link className="text-white" to="/admin/konsultasi">
                            Show More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="w-full  justify-center p-8 bg-gray-100 rounded-lg">
                      <BarChartComponent data={data} />
                    </div>
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

export default Dashboard;
