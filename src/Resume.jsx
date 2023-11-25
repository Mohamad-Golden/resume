import Container from "./Container";
import SideBar from "./Sidebar";

export default function Resume() {
  return (
    <div className="bg-gradient-to-t from-[#015EAB] to-[#02b0fb] h-screen dark:from-[#842990] dark:to-[#EC008D] ">
      <div className="flex py-4 max-w-5xl justify-center mx-auto">
        <Container />
        <SideBar />
      </div>
    </div>
  );
}
