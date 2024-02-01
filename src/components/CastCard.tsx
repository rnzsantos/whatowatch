import Cast from "@/entities/Cast";
import { getProfileImage } from "@/services/image-url";
import noImage from "../assets/no-image-placeholder.png";

interface Props {
  cast: Cast;
}

const CastCard = ({ cast }: Props) => {
  const profile = cast.profile_path
    ? getProfileImage(cast.profile_path)
    : noImage;

  return (
    <div>
      <img className="rounded" src={profile} />
      <div className="text-sm font-semibold">{cast.name}</div>
      <span className="text-xs text-slate-500">{cast.character}</span>
    </div>
  );
};

export default CastCard;
