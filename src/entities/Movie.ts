import Genre from "./Genre";
import ProductionCompany from "./ProductionCompany";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  tagline: string;
  genres: Genre[];
  release_date: string;
  runtime: number;
  original_title: string;
  original_language: string;
  spoken_languages: { english_name: string }[];
  homepage: string;
  status: string;
  budget: number;
  revenue: number;
  production_companies: ProductionCompany[];
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
}
