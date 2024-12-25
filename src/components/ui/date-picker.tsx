// DatePicker.tsx
import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  label?: string;
  className?: string;
  disabled?: (date: Date) => boolean;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  selected,
  onSelect,
  label = "Pick a date",
  className,
  disabled,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "flex items-center h-[50px] w-full px-5 py-2 border focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-white text-text rounded-2xl",
            !selected && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selected ? format(selected, "PPP") : <span>{label}</span>}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={onSelect}
          initialFocus
          disabled={disabled}
        />
      </PopoverContent>
    </Popover>
  );
};
