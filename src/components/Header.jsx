import { useState } from "react";
import { linkGroup } from "../utils";

export const Header = () => {
  const [menuIsShow, setMenuIsShow] = useState(false);

  const setShowMenu = (bool) => {
    setMenuIsShow(bool);

    if (bool) {
      document.querySelector("html").style.overflow = "hidden";
    } else {
      document.querySelector("html").removeAttribute("style");
    }
  };

  const menus = [
    {
      text: "Tentang",
      link: "about",
    },
    {
      text: "Peraturan",
      link: "rules",
    },
    {
      text: "Channel",
      link: "channel",
    },
    {
      text: "Admin",
      link: "admin",
    },
    {
      text: "Event",
      link: "event",
    },
  ];

  const clickMenu = () => {
    setMenuIsShow(false);
    document.querySelector("html").removeAttribute("style");
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-10 bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-5 lg:py-1">
      <div className="container mx-auto flex items-center justify-between">
        <a href="" className="font-semibold text-white lg:text-xl">
          Mobile Legends Party
        </a>
        <nav>
          <div
            className="cursor-pointer lg:hidden"
            onClick={() => setShowMenu(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#fff"
            >
              <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </div>

          <div
            className={`fixed bottom-0 left-0 top-0 z-50 w-full transform bg-gradient-to-r from-indigo-500 to-blue-500 px-2 py-3 transition-transform duration-150 ease-in-out ${menuIsShow ? "right-0" : "-translate-x-full"} lg:relative lg:translate-x-0 lg:bg-none`}
          >
            <div className="mb-4 flex items-center justify-between border-b border-white/60 py-2 pb-3 lg:hidden">
              <a href="" className="px-2 font-semibold text-white lg:text-xl">
                Mobile Legends Party
              </a>

              <div
                className="w-max cursor-pointer"
                onClick={() => setShowMenu(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                </svg>
              </div>
            </div>

            <ul className="flex flex-col gap-y-2 lg:flex-row lg:gap-x-2">
              {menus.map((menu, index) => {
                return (
                  <li key={index}>
                    <a
                      href={`#${menu.link}`}
                      className="block p-2 font-medium text-white hover:opacity-70"
                      onClick={clickMenu}
                    >
                      {menu.text}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href={linkGroup}
                  className="mt-2 block rounded-full border border-white bg-white px-6 py-2 font-medium text-blue-500 hover:bg-transparent hover:text-white lg:mt-0"
                  onClick={clickMenu}
                >
                  Gabung
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
