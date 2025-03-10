import React, { useState, useEffect } from "react";

const PatientDetailModal = ({ isOpen, onClose, patientData }) => {
  const [rekamMedisData, setRekamMedisData] = useState(null);

  useEffect(() => {
    if (patientData && patientData.rekam_medis_id) {
      const fetchRekamMedis = async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/rekam-medis/${patientData.id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          setRekamMedisData(data.rekamMedis);
        } catch (error) {
          console.error("Error fetching rekam medis data:", error);
        }
      };
      fetchRekamMedis();
    }
  }, [patientData]);

  if (!isOpen || !patientData) {
    return null;
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="w-full">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Detail Pasien</h3>
                <button
                  onClick={onClose}
                  type="button"
                  className="inline-flex justify-center items-center rounded-md border border-transparent p-2 text-base font-medium text-white hover:bg-[#dadada] focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  <img className="w-4 h-4" src="/close.svg" alt="Close Icon" />
                </button>
              </div>

              {/* Informasi Pasien */}
              <div className="grid grid-cols-4 gap-4 text-gray-500 mb-[12px]">
                <div className="col-span-2">Nama</div>
                <div className="col-span-2">{patientData.nama}</div>
                <div className="col-span-2">Kode Antrian</div>
                <div className="col-span-2">{patientData.kode_antrian}</div>
                <div className="col-span-2">Pelayanan</div>
                <div className="col-span-2">{patientData.layanan}</div>
                <div className="col-span-2">No Telepon</div>
                <div className="col-span-2">{patientData.nomor_telepon}</div>
                <div className="col-span-2">Hari / Tanggal</div>
                <div className="col-span-2">{patientData.hari_tanggal}</div>
              </div>

              {/* Informasi Rekam Medis */}
              {rekamMedisData && (
                <div className="mt-7">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Rekam Medis</h3>
                  <div className="grid  grid-cols-4 gap-4 text-gray-500 mt-2">
                    <div className="col-span-2">Kode RM</div>
                    <div className="col-span-2 ">{rekamMedisData.kode_rekam_medis}</div>

                    <div className="col-span-2">Dokter</div>
                    <div className="col-span-2">{rekamMedisData.dokter}</div>

                    <div className=" col-span-2">Keluhan</div>
                    <div className="col-span-2 ">{rekamMedisData.keluhan}</div>

                    <div className="col-span-2">Diagnosa</div>
                    <div className="col-span-2">{rekamMedisData.diagnosa}</div>
                    <div className="col-span-2">Tindakan</div>
                    <div className="col-span-2">{rekamMedisData.tindakan}</div>
                    <div className="col-span-2">Tanggal Pemeriksaan</div>
                    <div className="col-span-2">{new Date(rekamMedisData.tanggal_pemeriksaan).toLocaleDateString()}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetailModal;
