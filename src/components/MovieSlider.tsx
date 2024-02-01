import useSliders from "@/hooks/useSliders";
import { getPosterImage2 } from "@/services/image-url";
import { Link, useParams } from "react-router-dom";
import noImage from "../assets/no-image-placeholder.jpg";
import RatingBadge from "./RatingBadge";

interface Props {
  slider: "recommendations" | "similar";
}

const MovieSlider = ({ slider }: Props) => {
  const { movieId } = useParams();
  const { data: movies } = useSliders({ movieId: movieId!, slider });

  if (!movies?.total_results) return <p>No movies found.</p>;

  return (
    <div className="grid snap-x auto-cols-max grid-flow-col gap-4 overflow-auto">
      {movies?.results.map((movie) => {
        const poster = movie.backdrop_path
          ? getPosterImage2(movie.backdrop_path)
          : noImage;

        return (
          <Link
            className="focus:opacity-80 focus:outline-none"
            to={`/movies/${movie.id}`}
            key={movie.id}
          >
            <div className="w-[300px] snap-center pb-2">
              <div className="relative">
                <img className="rounded-lg" src={poster} />
                <span className="text-xs font-semibold">{movie.title}</span>
                <div className="absolute left-1 top-[124px] h-[40px] w-[40px]">
                  <RatingBadge rating={movie.vote_average} textSize="text-sm" />
                </div>
                {movie.release_date && (
                  <div className="absolute right-1 top-[140px] rounded-lg bg-zinc-950 px-2 py-1 text-xs font-semibold text-white">
                    {movie.release_date.slice(0, 4)}
                  </div>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MovieSlider;
