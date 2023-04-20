import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gradient-to-r from-gray-200 from-10% via-gray-50 via-50% to-gray-200 to-90%">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
