import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import NavItems from "./navItems";

const handleClick = (param: String) => {
  console.log(`clicked: ${param}`);
};

const Nav = () => (
  <nav className="flex flex-wrap justify-between items-center w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white drop-shadow-lg">
    <div>
      <Link href="/" passHref>
        {/*eslint-disable @next/next/no-img-element */}
        <img
          className="m-3"
          src="/strapi-logo.png"
          width={200}
          height={20}
          alt="Logo"
        />
      </Link>
    </div>

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
