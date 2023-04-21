import Link from "next/link";

export default function Header() {
  return (
    <div className="px-4">
      <div className="flex flex-wrap justify-between items-center w-5/12 mx-auto my-8 px-8 py-8">
        <Link href="/" passHref>
          {/*eslint-disable @next/next/no-img-element */}
          <img
            className="m-3"
            src="/prodia-logo-transparant_achtergrond-xs.png"
            width={200}
            alt="Logo"
          />
        </Link>

        <ol className="list-disc">
          <li>Prvi</li>
          <li>Drugi</li>
          <li>Treci</li>
        </ol>
      </div>
    </div>
  );
}
