import MovieCard from "@/components/MovieCard";
import useSearch from "@/hooks/useSearch";

const SearchedMovies = () => {
  const { data } = useSearch();
  const movies = data?.pages.flatMap((page) => page.results);

  if (movies?.length === 0)
    return (
      <div className="container">
        <p>No movies found.</p>
      </div>
    );

  return (
    <div className="container grid grid-cols-5 gap-4 py-8">
      {movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

export default SearchedMovies;
