import prettyMs from "pretty-ms";

const convertToTimeFormat = (minutes: number) => {
  const milliseconds = minutes * 60 * 1000;
  return prettyMs(milliseconds, { verbose: false });
};

interface Props {
  totalMinutes: number;
}

const MovieRuntime = ({ totalMinutes }: Props) => {
  const timeFormat = convertToTimeFormat(totalMinutes);

  if (totalMinutes) return <span>{timeFormat}</span>;

  return null;
};

export default MovieRuntime;
