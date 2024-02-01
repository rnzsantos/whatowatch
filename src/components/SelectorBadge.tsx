import { Badge } from "@/components/ui/badge";

interface Props {
  genres: number[] | undefined;
}

const SelectorBadge = ({ genres }: Props) => {
  if (genres && genres.length !== 0)
    return (
      <Badge className="ml-2 bg-slate-800 hover:bg-slate-800">
        {genres.length}
      </Badge>
    );

  return null;
};

export default SelectorBadge;
