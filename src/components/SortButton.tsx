import { Button } from "@/components/ui/button";
import { ArrowDownNarrowWide, ArrowUpNarrowWide } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const SortButton = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort_by");
  const index = sort?.indexOf(".");
  const key = sort?.slice(0, index);
  const value = sort?.slice(index);

  return (
    <Button
      className="bg-slate-950 px-2 text-white hover:bg-slate-900 hover:text-white"
      variant="outline"
      size="icon"
      onClick={() => {
        searchParams.set(
          "sort_by",
          key + (value === ".desc" ? ".asc" : ".desc"),
        );
        searchParams.sort();
        setSearchParams(searchParams);
      }}
    >
      {value === ".desc" ? <ArrowDownNarrowWide /> : <ArrowUpNarrowWide />}
    </Button>
  );
};

export default SortButton;
