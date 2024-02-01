import Trailer from "@/entities/Trailer";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

interface FetchTrailersResponse {
  id: number;
  results: Trailer[];
}

const useTrailer = (movieId: number) => {
  const apiClient = new APIClient<FetchTrailersResponse>(
    `movie/${movieId}/videos`,
  );

  return useQuery<FetchTrailersResponse, Error>({
    queryKey: ["movies", movieId, "trailer"],
    queryFn: apiClient.getTrailer,
    staleTime: ms("24h"),
  });
};

export default useTrailer;
