import Head from "next/head";
import Nav from "./nav";
import { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Layout: FC<Props> = (props) => (
  <>
    <Head>
      <title>Prodia</title>
    </Head>

    <Nav />

    <main className="px-4">
      <div className="flex justify-center items-center bg-white mx-auto w-2/4 rounded-lg my-16 p-16">
        <div>{props.children}</div>
      </div>
    </main>
  </>
);

export default Layout;
