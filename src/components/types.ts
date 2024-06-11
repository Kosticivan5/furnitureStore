export type FormInputType = {
  label: string;
  inputName: string;
  type: string;
  defaultValue?: string;
};

export type NavLinksType = {
  id: number;
  url: string;
  text: string;
};

export enum Themes {
  light = "light",
  dark = "dark",
}

export type FeaturedProducts = {
  category: string;
  colors: string[];
  company: string;
  createdAt: string;
  description: string;
  featured: boolean;
  true: string;
  image: string;
  price: string;
  publishedAt: Date;
  shipping: boolean;
  false: string;
  title: string;
  updatedAt: Date;
};

export type OriginalFeaturedProducts = {
  attributes: FeaturedProducts;
  id: number;
};
