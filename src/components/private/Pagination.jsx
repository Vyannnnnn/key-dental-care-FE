import React from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import {BsChevronBarLeft, BsChevronBarRight} from "react-icons/bs";
import { motion } from "framer-motion";

const Pagination = () => {
  const paginationVariants = {
    hidden : {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 5,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 1,
      },
    },
  };
  return (
    <motion.div variants={paginationVariants} initial='hidden' animate='visible' className="flex justify-end mx-8">
      {/* <span className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>

      {[1, 2, 3].map((pageNumber) => (
        <Link
          key={pageNumber}
          to={`/page/${pageNumber}`}
          className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
        >
          {pageNumber}
        </Link>
      ))}

      <span className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span> */}

<ReactPaginate
        breakLabel={
          <span className="mr-4">...</span>
        }
        nextLabel= {
          <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md ml-5">
            <BsChevronBarRight/>
          </span>
        }
        // onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={20}
        previousLabel= {
          <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md mr-5">
            <BsChevronBarLeft />
          </span>
        }
        containerClassName="flex items-center justify-center mt-8 mb-4"
        pageClassName="block border border-solid border-gray-200 hover:bg-gray-400 w-10 h-10 flex items-center justify-center rounded-md mr-4"
        activeClassName="bg-primary text-white"
      />
    </motion.div>
  );
};

export default Pagination;