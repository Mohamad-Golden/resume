import { twMerge } from "tailwind-merge";

export default function Item({
  icon,
  title,
  subtitle,
  url,
  className,
  titleUrl,
  titleClassName,
}) {
  return (
    <div className={twMerge("flex gap-3 items-center", className)}>
      {icon}
      <div>
        <div className={twMerge("text-white text-sm", titleClassName)}>
          {titleUrl ? (
            <a href={titleUrl} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </div>
        <div className={twMerge("text-white text-sm", titleClassName)}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {subtitle}
          </a>
        </div>
      </div>
    </div>
  );
}
