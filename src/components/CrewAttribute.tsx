import Crew from "@/entities/Crew";

interface Props {
  crew: Crew;
}

const CrewAttribute = ({ crew }: Props) => {
  return (
    <div>
      <div className="font-semibold">{crew.name}</div>
      <div className="text-sm font-semibold text-slate-400">{crew.job}</div>
    </div>
  );
};

export default CrewAttribute;
