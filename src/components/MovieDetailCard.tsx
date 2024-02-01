import { Movie } from "@/entities/Movie";
import useCredits from "@/hooks/useCredits";
import { getBackdropImage, getPosterImage } from "@/services/image-url";
import "react-circular-progressbar/dist/styles.css";
import CrewAttribute from "./CrewAttribute";
import MovieRuntime from "./MovieRuntime";
import MovieTrailer from "./MovieTrailer";
import RatingBadge from "./RatingBadge";
import noImage from "../assets/no-image-placeholder.png";

interface Props {
  movie: Movie;
}

const MovieDetailCard = ({ movie }: Props) => {
  const backdrop = movie.backdrop_path
    ? getBackdropImage(movie.backdrop_path)
    : null;
  const poster = movie.poster_path
    ? getPosterImage(movie.poster_path)
    : noImage;

  const { data: credits } = useCredits(movie.id.toString());
  const movieDirectors =
    credits?.crew.filter((c) => c.job === "Director") || [];
  const otherCrewLength = movieDirectors.length > 1 ? 4 : 5;
  const otherCrew =
    credits?.crew
      .filter((c) => c.job !== "Director")
      .slice(0, otherCrewLength) || [];
  const productionCrews = [...movieDirectors, ...otherCrew];

  return (
    <div className="bg-black">
      <div className="container">
        <div
          className="bg-cover bg-center shadow-[0_0_100px_80px_black_inset]"
          style={{ backgroundImage: backdrop! }}
        >
          <div className="py-8 backdrop-brightness-[20%]">
            <div className="text-white md:flex md:gap-6">
              <img
                className="hidden max-h-[450px] rounded-lg md:block"
                src={poster}
              />
              <div className="w-full space-y-4">
                <div>
                  <h3 className="text-3xl font-bold">{movie.title}</h3>
                  <div className="space-x-2 text-slate-300">
                    {movie.release_date && (
                      <span>{movie.release_date.slice(0, 4)}</span>
                    )}
                    <span>
                      {movie.genres.map((genre) => genre.name).join(" | ")}
                    </span>
                    <MovieRuntime totalMinutes={movie.runtime} />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-[50px] w-[50px] ">
                    <RatingBadge rating={movie.vote_average} />
                  </div>
                  <MovieTrailer movie={movie} />
                </div>

                <div className="space-y-2">
                  {movie.tagline && (
                    <p className="mb-4 italic text-slate-100">
                      "{movie.tagline}"
                    </p>
                  )}
                  <div className="text-lg font-semibold">Overview</div>
                  <p>{movie.overview || "No overview yet."}</p>
                </div>

                <div className="grid grid-cols-2 justify-between gap-6 lg:grid-cols-3">
                  {productionCrews.map((crew, index) => (
                    <CrewAttribute key={index} crew={crew} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailCard;
