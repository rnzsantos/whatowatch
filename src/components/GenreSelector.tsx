import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import GENRES from "@/data/genres";
import { Close } from "@radix-ui/react-popover";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SelectorBadge from "./SelectorBadge";

const GenreSelector = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const genresFilter = searchParams.get("with_genres")?.split(",") || [];
  const genres = genresFilter.map((num) => parseInt(num, 10));
  const [selectedGenres, setSelectedGenres] = useState(genres || []);

  const setGenres = () => {
    if (selectedGenres.length === 0) {
      searchParams.delete("with_genres");
    } else {
      searchParams.set("with_genres", selectedGenres.join(","));
    }
    searchParams.sort();
    setSearchParams(searchParams);
  };

  return (
    <Popover
      onOpenChange={(open) => {
        if (open) setSelectedGenres(genres);
      }}
    >
      <PopoverTrigger
        className="bg-slate-950 px-3 text-white hover:bg-slate-900 hover:text-white"
        asChild
      >
        <Button variant="outline">
          Genre
          <SelectorBadge genres={genres} />
          <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="pb-0" onPointerDownOutside={setGenres}>
        <div className="mb-4 flex justify-end align-middle">
          <Close className="text-slate-500 hover:text-black">
            <X />
          </Close>
        </div>
        <ScrollArea className="h-[28vh]">
          {GENRES?.map((genre) => (
            <div
              className="flex items-center justify-between space-x-2 pb-6 pl-4 pr-8"
              key={genre.id}
            >
              <Label htmlFor={genre.id.toString()}>{genre.name}</Label>
              <Checkbox
                id={genre.id.toString()}
                checked={selectedGenres?.includes(genre.id)}
                onCheckedChange={() =>
                  selectedGenres?.includes(genre.id)
                    ? setSelectedGenres(
                        selectedGenres.filter((g) => g !== genre.id),
                      )
                    : setSelectedGenres([...selectedGenres, genre.id])
                }
              />
            </div>
          ))}
        </ScrollArea>
        <div className="flex justify-between border-t-[1px] p-4">
          <Button variant="outline" onClick={() => setSelectedGenres([])}>
            Clear All
          </Button>
          <Close asChild>
            <Button onClick={setGenres}>Apply</Button>
          </Close>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default GenreSelector;
