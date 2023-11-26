import Title from "./Title";
import { IoBagCheckSharp } from "react-icons/io5";
// import { FaUserCheck } from "react-icons/fa";
import {
  Celery,
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
        <div className="text-[#818181] text-sm ">
 I developed the back-end of a form builder and document management system.
  I also collaborated with front-end team to create some front-end features and pages.
        </div>
        <div className="pt-2 flex gap-x-4 gap-y-2 flex-wrap">
          <FastApi />
          <MongoDB />
          <Celery />
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
