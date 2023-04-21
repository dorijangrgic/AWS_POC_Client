import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import NavItems from "./navItems";

const handleClick = (param: String) => {
  console.log(`clicked: ${param}`);
};

const Nav = () => (
  <nav className="flex flex-wrap justify-center items-center px-4 py-4 md:py-0 text-lg text-gray-700 bg-prodia-blue drop-shadow-md">

    <div className="flex justify-center items-center w-auto">
      <button onClick={() => handleClick("hhhh")}>
        <Bars3Icon className="w-8 h-8 md:hidden text-gray-500" />
      </button>

      <div
        className="hidden w-full md:flex md:items-center md:w-auto"
        id="menu"
      >
        <NavItems />
      </div>
    </div>
  </nav>
);

export default Nav;
