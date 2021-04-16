/* eslint-disable camelcase */
interface Type {
  name: string;
  url: string;
}

export interface Types {
  slot: number;
  type: Type;
}

interface Stat {
  name: string;
  url: string;
}

export interface Stats {
  stat: Stat;
  effort: number;
  base_stat: number;
}

export default interface PokemonDTO {
  name: string;
  imgURL: string;
  id: number;
  types?: Types[];
  stats?: Stats[];
}
