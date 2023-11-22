import React from "react";

const TableContent = ({ th, td }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead className="bg-gray-50 dark:bg-gray-800">
        <tr>
          {th.map((column, index) => (
            <th
              key={index}
              scope="col"
              className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
        {Array.from({ length: td.length / 6 }, (_, rowIndex) => (
          <tr key={td[rowIndex * 6]}>
            {Array.from({ length: 6 }, (_, columnIndex) => (
              <td
                key={columnIndex}
                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
              >
                {td[rowIndex * 6 + columnIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableContent;
