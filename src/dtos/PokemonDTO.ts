interface Types {
  type: string;
  url: string;
}

export default interface PokemonDTO {
  name: string;
  imgURL: string;
  id: number;
  types?: Types[];
}
