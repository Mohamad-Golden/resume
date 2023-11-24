import Icon from "./Icon";
import Item from "./Item";
import { FaInstagram, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

export default function Social() {
  const linkedInUrl =
    "https://www.linkedin.com/in/mohamad-reza-golden-94255723a";
  const instagramUrl = "https://www.instagram.com/mohamadrezagolden";
  const telegramUrl = "https://t.me/Mj_Golden";

  return (
    <div className="flex flex-col gap-y-4">
      <div className="text-black font-extrabold text-xl">Social</div>
      <div className="flex flex-col gap-y-3">
        <Item
          title="LinkedIn"
          icon={<Icon  Icon={FaLinkedinIn} url={linkedInUrl} />}
          subtitle={linkedInUrl.split("/").at(-1)}
          url={linkedInUrl}
          titleClassName="whitespace-nowrap"
          className="items-start"
        />
        <Item
          title="Telegram"
          icon={<Icon  Icon={FaTelegramPlane} url={telegramUrl} />}
          url={telegramUrl}
          className="items-start"
          titleClassName="whitespace-nowrap"
          subtitle={telegramUrl.split("/").at(-1)}
        />
        <Item
          title="Instagram"
          icon={<Icon  Icon={FaInstagram} url={instagramUrl} />}
          url={instagramUrl}
          titleClassName="whitespace-nowrap"
          className="items-start"
          subtitle={instagramUrl.split("/").at(-1)}
        />
      </div>
    </div>
  );
}
