import React from "react";
import AdminLayout from "../../../components/private/AdminLayout";
import { useEffect, useState } from "react";

// import SimpleModal from "../../../components/private/modalAntrian";

const apiEndpoint = "http://localhost:1234/get";

const DataAntrian = () => {
  const [data, setData] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAccepted, setIsAccepted] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Ada masalah dengan fetch:", error);
      }
    };

    fetchData();
  }, []);

  const openModal = () => {
    setIsModalOpen(true); // Buka modal dengan mengatur isModalOpen menjadi true
  };

  // const closeModal = () => {
  //   setIsModalOpen(false); // Tutup modal dengan mengatur isModalOpen menjadi false
  // };

  return (
    <AdminLayout className="h-screen w-screen">
      <div className="h-full text-7xl flex justify-center items-center text-center overflow-hidden">
        <div className=" w-4/5 h-[530px]  rounded-2xl absolute  flex justify-center items-center top-[180px]">
          <div className="h-full w-[80%] bg-white  shadow-lg rounded-2xl flex justify-center items-center">
            <div className="absolute w-[80%]">
              <p className="text-xl relative font-semibold pl-[72px] text-start -mt-5 text-[#32325D]">Data Antrian</p>
              {data ? (
                <table className="min-w-full divide-gray-700 my-4">
                  <thead className="bg-gray-100 text-center">
                    <tr>
                      <th className="px-12 py-3.5 text-sm font-normal  rtl:text-right text-gray-500 dark:text-gray-400">Nomor</th>
                      <th className="px-12 py-3.5 text-sm font-normal  rtl:text-right text-gray-500 dark:text-gray-400">Nama</th>
                      <th className="px-12 py-3.5 text-sm font-normal  rtl:text-right text-gray-500 dark:text-gray-400">Kode Antrian</th>
                      <th className="px-12 py-3.5 text-sm font-normal  rtl:text-right text-gray-500 dark:text-gray-400">Pelayanan</th>
                      <th className="px-12 py-3.5 text-sm font-normal  rtl:text-right text-gray-500 dark:text-gray-400">No Telepon</th>
                      <th className="px-12 py-3.5 text-sm font-normal  rtl:text-right text-gray-500 dark:text-gray-400">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="text-center divide-y divide-gray-200">
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td className=" text-sm font-medium ">{item.nomor}</td>
                        <td className="p-4 text-sm font-medium ">{item.nama}</td>
                        <td className="p-4 text-sm font-medium ">{item.kode_antrian}</td>
                        <td className="p-4 text-sm font-medium ">{item.pelayanan}</td>
                        <td className="p-4 text-sm font-medium ">{item.no_telepon}</td>

                        <td className="flex p-3 justify-center text-sm text-white">
                          <button
                            onClick={() => {
                              openModal();
                              setIsAccepted((prevStatus) =>({
                                ...prevStatus,
                                [item.id]: true,
                              }));
                            }}
                            className={`transition-colors duration-200 focus:outline-none flex justify-center items-center gap-2 px-3 py-1 rounded-lg ${isAccepted ? 'bg-[#0EA5E9]' : 'bg-[#0EA5E9]'}`}
                          >
                            {isAccepted[item.id] ? (
                              <>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-white">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                {/* <p className="text-white">Accepted</p> */}
                              </>
                            ) : (
                              <p className="text-white">Accept</p>
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                "Loading..."
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <SimpleModal isOpen={isModalOpen} onClose={closeModal} /> */}
    </AdminLayout>
  );
};

export default DataAntrian;
