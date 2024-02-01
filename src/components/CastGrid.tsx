import useCredits from "@/hooks/useCredits";
import { useParams } from "react-router-dom";
import CastCard from "./CastCard";

interface Props {
  length?: number;
}

const CastGrid = ({ length }: Props) => {
  const { movieId } = useParams();
  const { data: credits } = useCredits(movieId!);
  const casts = credits?.cast.slice(0, length ? length : undefined);

  return (
    <div className="grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-8">
      {casts?.map((cast) => <CastCard key={cast.id} cast={cast} />)}
    </div>
  );
};

export default CastGrid;
