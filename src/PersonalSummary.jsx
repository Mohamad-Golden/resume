import Title from "./Title";
import { IoMdContact } from "react-icons/io";

export default function PersonalSummary() {
  return (
    <div className="flex flex-col gap-y-2">
      <Title
        title={"Personal Summary"}
        icon={
          <IoMdContact className="text-[#01A2E8] dark:text-[#EC008D] text-2xl" />
        }
      />
      <div className="text-[#818181] pl-1 text-sm">
        Hey there! I'm your friendly neighborhood Back-end Developer. I'm 23 and
        I've been programming for 3 years. I love playing around with Node.js
        and Python to create cool stuff on the internet. I'm also improving my
        front-end skills.
      </div>
    </div>
  );
}
