import { FaDatabase, FaMinus } from "react-icons/fa";
import Item from "./Item";
import {
  SiCelery,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiJinja,
  SiLinux,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPytest,
  SiPython,
  SiReact,
  SiRedis,
  SiSelenium,
  SiSqlalchemy,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVim,
} from "react-icons/si";
import {
  TbBrandOauth,
  TbBrandVscode,
  TbCloudSearch,
  TbGhost,
} from "react-icons/tb";

function Base({ title, Icon }) {
  return (
    <Item
      title={title}
      icon={<Icon className="text-[#01A2E8] dark:text-[#EC008D] text-sm" />}
      titleClassName={"text-[#818181] whitespace-nowrap"}
      className={"gap-x-[5px]"}
    />
  );
}

export function FastApi() {
  return <Base title={"FastApi"} Icon={SiFastapi} />;
}

export function MongoDB() {
  return <Base title={"MongoDB"} Icon={SiMongodb} />;
}

export function ReactJs() {
  return <Base title={"ReactJs"} Icon={SiReact} />;
}

export function Jotai() {
  return <Base title={"Jotai"} Icon={TbGhost} />;
}

export function TypeScript() {
  return <Base title={"TypeScript"} Icon={SiTypescript} />;
}

export function PostgreSql() {
  return <Base title={"PostgreSQL"} Icon={SiPostgresql} />;
}

export function Tailwind() {
  return <Base title={"Tailwind CSS"} Icon={SiTailwindcss} />;
}

export function ReactQuery() {
  return <Base title={"React Query"} Icon={FaMinus} />;
}

export function Redis() {
  return <Base title={"Redis"} Icon={SiRedis} />;
}

export function ExpressJs() {
  return <Base title={"ExpressJs"} Icon={SiExpress} />;
}

export function DjangoRest() {
  return <Base title={"DRF"} Icon={SiDjango} />;
}

export function SQLAlchemy() {
  return <Base title={"SQLAlchemy"} Icon={SiSqlalchemy} />;
}

export function Prisma() {
  return <Base title={"Prisma"} Icon={SiPrisma} />;
}

export function DjangoORM() {
  return <Base title={"Django ORM"} Icon={FaMinus} />;
}

export function Docker() {
  return <Base title={"Docker"} Icon={SiDocker} />;
}

export function Linux() {
  return <Base title={"Linux"} Icon={SiLinux} />;
}

export function Vim() {
  return <Base title={"Vim"} Icon={SiVim} />;
}

export function Rest() {
  return <Base title={"Rest"} Icon={FaMinus} />;
}

export function GraphQL() {
  return <Base title={"GraphQL"} Icon={SiGraphql} />;
}

export function GRPC() {
  return <Base title={"gRPC"} Icon={FaMinus} />;
}

export function OAuth2() {
  return <Base title={"OAuth2"} Icon={TbBrandOauth} />;
}

export function Microservice() {
  return <Base title={"Microservice"} Icon={FaMinus} />;
}

export function JWT() {
  return <Base title={"JWT"} Icon={FaMinus} />;
}

export function VSCode() {
  return <Base title={"VSCode"} Icon={TbBrandVscode} />;
}

export function Git() {
  return <Base title={"Git"} Icon={SiGit} />;
}

export function Pytest() {
  return <Base title={"Pytest"} Icon={SiPytest} />;
}

export function Selenium() {
  return <Base title={"Selenium"} Icon={SiSelenium} />;
}

export function Celery() {
  return <Base title={"Celery"} Icon={SiCelery} />;
}

export function Scrapy() {
  return <Base title={"Scrapy"} Icon={FaMinus} />;
}

export function AzureCognitiveSearch() {
  return <Base title={"Azure Cognitive Search"} Icon={TbCloudSearch} />;
}

export function SQLModel() {
  return <Base title={"SQLModel"} Icon={FaDatabase} />;
}

export function Swagger() {
  return <Base title={"Swagger"} Icon={SiSwagger} />;
}

export function Python() {
  return <Base title={"Python"} Icon={SiPython} />;
}

export function Javascript() {
  return <Base title={"Javascript"} Icon={SiJavascript} />;
}

export function Jinja() {
  return <Base title={"Jinja"} Icon={SiJinja} />;
}

export function Websocket() {
  return <Base title={"Websocket"} Icon={FaMinus} />;
}
