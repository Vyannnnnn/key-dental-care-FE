import React from "react";
import AdminLayout from "../../../components/private/AdminLayout";
// import UserProfile from "../../../components/private/userProfile";
const Dashboard = () => {
  return (
    <AdminLayout className="h-screen w-screen">
      <div className="h-full flex justify-center items-center text-center overflow-hidden ">
        <div className="w-4/6 lg:h-[340px] h-[460px]  rounded-2xl absolute  flex flex-wrap top-[160px] gap-8 justify-start left-[30%]">
          <div className="h-32 w-80 lg:bg-[#F5365C] shadow-lg rounded-md ">
            <div className="flex mb-2 flex-row items-center justify-around py-3 gap-3">
              <h1 className="text-white">
                Pasien<p className="block">120</p>
              </h1>
              <div className="flex items-center">
                <div className="bg-white w-10 h-10 rounded-full" />
              </div>
            </div>
            <p className="text-white text-start pl-11">
              <a href="/admin/data_pasien">Show More</a>
            </p>
          </div>

          <div className="h-32 w-80 bg-[#FB6340] shadow-lg rounded-md ">
            <div className="flex mb-2 flex-row items-center justify-around py-3 gap-3">
              <h1 className="text-white">
                Antrian<span className="block">10</span>
              </h1>
              <div className="flex items-center">
                <div className="bg-white w-10 h-10 rounded-full" />
              </div>
            </div>
            <p className="text-white text-start pl-11">
              <a href="/admin/data_antrian">Show More</a>
            </p>
          </div>
          <div className="h-32 w-80 bg-[#FFD600] shadow-lg rounded-md ">
            <div className="flex mb-2 flex-row items-center justify-around py-3 gap-3">
              <h1 className="text-white">
                Program<span className="block">24</span>
              </h1>
              <div className="flex items-center">
                <div className="bg-white w-10 h-10 rounded-full" />
              </div>
            </div>
            <p className="text-white text-start pl-11">Show More</p>
          </div>
          <div className="h-32 w-80 bg-[#11CDEF] shadow-lg rounded-md ">
            <div className="flex mb-2 flex-row items-center justify-around py-3 gap-3">
              <h1 className="text-white">
                Jadwal<span className="block">1</span>
              </h1>
              <div className="flex items-center">
                <div className="bg-white w-10 h-10 rounded-full" />
              </div>
            </div>
            <p className="text-white text-start pl-11">Show More</p>
          </div>
          <div className="h-32 w-80 bg-[#2DCE89] shadow-lg rounded-md ">
            <div className="flex mb-2 flex-row items-center justify-around py-3 gap-3">
              <h1 className="text-white">
                Konsultasi<span className="block">5</span>
              </h1>
              <div className="flex items-center">
                <div className="bg-white w-10 h-10 rounded-full" />
              </div>
            </div>
            <p className="text-white text-start pl-11">Show More</p>
          </div>
        </div>
      </div>
      {/* <div>
      <h1>My React Chart</h1>
      <BarChart />
    </div> */}

      {/* coba card */}

      {/* <UserProfile /> */}
    </AdminLayout>
  );
};

export default Dashboard;
