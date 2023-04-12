import { GetStaticProps } from "next";
import { Content, StrapiResponse } from "../../models/strapi";
import { FilmAttribute } from "../../models/film";

export const getStaticProps: GetStaticProps = async () => {
  const films: StrapiResponse = await fetch(
    `http://127.0.0.1:1337/api/films`
  ).then((res) => res.json());

  return {
    props: {
      films,
    },
  };
};

const FilmList = ({ films }: { films: StrapiResponse }) => {
  
  let data = films.data as Content[];
  
  return (
    <>
      <ul className="list-none space-y-4 text-2xl font-semibold mb-3">
        {data.map((film) => {
          const filmAttributes = film.attributes as FilmAttribute;
          return (
            <li key={film.id}>
              <a href={`films/${film.id}`}>
                {filmAttributes.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FilmList;
