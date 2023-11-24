import Title from "./Title";
import { IoMdCheckmarkCircle } from "react-icons/io";
import {
  DjangoORM,
  DjangoRest,
  ExpressJs,
  FastApi,
  MongoDB,
  PostgreSql,
  Prisma,
  Redis,
  SQLAlchemy,
} from "./SkillItems";
import { SiFramework } from "react-icons/si";
import SkillPack from "./SkillPack";
import { FaDatabase } from "react-icons/fa";

export default function Skills() {
  return (
    <div className="flex flex-col gap-y-1">
      <Title
        title={"Skills"}
        icon={
          <IoMdCheckmarkCircle className="text-[#01A2E8] dark:text-[#EC008D] text-2xl" />
        }
      />
      <div className="pl-1">
        <div className="pt-2 grid gap-4 grid-cols-3">
          <SkillPack title={"Framework"} Icon={SiFramework}>
            <FastApi />
            <DjangoRest />
            <ExpressJs />
          </SkillPack>
          <SkillPack title={"DBMS"} Icon={FaDatabase}>
            <PostgreSql />
            <MongoDB />
            <Redis />
          </SkillPack>
          <SkillPack title={"ORM"} Icon={FaDatabase}>
            <SQLAlchemy />
            <Prisma />
            <DjangoORM />
          </SkillPack>
        </div>
      </div>
    </div>
  );
}
