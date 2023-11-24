import { twMerge } from "tailwind-merge";

export default function Icon({ Icon, size, className, url, wrapperClassName }) {
  const icon = (
    <Icon
      size={size}
      className={twMerge("text-[#015EAB] dark:text-[#842990]", className)}
    />
  );
  const parentClassName = twMerge(
    "grid place-items-center bg-white w-6 h-6 rounded-full ",
    wrapperClassName
  );
  return (
    <>
      {url ? (
        <a
          className={parentClassName}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon}
        </a>
      ) : (
        <div className={parentClassName}>{icon}</div>
      )}
    </>
  );
}
