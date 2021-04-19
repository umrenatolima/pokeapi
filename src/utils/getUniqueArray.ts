import { Pokemon } from '../types/Pokemon';

interface IGetUniqueArray {
  currentData: Pokemon[];
  newData: Pokemon[];
}

export const getUniqueArray = ({
  currentData,
  newData,
}: IGetUniqueArray): Pokemon[] => {
  const concatData = [...currentData, ...newData];

  return concatData.reduce((totalArray: Pokemon[], pokemon) => {
    const hasItem = totalArray.find(
      currentPokemon => currentPokemon.id === pokemon.id,
    );

    if (!hasItem) {
      return [...totalArray, pokemon];
    }

    return totalArray;
  }, []);
};
