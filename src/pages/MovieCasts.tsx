import CastGrid from "@/components/CastGrid";
import { Button } from "@/components/ui/button";
import useCredits from "@/hooks/useCredits";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const MovieCasts = () => {
  const { movieId } = useParams();
  const { data: credits } = useCredits(movieId!);

  return (
    <div className="container space-y-4 py-8">
      <Link to={`/movies/${movieId}`} tabIndex={-1}>
        <Button className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to main
        </Button>
      </Link>
      <div className="text-2xl">
        All Casts <span className="text-slate-600">{credits?.cast.length}</span>
      </div>
      <CastGrid />
    </div>
  );
};

export default MovieCasts;
