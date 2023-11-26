import Title from "./Title";
import { IoMdCheckmarkCircle } from "react-icons/io";
import {
  DjangoORM,
  DjangoRest,
  Docker,
  ExpressJs,
  FastApi,
  GRPC,
  GraphQL,
  JWT,
  Jotai,
  Linux,
  Microservice,
  MongoDB,
  OAuth2,
  PostgreSql,
  Prisma,
  ReactJs,
  ReactQuery,
  Redis,
  Rest,
  SQLAlchemy,
  Tailwind,
  Vim,
  VSCode,
  Git,
  Pytest,
  Selenium,
  Celery,
  Scrapy,
  AzureCognitiveSearch,
  SQLModel,
} from "./SkillItems";
import { SiFramework } from "react-icons/si";
import SkillPack from "./SkillPack";
import { FaCode, FaDatabase, FaRegQuestionCircle } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";

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
        <div className="pt-2 grid grid-cols-3 gap-y-4">
          <SkillPack title={"Frameworks"} Icon={SiFramework}>
            <FastApi />
            <DjangoRest />
            <ExpressJs />
          </SkillPack>
          <SkillPack title={"DBMSs"} Icon={FaDatabase}>
            <PostgreSql />
            <MongoDB />
            <Redis />
          </SkillPack>
          <SkillPack title={"ORMs"} Icon={FaDatabase}>
            <SQLAlchemy />
            <Prisma />
            <SQLModel />
            <DjangoORM />
          </SkillPack>
          <SkillPack title={"API Protocols"} Icon={FaDatabase}>
            <GraphQL />
            <Rest />
            <GRPC />
          </SkillPack>
          <SkillPack title={"Javascript"} Icon={TbBrandJavascript}>
            <ReactJs />
            <ReactQuery />
            <Jotai />
            <Tailwind />
          </SkillPack>
          <SkillPack title={"Tools"} Icon={FaDatabase}>
            <Docker />
            <Linux />
            <VSCode />
            <Git />
            <Vim />
          </SkillPack>
          <SkillPack title={"Libraries"} Icon={FaCode}>
            <Pytest />
            <Selenium />
            <Celery />
            <Scrapy />
          </SkillPack>
          <SkillPack title={"Others"} Icon={FaRegQuestionCircle}>
            <OAuth2 />
            <JWT />
            <Microservice />
            <AzureCognitiveSearch />
          </SkillPack>
        </div>
      </div>
    </div>
  );
}
