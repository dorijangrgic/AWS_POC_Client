import Head from "next/head";
import { FC, ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import Nav from "./nav";

interface Props {
  children?: ReactNode;
}

const Layout: FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Prodia</title>
      </Head>

      <Header />

      <Nav />

      <main className="px-4">
        <div className="flex justify-center items-center w-5/12 mx-auto my-8 p-12">
          {props.children}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Layout;
