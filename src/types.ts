export type PlanetsColorsType = {
  [key: string]: string;
};

type DetailsType = {
  content: string;
  source: string;
};

type ImageType = {
  planet: string;
  internal: string;
  geology: string;
};

export type PlanetsType = {
  name: string;
  overview: DetailsType;
  structure: DetailsType;
  geology: DetailsType;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: ImageType;
};
