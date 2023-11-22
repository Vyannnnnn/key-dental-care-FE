import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Pagination from "./Pagination";
// import useDataFetcher from "./useDataFetcher";
// import UserProfile from "./userProfile";

const AdminLayout = ({ children }) => {
  // const { loading, pages, totalpages, currentPage, setCurrentPage } = useDataFetcher();
  return (
    <main className="flex">
      <div className="float-left">
        <Navigation />
      </div>

      <div className="flex flex-col w-full h-screen overflow-hidden">
        <Navbar />
        <hr />

        <div className="flex-1 overflow-y-auto p-4">{children}</div>

        {/* {loading ? (
          <div className="text-center text-2xl">Loading...</div>
        ) : (
          <>
            <div>
              {pages.map((page) => {
                return <UserProfile key={page.id} {...page} />;
              })}
            </div>
            <Pagination />
          </>
        )} */}
<Pagination/>
        <hr />

        <Footer />
      </div>
    </main>
  );
};

export default AdminLayout;
