import { FaGithub } from "react-icons/fa";
import Icon from "./Icon";
import Item from "./Item";
import { HiLocationMarker } from "react-icons/hi";
import { HiPhone } from "react-icons/hi2";
import { IoMail } from "react-icons/io5";
import { SiGithub } from "react-icons/si";

export default function Contacts() {
  const mail = "mrg.unique.golden@gmail.com";
  const tel = "+98 9214087601";
  const loc = "Tehran, district 10 ";
  const locUrl = "https://maps.app.goo.gl/YBtWELR4qFEZZWqb8";
  const github = "https://github.com/Mohamad-Golden";
  return (
    <div className="flex flex-col gap-y-4">
      <div className="text-black font-extrabold text-xl">Contacts</div>
      <div className="flex flex-col gap-y-3">
        <Item
          title={loc}
          titleUrl={locUrl}
          icon={<Icon Icon={HiLocationMarker} url={locUrl} />}
        />
        <Item
          title={tel}
          titleUrl={`tel:${tel}`}
          icon={<Icon Icon={HiPhone} url={`tel:${mail}`} />}
        />
        <Item
          title={mail}
          icon={<Icon Icon={IoMail} url={`mailto:${mail}`} />}
          titleUrl={`mailto:${mail}`}
        />
        <Item
          title={github}
          icon={<Icon Icon={SiGithub} url={github} />}
          titleUrl={github}
        />
      </div>
    </div>
  );
}
