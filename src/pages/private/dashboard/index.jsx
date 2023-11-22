import React from "react";
import Navigation from "../../../components/private/Navigation";
import Navbar from "../../../components/private/Navbar";
import Footer from "../../../components/private/Footer";
// import DashboardCard from "../../../components/private/DashboardCard";

const Dashboard = () => {
  return (
    <div className="layout flex">
      <Navigation />
      <main className="flex flex-col grow">
        <Navbar page="Dashboard" breadcrumb="" showCreateButton={false} />
        <div className="content grow object-contain">
          <section className="container px-[39px] py-[39px] mx-auto">
            <div className="flex flex-col">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <div className="mb-[70px] w-full  flex flex-wrap gap-8 justify-center">
                      <div className="rounded-lg w-[300px] h-[123px] bg-green-500"></div>
                      <div className="rounded-lg w-[300px] h-[123px] bg-green-500"></div>
                      <div className="rounded-lg w-[300px] h-[123px] bg-green-500"></div>
                    </div>
                    <div className="mb-[70px] w-full  flex flex-wrap gap-8 justify-center">
                      <div className="rounded-lg w-[300px] h-[123px] bg-green-500"></div>
                      <div className="rounded-lg w-[300px] h-[123px] bg-green-500"></div>
                      <div className="rounded-lg w-[300px] h-[123px] bg-transparent"></div>
                    </div>
                    <div className="w-full bg-red-500 flex flex-wrap gap-8 justify-start p-8">
                      <div className="rounded-lg w-full h-[223px] bg-green-500"></div>
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
