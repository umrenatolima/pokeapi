import React, { createContext, useState, useContext } from 'react';

import PokemonDTO from '../dtos/PokemonDTO';
import pokeAPI from '../services/pokeAPI';
import parsePokeAPIFactory from '../utils/parsePokeAPIFactory';

interface PokedexContextData {
  data: PokemonDTO[];
  isLoading: boolean;
  updateData: React.Dispatch<React.SetStateAction<PokemonDTO[]>>;
  fetch: () => Promise<void>;
  fetchByName: (pokemonName: string) => Promise<void>;
}

const PokedexContext = createContext<PokedexContextData>(
  {} as PokedexContextData,
);

export const PokedexProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<PokemonDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetch() {
    setIsLoading(true);

    try {
      const {
        data: { results },
      } = await pokeAPI.get('pokemon?limit=8&offset=0');

      const { parse } = parsePokeAPIFactory();
      const parsedPokemonData = parse(results);

      setData(parsedPokemonData);
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  }

  async function fetchByName(pokemon: string) {
    setIsLoading(true);

    try {
      const { data: pokemonData } = await pokeAPI.get(`pokemon/${pokemon}`);

      const { parseByName } = parsePokeAPIFactory();
      const parsedPokemonData = parseByName(pokemonData);

      setData(parsedPokemonData);
    } catch (e) {
      console.error(e);
      setData([]);
    }

    setIsLoading(false);
  }

  return (
    <PokedexContext.Provider
      value={{ fetch, fetchByName, data, updateData: setData, isLoading }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

export function usePokedex(): PokedexContextData {
  const context = useContext(PokedexContext);

  if (!context) {
    throw new Error('usePokedex must be used within an PokedexProvider');
  }

  return context;
}
