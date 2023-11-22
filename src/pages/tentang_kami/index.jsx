import React from "react";
import Footer from "../../pages/footer";
import Navbar from "../navbar/index";

const Tentang_kami = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-24 mt-10 rounded-3xl bg-teal-50 w-10/12 h-auto">
        <div className="text-center p-16">
          <h1 className="text-4xl font-sans font-bold">Tentang Kami</h1>
          <p className="text-xl font-sans py-5 text-gray-500">
            Kami adalah klinik gigi yang berkomitmen untuk memberikan perawatan
            gigi berkualitas tinggi dengan fokus pada kenyamanan pasien dan
            hasil yang memuaskan. Dengan tim profesional dan berpengalaman, kami
            siap memenuhi kebutuhan kesehatan gigi Anda dengan layanan terbaik
            dan solusi yang inovatif
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 h-full m-28 py-10">
        <div className="pl-16">
          <img src="/logo.svg" />
        </div>
        <div className="pr-16">
          <p className="text-xl font-sans text-gray-500">
            Kei Dental Clinic adalah klinik gigi modern yang dijalankan oleh
            Dokter Rima, seorang profesional terkemuka di bidang kedokteran
            gigi. Klinik ini menawarkan layanan lengkap mulai dari pemeriksaan
            rutin hingga perawatan spesialis, seperti perawatan ortodontik,
            perbaikan gigi rusak, dan perawatan kosmetik.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-gray-100 h-screen">
        <div className="pl-16 flex justify-center items-center">
          <img
            className="rounded-full border-8 border-[#21695C] w-4/6 h-4/6 shadow-2xl"
            src="/image.jpg"
            alt="Pendiri"
          />
        </div>
        <div className="flex justify-center flex-col pr-16">
          <h1 className="text-3xl font-sans font-bold">Background Pendiri</h1>{" "}
          <br />
          <p className="text-xl font-sans text-gray-500">
            Dokter Gigi Rima merupakan seorang profesional di bidang kedokteran
            gigi yang telah mendirikan dan mengelola klinik gigi pribadi di Kota
            Pariaman.
            <br />
            <br />
            Dedikasinya dalam memberikan pelayanan kesehatan gigi yang
            berkualitas telah membuatnya dikenal dan dipercaya dalam komunitas
            lokal.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 m-28 h-full py-10">
        <div>
          <h1 className="text-8xl font-sans font-bold text-[#21695C]">
            Tujuan Kami?
          </h1>
        </div>
        <div className="pt-10">
          <ol className="list-decimal text-gray-500 text-xl">
            <li>Memberikan pelayanan gigi berkualitas tinggi.</li>
            <li>Menyediakan perawatan holistik dan nyaman.</li>
            <li>Edukasi pencegahan masalah gigi.</li>
            <li>Menggunakan teknologi mutakhir untuk hasil terbaik.</li>
            <li>Membangun hubungan jangka panjang dengan pasien.</li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tentang_kami;
