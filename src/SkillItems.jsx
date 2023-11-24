import { FaMinus } from "react-icons/fa";
import Item from "./Item";
import {
  SiDjango,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiSqlalchemy,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbGhost } from "react-icons/tb";

function Base({ title, Icon }) {
  return (
    <Item
      title={title}
      icon={<Icon  className="text-[#01A2E8] dark:text-[#EC008D] text-sm" />}
      titleClassName={"text-[#818181]"}
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
  return <Base title={"Django Rest Framework"} Icon={SiDjango} />;
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