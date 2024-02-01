import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Movie } from "@/entities/Movie";
import useTrailer from "@/hooks/useTrailer";
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Props {
  movie: Movie;
}

const MovieTrailer = ({ movie }: Props) => {
  const { data: trailers } = useTrailer(movie.id);
  const officialTrailer = trailers?.results.find(
    (trailer) => trailer.official && trailer.type === "Trailer",
  );

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center gap-1 font-semibold hover:text-slate-400">
          <Play />
          Play Trailer
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[702px] border-none px-4 py-0">
        <DialogHeader>
          <div className="mb-2 mt-6 text-left font-semibold text-slate-200">
            {movie.title}
          </div>
          <div className="w-full">
            <AspectRatio ratio={16 / 9}>
              <iframe
                src={`https://www.youtube.com/embed/${officialTrailer?.key}`}
                height="90%"
                width="100%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={officialTrailer?.name}
              />
            </AspectRatio>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MovieTrailer;
