import { Movie } from "@/entities/Movie";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const useMovie = (movieId: number | string) => {
  const apiClient = new APIClient<Movie>(`movie/${movieId}`);

  return useQuery<Movie, Error>({
    queryKey: ["movies", movieId],
    queryFn: apiClient.getMovie,
    staleTime: ms("24h"),
  });
};

export default useMovie;
