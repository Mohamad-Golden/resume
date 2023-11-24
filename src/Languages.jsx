import Item from "./Item";
import { FaMinus } from "react-icons/fa";

export default function Languages() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="text-black font-extrabold text-xl">Languages</div>
      <div className="flex flex-col gap-y-3">
        <Item
          title="Persian"
          icon={<FaMinus  className="text-white" />}
        />
        <Item
          title="English"
          icon={<FaMinus  className="text-white" />}
        />
      </div>
    </div>
  );
}
