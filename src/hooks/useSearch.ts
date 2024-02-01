import { Movie } from "@/entities/Movie";
import APIClient, { FetchResponse } from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

const apiClient = new APIClient<Movie>(
  "search/movie?include_adult=false&language=en-US",
);

const useSearch = () => {
  const [searchParams] = useSearchParams();

  return useInfiniteQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", ...searchParams],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getMovies({
        params: {
          page: pageParam,
          query: searchParams.get("query"),
        },
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.page !== lastPage.total_pages ? allPages.length + 1 : undefined,
  });
};

export default useSearch;
