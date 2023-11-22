import React, { useState } from 'react';
import styles from "../../../styles/popup.module.css"

const PopupDownload = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className='box'>
            <button onClick={openPopup} className="inline-block rounded-full border-2 border-[#21695C] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-[#21695C] hover:bg-[#21695C] hover:text-white focus:border-[#21695C] focus:text-black focus:outline-none focus:ring-0 active:border-[#21695C] active:text-white dark:hover:bg-white dark:hover:bg-white"
                >
                Download Sekarang
            </button>
            
            {isPopupOpen && (
                <div className={styles.popupOverlay}>
                    <div className={styles.popupContent}>
                        <div className='flex'>
                            <div className='flex flex-col m-10 w-9/12'>
                            <h1 className='font-sans font-bold text-2xl pb-4'>Solusi Konsultasi Simple Anti Drama</h1>
                            <ul className='list-disc pl-8 pb-6 font-light font-sans text-lg'>
                                <li>Nggak kehalang antrian</li>
                                <li>Appointment anti ribet</li>
                                <li>Ragu? Tanya langsung!</li>
                                <li>Kualitas klinik terpercaya</li>
                            </ul>
                            <div className="">
                                <h1 className="font-sans text-xl font-bold pb-3">
                                Download Langsung!
                                </h1>
                                <a
                                href="https://play.google.com/store"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center bg-black w-44 h-12 text-white font-semibold py-5 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:border-black"
                                >
                                <img
                                    src="/assets/google-play.svg"
                                    alt="Google Play Store"
                                    className="h-8 w-8 mr-3"
                                />
                                <div>
                                    <div className="text-xs">GET IT ON</div>
                                    <div className="text-base font-bold">Google Play</div>
                                </div>
                                </a>
                            </div>
                            </div>
                            <div className='bg-[#21695C] w-3/6 h-96 rounded-tr-lg relative'>
                            <div className='flex justify-end pr-3'>
                                <button onClick={closePopup} className="text-white text-3xl">
                                &times;
                                </button>
                            </div>
                            <img className="h-full absolute bottom-0 right-0 mr-14" src='/phone.svg' alt="Phone" />
                            </div>
                        </div>
                    </div>
              </div>
              
            )}
        </div>
    );
};

export default PopupDownload;
