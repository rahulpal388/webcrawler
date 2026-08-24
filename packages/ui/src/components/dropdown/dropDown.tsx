import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type DropDownProps<T> = {
  title: string;
  sideText: string | null;
  data: T;
  fields: Record<keyof T, string>;
};

export function DropDown<T extends Record<string, string | number | boolean>>({
  title,
  sideText,
  data,
  fields,
}: DropDownProps<T>) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div>
        <div
          className="flex items-center justify-between gap-2 cursor-pointer pb-6"
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setOpen(!open)}>
            <ChevronDown size={14} className={`${open ? "rotate-180" : "rotate-0"}`} />
            <p className="body font-semibold ">{title}</p>
          </div>
          {sideText && (
            <div className="border border-border-muted rounded-lg bg-surface-base shadow-sm px-4 py-px caption-xs  ">
              {sideText}
            </div>
          )}
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}

              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}

              className="flex flex-col gap-4 mt-2 p-4  overflow-hidden "
            >
              {Object.entries(data).map(([key, value]) => (
                <div key={key} className="grid grid-cols-[260px_1fr] gap-2">
                  <p className="body-sm ">{fields[key]}</p>
                  <p className="caption">{`${value}`}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
