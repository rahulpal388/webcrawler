import { cn } from "./utils";

export function InfoCard({
  className,
  title,
  value,
}: {
  className?: string;
  title: string;
  value: number;
}) {
  return (
    <>
      <div
        className={cn(
          "bg-neutral-50 w-36 h-28 flex  flex-col items-center justify-center border-[1px] border-neutral-200/60 shadow-xl rounded-lg",
          className,
        )}
      >
        <h2 className=" text-xl font-semibold  ">{title}</h2>
        <p>{value}</p>
      </div>
    </>
  );
}
