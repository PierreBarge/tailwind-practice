import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
} from "react-icons/hi";

export default function Header() {
  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200">
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="absolute text-gray-400 top-1/2 -translate-y-1/2 left-3"
        />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4"
        />
      </div>
      <div className="flex gap-2 mr-2">
        <Popover className="relative">
          <PopoverButton className="p-1.5 rounded-sm text-gray-700 focus:outline-none">
            <HiOutlineChatAlt fontSize={24} />
          </PopoverButton>
          <PopoverPanel
            transition
            className="absolute right-0 flex origin-top flex-col mt-2.5 w-80 transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
            <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
              <strong className="text-gray-700 font-medium">Messages</strong>
              <div className="mt-2 py-1">This is messages panel.</div>
            </div>
          </PopoverPanel>
        </Popover>
        <Popover className="relative">
          <PopoverButton className="p-1.5 rounded-sm text-gray-700 focus:outline-none">
            <HiOutlineBell fontSize={24} />
          </PopoverButton>
          <PopoverPanel
            transition
            className="absolute right-0 flex origin-top flex-col mt-2.5 w-80 transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
            <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
              <strong className="text-gray-700 font-medium">
                Notifications
              </strong>
              <div className="mt-2 py-1">This is notifications panel.</div>
            </div>
          </PopoverPanel>
        </Popover>
        <Menu as="div" className="relative">
          <MenuButton className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
            <div
              className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  'url("https://avatars.githubusercontent.com/u/161315289?s=40&v=4")',
              }}></div>
          </MenuButton>

          <MenuItems
            transition
            className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
            <MenuItem>
              <div className="rounded-sm px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-200">
                Your Profile
              </div>
            </MenuItem>
            <MenuItem>
              <div className="rounded-sm px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-200">
                Settings
              </div>
            </MenuItem>
            <MenuItem>
              <div className="rounded-sm px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-200">
                Sign out
              </div>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}
