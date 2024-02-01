import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router-dom";

const SortSelector = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortFilter = searchParams.get("sort_by");
  const index = sortFilter?.indexOf(".");
  const sortOrder = sortFilter?.slice(index);

  const selectItems = [
    { value: "popularity", label: "Popularity" },
    { value: "vote_average", label: "Rating" },
    { value: "primary_release_date", label: "Release Date" },
  ];

  return (
    <Select
      value={sortFilter?.slice(0, index)}
      onValueChange={(value) => {
        searchParams.set("sort_by", value + sortOrder);
        searchParams.sort();
        setSearchParams(searchParams);
      }}
    >
      <SelectTrigger className="w-[150px] whitespace-nowrap bg-slate-950 px-3 font-semibold text-white hover:bg-slate-900 hover:text-white">
        <SelectValue placeholder="Sort" />
      </SelectTrigger>
      <SelectContent
        className="font-semibold"
        ref={(ref) => {
          if (!ref) return;
          ref.ontouchstart = (e) => e.preventDefault();
        }}
      >
        {selectItems.map((item, index) => (
          <SelectItem key={index} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SortSelector;
