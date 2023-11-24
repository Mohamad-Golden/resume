import { twMerge } from "tailwind-merge";

export default function Title({ icon, title, className }) {
  return (
    <div className="flex gap-x-2 items-center">
      {icon}
      <div className={twMerge("text-black font-bold text-xl", className)}>
        {title}
      </div>
    </div>
  );
}
