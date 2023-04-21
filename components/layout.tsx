import Head from "next/head";
import Nav from "./nav";
import { FC, ReactNode } from "react";
import Link from "next/link";
import Footer from "./footer";

interface Props {
  children?: ReactNode;
}

const Layout: FC<Props> = (props) => (
  <>
    <Head>
      <title>Prodia</title>
    </Head>

    <div className="flex flex-row justify-around items-center mx-36 py-12">
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

    <Nav />

    <main className="px-4">
      <div className="flex justify-center items-center bg-white mx-auto w-6/12 rounded-lg my-16 p-16">
        {props.children}
      </div>
    </main>

    <Footer />
  </>
);

export default Layout;
