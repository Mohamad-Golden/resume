import Title from "./Title";
import { IoBagCheckSharp } from "react-icons/io5";
// import { FaUserCheck } from "react-icons/fa";
import {
  FastApi,
  Jotai,
  MongoDB,
  ReactJs,
  ReactQuery,
  Tailwind,
  TypeScript,
} from "./SkillItems";

export default function JobExperience() {
  return (
    <div className="flex flex-col gap-y-1">
      <Title
        title={"Job Experience"}
        icon={<IoBagCheckSharp  className="text-[#01A2E8] dark:text-[#EC008D] text-2xl" />}
      />
      <div className="pl-1">
        <div className="text-sm text-[#818181] font-semibold mb-1">
          <div>Diginote | 2022 - 2023</div>
          <div className="text-[#01A2E8] dark:text-[#EC008D]">Back-end Developer</div>
        </div>
        <div className="text-[#818181] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero enim
          accusantium praesentium culpa, iste aperiam repellat facilis inventore
          blanditiis nulla perspiciatis sequi sapiente vitae, sed laboriosam
          suscipit necessitatibus vero eligendi.
        </div>
        <div className="pt-2 flex gap-4 flex-wrap">
          <FastApi />
          <MongoDB />
          <ReactJs />
          <Jotai />
          <TypeScript />
          <Tailwind />
          <ReactQuery />
        </div>
      </div>
    </div>
  );
}
