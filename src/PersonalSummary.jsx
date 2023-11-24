import Title from "./Title";
import { IoMdContact } from "react-icons/io";

export default function PersonalSummary() {
  return (
    <div className="flex flex-col gap-y-2">
      <Title
        title={"Personal Summary"}
        icon={<IoMdContact  className="text-[#01A2E8] dark:text-[#EC008D] text-2xl"/>}
      />
      <div className="text-[#818181] pl-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero enim
        accusantium praesentium culpa, iste aperiam repellat facilis inventore
        blanditiis nulla perspiciatis sequi sapiente vitae, sed laboriosam
        suscipit necessitatibus vero eligendi.
      </div>
    </div>
  );
}
