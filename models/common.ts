import { Attribute } from "./strapi";

export interface FilmAttribute extends Attribute {
  title: string;
  plot: string;
  author: string;
}

export interface About extends Attribute {
  about: string;
}

export interface Home extends Attribute {
  home: string;
}