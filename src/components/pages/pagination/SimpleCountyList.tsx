import { useState } from "react";
import norwegianProvincesData from "../../../data/provinces/provinces.json";
const provinces = norwegianProvincesData.provinces;
const itemsPerPage = 3;

function SimpleCountyList() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Calculate total pages
  const totalPages = Math.ceil(provinces.length / itemsPerPage);

  // Calculate the items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = provinces.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage((prevPage: number) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage: number) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <h2>Norwegian Provinces</h2>
      <ul>
        {currentItems.map((province: string, index: number) => (
          <li key={index}>{province}</li>
        ))}
      </ul>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          {" "}
          Page {currentPage} of {totalPages}{" "}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default SimpleCountyList;
