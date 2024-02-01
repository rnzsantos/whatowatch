import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

interface Props {
  rating: number;
  textSize?: "text-sm" | "text-md";
}

const RatingBadge = ({ rating, textSize = "text-md" }: Props) => {
  const movieRating = rating.toFixed(1);

  const badgeColor =
    rating >= 7 ? "#84cc16" : rating >= 4 ? "#f59e0b" : "#f43f5e";

  const trailColor =
    rating >= 7 ? "#4d7c0f" : rating >= 4 ? "#b45309" : "#be123c";

  return (
    <div className="rounded-full border-2 border-zinc-800">
      <CircularProgressbarWithChildren
        value={Number(movieRating)}
        maxValue={10}
        background={true}
        styles={buildStyles({
          pathColor: badgeColor,
          trailColor: trailColor,
          backgroundColor: "#09090b",
        })}
      >
        <div className={`${textSize} font-semibold text-white`}>
          {movieRating === "0.0" ? "NA" : movieRating}
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default RatingBadge;
