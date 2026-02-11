import GamesEndlessScroll from "../../ui/infinite-scroll/endless-scroll";
import BasicEndlessScroll from "../../ui/infinite-scroll/InfiniteScrollSimulate";
import GamesPage from "./games/gamesPage";
import SimpleCountyList from "./SimpleCountyList";

function PaginationPage() {
  return (
    <>
      <GamesEndlessScroll></GamesEndlessScroll>
      <BasicEndlessScroll></BasicEndlessScroll>
      <SimpleCountyList></SimpleCountyList>
      <GamesPage></GamesPage>
    </>
  );
}

export default PaginationPage;
