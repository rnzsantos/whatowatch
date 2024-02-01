import Cast from "@/entities/Cast";
import Crew from "@/entities/Crew";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

interface FetchCreditsResponse {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

const useCredits = (movieId: string) => {
  const apiClient = new APIClient<FetchCreditsResponse>(
    `movie/${movieId}/credits`,
  );

  return useQuery<FetchCreditsResponse, Error>({
    queryKey: ["movies", movieId, "credits"],
    queryFn: apiClient.getCredits,
    staleTime: ms("24h"),
  });
};

export default useCredits;
