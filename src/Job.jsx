import Title from "./Title";
import { IoBagCheckSharp } from "react-icons/io5";

export default function Job({
  jobTitle,
  companyAndYear,
  description,
  children,
}) {
  return (
    <div className="pl-1">
      <div className="text-sm text-[#818181] font-semibold mb-1">
        {companyAndYear && <div>{companyAndYear}</div>}
        <div className="text-[#01A2E8] dark:text-[#EC008D]">{jobTitle}</div>
      </div>
      <div className="text-[#818181] text-sm ">{description}</div>
      <div className="pt-2 flex gap-x-4 gap-y-2 flex-wrap">{children}</div>
    </div>
  );
}
