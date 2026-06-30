import { Check } from "lucide-react";

interface AssuranceItemProps {
  text: string;
}

export function AssuranceItem({ text }: AssuranceItemProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="rounded-full bg-white p-0.5">
        <Check className="h-3 w-3 text-black" />
      </div>
      <span className="font-medium text-sm">{text}</span>
    </div>
  );
}