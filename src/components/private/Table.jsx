import { BsFileEarmarkText } from "react-icons/bs";
import { GoPencil } from "react-icons/go";

const Table = ({
  headers,
  data,
  isLoading,
  iconType,
  onActionButtonClick,
  actionButtonLabel,
  dataType,
}) => {
  const dataArray = Array.isArray(data[dataType]) ? data[dataType] : [];

  const getIconComponent = (iconType) => {
    switch (iconType) {
      case "detail":
        return <BsFileEarmarkText />;
      case "edit":
        return <GoPencil />;
      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-40">
        <div className="flex justify-around mt-8">
          <ScaleLoader color="#21695c" loading={isLoading} height={30} />
        </div>
      </div>
    );
  }

  if (dataArray.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <div className="overflow-hidden border border-gray-200 rounded-lg">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                scope="col"
                className="py-3.5 px-4 text-sm font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
              >
                {header.display}
              </th>
            ))}
            <th className="py-3.5 text-sm font-semibold text-center rtl:text-right text-gray-500 dark:text-gray-400">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
          {dataArray.map((row, rowIndex) => {
            return (
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
                      className="hover:text-white border  p-2 hover:bg-[#21695c] rounded-md min-w-[100px] flex items-center justify-center text-[#21695c]"
                    >
                      <span className="mr-2">{getIconComponent(iconType)}</span>
                      {actionButtonLabel}
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
