import Link from "next/link";

export default function NavItems() {
  return (
    <ul className="pt-4 text-base text-prodia-teal-medium md:flex md:justify-between md:pt-0 space-x-2">
      <li>
        <Link href="/" className="md:p-2 py-2 block hover:text-purple-400">
          About
        </Link>
      </li>
      <li>
        <Link href="/home" className="md:p-2 py-2 block hover:text-purple-400">
          Home
        </Link>
      </li>
    </ul>
  );
}
