import { GetStaticProps } from "next";
import { Attribute, Content, StrapiResponse } from "../models/strapi";

interface About extends Attribute {
  about: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const about: StrapiResponse = await fetch(
    `http://127.0.0.1:1337/api/about`
  ).then((res) => res.json());

  const aboutAttributes = (about.data as Content).attributes as About;

  return {
    props: {
      aboutAttributes,
    },
  };
};

export default function Home({ aboutAttributes }: { aboutAttributes: About }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: aboutAttributes.about }}></div>
  );
}
