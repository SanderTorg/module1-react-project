import gamesData from "../../../../data/games/games.json";
import { useState } from "react";
import GameItem from "./GameItem";
import PaginationControls from "../PaginationControls";

const games = gamesData.data;

const ITEMS_PER_PAGE = 4;

function PaginatedGameList() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = games.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  // Calculate the items for the current page
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = games.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      <h1>Classic Games Collection</h1>
      {currentItems.map((game) => (
        <GameItem key={game.id} game={{ ...game, year: Number(game.year) }} />
      ))}

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <p>
        Showing page {currentPage} of {totalPages}
      </p>
    </div>
  );
}

export default PaginatedGameList;
