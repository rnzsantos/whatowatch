import { Movie } from "@/entities/Movie";
import APIClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

interface Config {
  movieId: number | string;
  slider: string;
}

const useSliders = (config: Config) => {
  const endpoint =
    config.slider === "recommendations" ? "recommendations" : "similar";

  const apiClient = new APIClient<Movie>(`movie/${config.movieId}/${endpoint}`);

  return useQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", config.movieId, config.slider],
    queryFn: apiClient.getRecommendations,
    staleTime: ms("24h"),
  });
};

export default useSliders;
