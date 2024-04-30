"use client";
import { usePathname } from "next/navigation";
import NavButton from "./NavButton";
import {
  FaDashcube,
  FaDiscourse,
  FaPeopleArrows,
  FaQuestionCircle,
} from "react-icons/fa";
const Sidebar = () => {
  const path = usePathname();
  return (
    <aside className="h-screen max-h-screen w-[20vw] bg-slate-700 p-8 font-mono ">
      <h1 className="mb-16 text-3xl font-black text-white">RentRight Admin</h1>
      <div className="flex flex-col gap-4">
        <NavButton
          text="Dashboard"
          icon={<FaDashcube />}
          link={"/not312/dashboard"}
          active={path === "/not312/dashboard"}
        />
        <NavButton
          text="Feedback"
          icon={<FaDiscourse />}
          link={"/not312/dashboard/feedback"}
          active={path === "/not312/dashboard/feedback"}
        />
        <NavButton
          text="Subscribers"
          icon={<FaPeopleArrows />}
          link={"/not312/dashboard/subscribers"}
          active={path === "/not312/dashboard/subscribers"}
        />
        <NavButton
          text="FAQs"
          icon={<FaQuestionCircle />}
          link={"/not312/dashboard/faq"}
          active={path === "/not312/dashboard/faq"}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
