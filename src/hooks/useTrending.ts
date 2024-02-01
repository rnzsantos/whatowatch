import { Movie } from "@/entities/Movie";
import APIClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const useTrending = (timeWindow: "day" | "week") => {
  const apiClient = new APIClient<Movie>(
    `trending/movie/${timeWindow}?language=en-US`,
  );

  return useQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", "trending", timeWindow],
    queryFn: () => apiClient.getMovies(),
    staleTime: ms("24h"),
  });
};

export default useTrending;
