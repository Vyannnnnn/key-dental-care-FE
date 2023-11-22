import React from "react";
import AdminLayout from "../../../components/private/AdminLayout";
import { useEffect, useState } from "react";
// import Pagination from "../../../components/private/Pagination";
const apiEndpoint = "http://localhost:1234/get";
import ModalPasien from "../../../components/private/modalPasien";
// import useDataFetcher from "../../../components/private/useDataFetcher";

const DataPasien = () => {
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const closeModal = () => {
    setIsModalOpen(false); // Tutup modal dengan mengatur isModalOpen menjadi false
  };
  return (
    <AdminLayout className="h-screen w-screen">
      <div className="h-full text-7xl flex justify-center items-center text-center overflow-hidden">
        <div className=" w-4/5 h-[530px]  rounded-2xl absolute  flex justify-center items-center top-[180px]">
          <div className="h-full w-[80%] bg-white  shadow-lg rounded-2xl flex justify-center items-center">
            <div className="absolute w-[80%]">
              <p className="text-xl relative font-semibold pl-[57px] text-start mt-8 text-[#32325D]">Data Pasien</p>
              {data ? (
                <table className="min-w-full divide-gray-700 my-4">
                  <thead className="bg-gray-100 text-center">
                    <tr>
                      <th className="px-12 py-3.5 text-sm font-normal  rtl:text-right text-gray-500 dark:text-gray-400">Nomor</th>
                      <th className="px-12 py-3.5 text-sm font-normal  rtl:text-right text-gray-500 dark:text-gray-400">Nama</th>
                      <th className="px-12 py-3.5 text-sm font-normal  rtl:text-right text-gray-500 dark:text-gray-400">Umur</th>
                      <th className="px-12 py-3.5 text-sm font-normal  rtl:text-right text-gray-500 dark:text-gray-400">Jenis Kelamin</th>
                      <th className="px-12 py-3.5 text-sm font-normal  rtl:text-right text-gray-500 dark:text-gray-400">Alamat</th>
                      <th className="px-12 py-3.5 text-sm font-normal  rtl:text-right text-gray-500 dark:text-gray-400">No Telepon</th>
                      <th className="px-12 py-3.5 text-sm font-normal  rtl:text-right text-gray-500 dark:text-gray-400">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="text-center divide-y divide-gray-200">
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td className=" text-sm font-medium ">{item.nomor}</td>
                        <td className="px-4 py-4 text-sm font-medium ">{item.nama}</td>
                        <td className="px-4 py-4 text-sm font-medium ">{item.umur}</td>
                        <td className="px-4 py-4 text-sm font-medium ">{item.jenis_kelamin}</td>
                        <td className="px-4 py-4 text-sm font-medium ">{item.alamat}</td>
                        <td className="px-4 py-4 text-sm font-medium ">{item.no_telepon}</td>
                        {/* <td className="px-4 py-4 text-sm font-medium">
                        <div className="bg-blue-400 border flex flex-row items-center">
                          <a href="" className="">
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="black" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M8.69196 7.71795C8.69196 7.42057 8.45088 7.17949 8.1535 7.17949H3.8458C3.54842 7.17949 3.30734 7.42057 3.30734 7.71795C3.30734 8.01533 3.54842 8.25641 3.8458 8.25641H8.1535C8.45088 8.25641 8.69196 8.01533 8.69196 7.71795Z"
                                fill="black"
                              />
                              <path
                                d="M8.69196 10.5897C8.69196 10.2924 8.45088 10.0513 8.1535 10.0513H3.8458C3.54842 10.0513 3.30734 10.2924 3.30734 10.5897C3.30734 10.8871 3.54842 11.1282 3.8458 11.1282H8.1535C8.45088 11.1282 8.69196 10.8871 8.69196 10.5897Z"
                                fill="black"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2.40991 0C1.3195 0 0.435547 0.88395 0.435547 1.97436V12.0256C0.435547 13.116 1.3195 14 2.40991 14H9.58939C10.6798 14 11.5638 13.1161 11.5638 12.0256V4.10499C11.5638 3.83161 11.4746 3.5657 11.3098 3.34758L9.15753 0.499004C8.92008 0.184727 8.54898 0 8.15509 0H2.40991ZM1.51247 1.97436C1.51247 1.47872 1.91427 1.07692 2.40991 1.07692H7.61503V4.23378C7.61503 4.53116 7.85611 4.77224 8.1535 4.77224H10.4868V12.0256C10.4868 12.5213 10.085 12.9231 9.58939 12.9231H2.40991C1.91427 12.9231 1.51247 12.5213 1.51247 12.0256V1.97436Z"
                                fill="black"
                              />
                            </svg>
                            
                            Detail
                          </a>
                          </div>
                        </td> */}

                        <td className="p-4 text-sm text-white flex justify-center">
                         
                            <button onClick={openModal} className=" bg-[#0EA5E9] transition-colors duration-200 focus:outline-none flex justify-center items-center gap-2 px-3 py-1 rounded-lg">
                              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg> */}
                              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M8.69196 7.71795C8.69196 7.42057 8.45088 7.17949 8.1535 7.17949H3.8458C3.54842 7.17949 3.30734 7.42057 3.30734 7.71795C3.30734 8.01533 3.54842 8.25641 3.8458 8.25641H8.1535C8.45088 8.25641 8.69196 8.01533 8.69196 7.71795Z"
                                fill="white"
                              />
                              <path
                                d="M8.69196 10.5897C8.69196 10.2924 8.45088 10.0513 8.1535 10.0513H3.8458C3.54842 10.0513 3.30734 10.2924 3.30734 10.5897C3.30734 10.8871 3.54842 11.1282 3.8458 11.1282H8.1535C8.45088 11.1282 8.69196 10.8871 8.69196 10.5897Z"
                                fill="white"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2.40991 0C1.3195 0 0.435547 0.88395 0.435547 1.97436V12.0256C0.435547 13.116 1.3195 14 2.40991 14H9.58939C10.6798 14 11.5638 13.1161 11.5638 12.0256V4.10499C11.5638 3.83161 11.4746 3.5657 11.3098 3.34758L9.15753 0.499004C8.92008 0.184727 8.54898 0 8.15509 0H2.40991ZM1.51247 1.97436C1.51247 1.47872 1.91427 1.07692 2.40991 1.07692H7.61503V4.23378C7.61503 4.53116 7.85611 4.77224 8.1535 4.77224H10.4868V12.0256C10.4868 12.5213 10.085 12.9231 9.58939 12.9231H2.40991C1.91427 12.9231 1.51247 12.5213 1.51247 12.0256V1.97436Z"
                                fill="white"
                              />
                            </svg>
                            <p>Detail</p>
                            </button>


                            {/* <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                              </svg>
                            </button> */}
                          
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
      <ModalPasien isOpen={isModalOpen} onClose={closeModal}/>
    </AdminLayout>
  );

  
};
// {
//   loading ? (
//     <div className="text-center text-2xl">Loading...</div>
//   ) : (
//     <>
//       {/* <div>
//       {pages.map(page => {
//         return <UserProfile key={page.id} {...page} />
//       })}
//     </div> */}
//       <Pagination />
//     </>
//   );
// }

export default DataPasien;
