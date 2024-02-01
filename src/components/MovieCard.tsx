import { Card, CardContent } from "@/components/ui/card";
import { Movie } from "@/entities/Movie";
import { getPosterImage } from "@/services/image-url";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import noImage from "../assets/no-image-placeholder.png";
import RatingBadge from "./RatingBadge";

interface Props {
  movie: Movie;
  maxWidth?: string;
}

const MovieCard = ({ movie, maxWidth }: Props) => {
  const poster = movie.poster_path
    ? getPosterImage(movie.poster_path)
    : noImage;

  const formattedDate = movie.release_date
    ? format(new Date(movie.release_date), "MMM d, yyy")
    : "NA";

  return (
    <Link
      className="rounded-lg focus:p-1 focus:outline-zinc-800"
      to={`/movies/${movie.id}`}
    >
      <Card
        className={`${maxWidth} h-full overflow-hidden border-2 border-zinc-800 bg-zinc-950 shadow-md`}
      >
        <img src={poster} />
        <CardContent className="relative border-t-2 border-zinc-800 p-4 pt-6">
          <div className="text-sm font-semibold text-slate-200">
            {movie.title}
          </div>
          <div className="text-xs text-slate-400">{formattedDate}</div>
          <div className="absolute -top-5 left-3 h-[40px] w-[40px] ">
            <RatingBadge rating={movie.vote_average} textSize="text-sm" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MovieCard;
