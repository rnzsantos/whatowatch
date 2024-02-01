import { Button } from "@/components/ui/button";
import useMovies from "@/hooks/useMovies";
import { Loader2 } from "lucide-react";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieGrid = () => {
  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useMovies();
  const movies = data?.pages.flatMap((page) => page.results);
  const skeletons = Array.from(Array(20), (_, index) => index + 1);

  return (
    <>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
        {isLoading &&
          skeletons.map((skeleton) => <MovieCardSkeleton key={skeleton} />)}

        {movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      <div className="mt-8 flex justify-center">
        {movies?.length !== 0 && hasNextPage && (
          <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            {isFetchingNextPage ? "Loading" : "Load more"}
          </Button>
        )}
        {movies?.length === 0 && <div>No movies found</div>}
        {!hasNextPage && <div>Nothing more to show</div>}
      </div>
    </>
  );
};

export default MovieGrid;
