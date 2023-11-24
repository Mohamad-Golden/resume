import Contacts from "./Contacts";
import Education from "./Education";
import Languages from "./Languages";
import Social from "./Social";

export default function SideBar() {
  return (
    <div className=" px-6">
      <div className="pt-5 pb-5">
        <img
          src="me.jpg"
          alt=""
          className="rounded-full w-44 h-44 object-cover shadow-xl  border-[#133A97] dark:border-[#842990] border-[.4vw]"
        />
      </div>
      <div className="flex flex-col gap-y-5 ">
        <Contacts />
        <Languages />
        <Social />
        <Education />
      </div>
    </div>
  );
}
