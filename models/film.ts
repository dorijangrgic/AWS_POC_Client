import { Attribute } from "./strapi";

export interface FilmAttribute extends Attribute {
  title: string;
  plot: string;
  author: string;
}
