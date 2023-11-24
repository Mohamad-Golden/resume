import Title from "./Title";

export default function SkillPack({ title, Icon, children }) {
  return (
    <div className="flex flex-col gap-y-2 flex-wrap">
      <Title
        title={title}
        className={"text-sm"}
        icon={<Icon  className="text-[#01A2E8] dark:text-[#EC008D]" />}
      />
      <div className="pl-1 flex flex-col gap-y-1 flex-wrap max-h-24">
        {children}
      </div>
    </div>
  );
}
