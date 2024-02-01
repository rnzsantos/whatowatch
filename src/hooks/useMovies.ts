import { Movie } from "@/entities/Movie";
import APIClient, { FetchResponse } from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { useSearchParams } from "react-router-dom";

const apiClient = new APIClient<Movie>(
  "discover/movie?include_adult=false&include_video=false&language=en-US&without_genres=99,10755&vote_count.gte=200",
);

const useMovies = () => {
  const [searchParams] = useSearchParams();

  return useInfiniteQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", ...searchParams],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getMovies({
        params: {
          page: pageParam,
          with_genres: searchParams.get("with_genres"),
          sort_by: searchParams.get("sort_by"),
        },
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.page !== lastPage.total_pages ? allPages.length + 1 : undefined,
    staleTime: ms("24h"),
  });
};

export default useMovies;
