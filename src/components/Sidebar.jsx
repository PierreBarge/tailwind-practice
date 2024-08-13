import { FcBullish } from "react-icons/fc";
import {
  sidebarBottomLinks,
  sidebarTopLinks,
} from "../assets/data/sidebarLinksList";
import SidebarLink from "./SidebarLink";
import { HiOutlineLogout } from "react-icons/hi";

export default function Sidebar() {
  return (
    <div className="bg-neutral-900 w-1/6 p-3 flex flex-col text-white">
      <div className="flex items-center gap-2 px-1 py-3">
        <FcBullish fontSize={24} />
        <span className="text-neutral-100 text-lg">OpenShop</span>
      </div>
      <div className="py-8 flex flex-1 flex-col gap-0.5">
        {sidebarTopLinks.map((item) => (
          <SidebarLink key={item.key} link={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {sidebarBottomLinks.map((item) => (
          <SidebarLink key={item.key} link={item} />
        ))}
        <div className="flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base cursor-pointer text-red-500">
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}
