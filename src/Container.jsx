import ContainerWrapper from "./ContainerWrapper";
import JobExperience from "./JobExperience";
import PersonalSummary from "./PersonalSummary";
import Skills from "./Skills";

export default function Container() {
  return (
    <ContainerWrapper>
      <div className="py-10 pr-12 pl-6">
        <div className="text-right">
          <div className="text-[#01A2E8] text-4xl dark:text-[#842990]">
            <div>Mohammad Reza</div>
            <div>Talaei</div>
          </div>
          <div className="text-[#818181]">WEB DEVELOPER</div>
        </div>
        <div className="flex flex-col gap-y-8">
          <PersonalSummary />
          <JobExperience />
          <Skills />
        </div>
      </div>
    </ContainerWrapper>
  );
}
