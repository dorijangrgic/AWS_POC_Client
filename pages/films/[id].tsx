import { GetServerSideProps } from "next";
import { Content, StrapiResponse } from "../../models/strapi";
import { FilmAttribute } from "../../models/film";
import markdownToHtml from "../../lib/markdown";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const film: StrapiResponse = await fetch(
    `http://127.0.0.1:1337/api/films/${id}`
  ).then((res) => res.json());

  const filmAttributes = (film.data as Content).attributes as FilmAttribute;
  filmAttributes.plot = await markdownToHtml(filmAttributes.plot);

  return {
    props: {
      filmAttributes,
    },
  };
};

const FilmDetails = ({ filmAttributes }: { filmAttributes: FilmAttribute }) => (
  <>
    <div className="flex flex-col justify-start items-start space-y-5 w-auto h-auto">
      <div className="flex flex-wrap w-full justify-between items-end">
        <h1 className="font-bold text-5xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            {filmAttributes.title}
          </span>
        </h1>
        <span className="bg-clip-text text-sm text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          {filmAttributes.author}
        </span>
      </div>

      <hr></hr>

      <div
        className="tracking-wide font-normal text-sm"
        dangerouslySetInnerHTML={{ __html: filmAttributes.plot }}
      ></div>
    </div>
  </>
);

export default FilmDetails;
