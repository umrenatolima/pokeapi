/* eslint-disable camelcase */
type Type = {
  name: string;
  url: string;
};

export type Types = {
  slot: number;
  type: Type;
};

type Stat = {
  name: string;
  url: string;
};

export type Stats = {
  stat: Stat;
  effort: number;
  base_stat: number;
};

export type Pokemon = {
  name: string;
  imgURL: string;
  id: number;
  types?: Types[];
  stats?: Stats[];
};
