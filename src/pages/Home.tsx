import MovieCard from "@/components/MovieCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useTrendingDay from "@/hooks/useTrendingDay";
import useTrendingWeek from "@/hooks/useTrendingWeek";
import { useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);
  const { data: moviesDay } = useTrendingDay();
  const { data: moviesWeek } = useTrendingWeek();

  return (
    <div className="container py-8">
      <div className="mb-8">
        <form
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("movies/search");
            if (ref.current) {
              searchParams.set("query", ref.current?.value);
              searchParams.sort();
              setSearchParams(searchParams);
            }
          }}
        >
          <Input ref={ref} placeholder="Search movies..." />
          <Button>Search</Button>
        </form>
      </div>

      <Tabs defaultValue="today">
        <div className="flex gap-4">
          <div className="text-2xl font-semibold">Trending</div>
          <TabsList>
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="this-week">This Week</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="today">
          <div className="grid snap-x auto-cols-max grid-flow-col gap-4 overflow-auto py-2">
            {moviesDay?.results.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                maxWidth="max-w-[180px]"
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="this-week">
          <div className="grid snap-x auto-cols-max grid-flow-col gap-4 overflow-auto py-2">
            {moviesWeek?.results.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                maxWidth="max-w-[180px]"
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Home;
