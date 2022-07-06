import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
const Nav: React.FC = () => {
  const [open, setOpen] = useState<Boolean>(false);
  return (
    <nav className="w-full h-max py-2 bg-blue-600 flex sticky z-[999] top-0 left-0 shadow-md">
      <div className="px-7 md:px-10 py-4 max-w-5xl w-full flex-1 m-auto md:flex justify-between text-white">
        <div
          className={`brand cursor-pointer flex relative justify-center  items-center font-viga`}
        >
          <div
            onClick={() => setOpen(!open)}
            className="absolute top-2 left-[2vw] md:hidden font-bold"
          >
            {open ? (
              <AiOutlineClose className="md:hidden" />
            ) : (
              <HiOutlineMenuAlt2 className="md:hidden" />
            )}
          </div>
          <Link href={"/"}>
            <h1 className="font-semibold font-viga tracking-wider">
              {"<SwitchCOV />"}{" "}
            </h1>
          </Link>
        </div>
        <ul
          className={`md:flex items-center gap-8 font-sansf sticky md:static mt-4 md:mt-0 w-full md:w-auto z-auto md:z-auto left-0 px-3 py-1 md:p-0 ${
            open ? "block" : "hidden"
          }`}
        >
          <Link href={"/"}>
            <li className="my-2   md:m-0 cursor-pointer w-full md:w-auto">
              Home
            </li>
          </Link>
          <Link href={"/harian"}>
            <li className="my-2 md:m-0 cursor-pointer md:w-auto">
              Data Harian
            </li>
          </Link>
          <Link href={"/contact"}>
            <li className="my-2 md:m-0 cursor-pointer md:w-auto">Contact Me</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
