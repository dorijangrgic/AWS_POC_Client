export interface StrapiResponse {
  data: Content[] | Content;
  meta: Meta;
}

export interface Content {
  id: number;
  attributes: Attribute;
}

export interface Attribute {}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
