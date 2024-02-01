import CastGrid from "@/components/CastGrid";
import MovieAdditionalnfo from "@/components/MovieAdditionalnfo";
import MovieDetailCard from "@/components/MovieDetailCard";
import MovieSlider from "@/components/MovieSlider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import useMovie from "@/hooks/useMovie";
import { Link, useParams } from "react-router-dom";

const MovieDetail = () => {
  const { movieId } = useParams();
  const { data: movie, error } = useMovie(movieId!);

  if (movie && !error)
    return (
      <div className="space-y-8 pb-8">
        <MovieDetailCard movie={movie} />
        <div className="container flex justify-center lg:hidden">
          <Dialog>
            <DialogTrigger asChild>
              <Button>View Additional Info</Button>
            </DialogTrigger>
            <DialogContent className="max-w-max rounded-lg bg-slate-100">
              <DialogHeader className="space-y-3 text-left">
                <MovieAdditionalnfo movie={movie} />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <div className="container grid grid-cols-12 lg:gap-8">
          <div className="col-span-12 space-y-8 lg:col-span-10">
            <div className="space-y-4">
              <div className="flex justify-between">
                <h5 className="self-end text-2xl">Cast</h5>
                <Link to={`/movies/${movieId}/casts`} tabIndex={-1}>
                  <Button variant="secondary">View All</Button>
                </Link>
              </div>
              <div className="md:hidden">
                <CastGrid length={9} />
              </div>
              <div className="hidden md:block lg:hidden">
                <CastGrid length={10} />
              </div>
              <div className="hidden lg:block">
                <CastGrid length={8} />
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-2xl">Recommendations</div>
              <MovieSlider slider="recommendations" />
            </div>

            <div className="space-y-4">
              <div className="text-2xl">Similar</div>
              <MovieSlider slider="similar" />
            </div>
          </div>
          <div className="col-span-2 hidden space-y-3 lg:block">
            <MovieAdditionalnfo movie={movie} />
          </div>
        </div>
      </div>
    );
};

export default MovieDetail;
