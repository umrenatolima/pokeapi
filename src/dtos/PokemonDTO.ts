/* eslint-disable camelcase */
interface Type {
  name: string;
  url: string;
}

export interface Types {
  slot: number;
  type: Type;
}

export interface Stats {
  name: string;
  base_stat: number;
}

export default interface PokemonDTO {
  name: string;
  imgURL: string;
  id: number;
  types?: Types[];
  stats?: Stats[];
}
