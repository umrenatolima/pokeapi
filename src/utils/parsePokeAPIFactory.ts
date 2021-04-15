import PokemonDTO from '../dtos/PokemonDTO';
import getPokemonIdFromURL from './getPokemonIdFromURL';

interface Response {
  name: string;
  url?: string;
  id?: number;
}

interface ParsePokeAPIFactory {
  parse: (data: Response[]) => PokemonDTO[];
  parseByName: (data: Response) => PokemonDTO[];
}

export default function parsePokeAPIFactory(): ParsePokeAPIFactory {
  function getImageURL(id: number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }

  function parse(data: Response[]): PokemonDTO[] {
    const parsedData = data.map(pokemon => {
      const id = getPokemonIdFromURL(pokemon.url as string);

      return {
        id,
        name: pokemon.name,
        imgURL: getImageURL(id),
      };
    });

    return parsedData;
  }

  function parseByName(data: Response): PokemonDTO[] {
    const parsedData = {
      name: data.name,
      id: data.id as number,
      imgURL: getImageURL(data.id as number),
    };

    return [parsedData];
  }

  return {
    parse,
    parseByName,
  };
}