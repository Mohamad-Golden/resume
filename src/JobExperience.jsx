import {
  Celery,
  DjangoRest,
  FastApi,
  Javascript,
  Jinja,
  Jotai,
  MongoDB,
  PostgreSql,
  Python,
  ReactJs,
  ReactQuery,
  Tailwind,
  TypeScript,
} from "./SkillItems";
import Job from "./Job";
import Title from "./Title";
import { IoBagCheckSharp } from "react-icons/io5";

export default function JobExperience() {
  return (
    <div className="flex flex-col gap-y-1">
      <Title
        title={"Job Experience"}
        icon={
          <IoBagCheckSharp className="text-[#01A2E8] dark:text-[#EC008D] text-2xl" />
        }
      />
      <div className="flex flex-col gap-y-4">
        <Job
          jobTitle={"Back-end Developer"}
          companyAndYear={"Diginote | 2022 - 2023"}
          description="I developed the back-end of a form builder and document management system.
              I also collaborated with front-end team to create some front-end features and pages."
        >
          <FastApi />
          <MongoDB />
          <Celery />
          <ReactJs />
          <Jotai />
          <TypeScript />
          <Tailwind />
          <ReactQuery />
        </Job>
      <Job
        jobTitle={"Freelancer"}
        companyAndYear={" 2021 - 2022"}
        description="Developing small projects from different clients on different
freelancing platforms like Ponisha"
      >
        <Python />
        <DjangoRest />
        <PostgreSql />
        <Javascript />
        {/* <Jinja /> */}
      </Job>
      </div>
    </div>
  );
}
