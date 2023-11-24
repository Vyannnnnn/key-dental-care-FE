import React from "react";

const Table = ({ headers, data, onActionButtonClick, actionButtonLabel }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead className="bg-gray-50 dark:bg-gray-800">
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              scope="col"
              className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              {header.display}
            </th>
          ))}
          <th className="py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
            Aksi
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
        {data.map((row, rowIndex) => (
          <tr key={row.id}>
            {headers.map((header, colIndex) => (
              <td
                key={colIndex}
                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
              >
                {row[header.field]}
              </td>
            ))}
            <td>
              <div className="w-full h-full flex justify-center">
                <button
                  onClick={() => onActionButtonClick(row)}
                  className="text-indigo-600 hover:text-white border p-2 hover:bg-indigo-600 rounded-md min-w-[100px]"
                >
                  {actionButtonLabel}
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
