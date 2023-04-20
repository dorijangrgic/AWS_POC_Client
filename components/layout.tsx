import Head from "next/head";
import Nav from "./nav";
import { FC, ReactNode } from "react";
import Link from "next/link";

interface Props {
  children?: ReactNode;
}

const Layout: FC<Props> = (props) => (
  <>
    <Head>
      <title>Prodia</title>
    </Head>

    <div className="m-16 flex flex-row justify-around items-center">
      <Link href="/" passHref>
        {/*eslint-disable @next/next/no-img-element */}
        <img
          className="m-3"
          src="/prodia-logo-transparant_achtergrond-xs.png"
          width={200}
          alt="Logo"
        />
      </Link>

      <ol>
        <li>Prvi</li>
        <li>Drugi</li>
        <li>Treci</li>
      </ol>

    </div>

    <Nav />

    <main className="px-4">
      <div className="flex justify-center items-center bg-white mx-auto w-2/4 rounded-lg my-16 p-16">
        {props.children}
      </div>
    </main>
  </>
);

export default Layout;
