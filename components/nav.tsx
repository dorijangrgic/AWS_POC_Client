import { Bars3Icon } from "@heroicons/react/24/solid";
import NavItems from "./navItems";

const handleClick = (param: String) => {
  console.log(`clicked: ${param}`);
};

export default function Nav() {
  return (
    <nav className="flex justify-center items-center px-4 py-4 md:py-0.5 text-lg text-gray-700 bg-prodia-blue drop-shadow-sm">
      <div className="flex justify-center items-center w-auto">
        <button onClick={() => handleClick("hhhh")}>
          <Bars3Icon className="w-8 h-8 md:hidden text-prodia-teal-medium" />
        </button>

        <div
          className="hidden md:flex md:items-center md:w-auto"
          id="menu"
        >
          <NavItems />
        </div>
      </div>
    </nav>
  );
}
