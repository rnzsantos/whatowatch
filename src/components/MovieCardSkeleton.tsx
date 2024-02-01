import { Skeleton } from "@/components/ui/skeleton";

const MovieCardSkeleton = () => {
  return (
    <Skeleton className="border-2 border-zinc-800 bg-zinc-950">
      <Skeleton className="h-[247px] rounded-lg bg-zinc-950 md:h-[231px] lg:h-[253px] xl:h-[330px]" />
      <div className="space-y-2 border-t-2 border-zinc-800 p-4">
        <Skeleton className="h-2 w-full bg-slate-200" />
        <Skeleton className="h-2 w-[40%] bg-slate-400" />
      </div>
    </Skeleton>
  );
};

export default MovieCardSkeleton;
