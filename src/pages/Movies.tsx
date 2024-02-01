import GenreSelector from "@/components/GenreSelector";
import MovieGrid from "@/components/MovieGrid";
import SortButton from "@/components/SortButton";
import SortSelector from "@/components/SortSelector";

const Movies = () => {
  return (
    <div className="pb-8 pt-4">
      <div className="sticky top-[64px] z-50 bg-white py-4">
        <div className="container">
          <div className="flex justify-between gap-8 overflow-auto py-4">
            <GenreSelector />
            <div className="flex gap-2">
              <SortSelector />
              <SortButton />
            </div>
          </div>
        </div>
      </div>
      <div className="container py-1">
        <MovieGrid />
      </div>
    </div>
  );
};

export default Movies;
