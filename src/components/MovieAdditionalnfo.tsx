import { Movie } from "@/entities/Movie";
import { format } from "date-fns";
import { ReactNode } from "react";

const convertToCurrency = (value: number) =>
  value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

interface MovieInfoProps {
  children: ReactNode[];
}

const MovieInfo = ({ children }: MovieInfoProps) => {
  return (
    <div>
      <div className="font-semibold">{children[0]}</div>
      <div className="text-sm text-slate-950">{children[1]}</div>
    </div>
  );
};

interface Props {
  movie: Movie;
}

const MovieAdditionalnfo = ({ movie }: Props) => {
  const formattedDate = movie.release_date
    ? format(new Date(movie.release_date), "MMMM d, yyy")
    : "NA";

  return (
    <>
      <MovieInfo>
        Release Date
        {formattedDate}
      </MovieInfo>

      <MovieInfo>
        Status
        {movie.status}
      </MovieInfo>

      <MovieInfo>
        Original Title
        {movie.original_title}
      </MovieInfo>

      <MovieInfo>
        Original Language
        {movie.original_language}
      </MovieInfo>

      <MovieInfo>
        Spoken Languages
        {movie.spoken_languages.map((lang) => lang.english_name).join(", ")}
      </MovieInfo>

      <MovieInfo>
        Budget
        {movie.budget ? convertToCurrency(movie.budget) : "NA"}
      </MovieInfo>

      <MovieInfo>
        Revenue
        {movie.revenue ? convertToCurrency(movie.revenue) : "NA"}
      </MovieInfo>

      <MovieInfo>
        Production Companies
        {movie.production_companies.map((company) => (
          <p key={company.id}>{company.name}</p>
        ))}
      </MovieInfo>
    </>
  );
};

export default MovieAdditionalnfo;
