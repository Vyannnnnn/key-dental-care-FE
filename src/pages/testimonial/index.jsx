import React from "react";
import TestimonialCard from "../../components/testimonialCard";
import testimonialData from "../../data/testimonialData";
import { MotionAnimate } from "react-motion-animate";

const Testimonial = () => {
  return (
    <div className="bg-[#EEEEEE] h-screen mb-28">
      <div className="text-center mx-28">
        <MotionAnimate animation="fadeInUp" reset={true}>
          <h1 className="text-4xl font-sans font-bold pt-10">Testimoni</h1>
          <p className="text-xl font-sans pt-5 px-32 text-gray-500">
            Tinggalin jejak senyum yang kita ciptakan bersama. Ini adalah
            cerita-cerita luar biasa dari mereka yang telah merasakan layanan
            klinik kami
          </p>
        </MotionAnimate>
      </div>
      <div className="flex justify-center items-center pt-14">
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
