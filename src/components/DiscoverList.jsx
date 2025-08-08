
import useFetchedData from "../context/useFetchedData";
import PokemonHolder from "./PokemonHolder";
import InfiniteScroll from "react-infinite-scroll-component";

const DiscoverList = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useFetchedData();

  const allItems = data?.pages?.flatMap((page) => page.items.results) ?? [];
  return (
    <>
      <InfiniteScroll
        dataLength={allItems.length}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={
          isFetchingNextPage ? (
            <center>
              <h4>Loading more...</h4>
            </center>
          ) : (
            <></>
          )
        }
      >
        <div className="pokemon-handler-wrapper">
          {allItems.map((item) => (
            <PokemonHolder key={item.name} name={item.name} />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default DiscoverList;
