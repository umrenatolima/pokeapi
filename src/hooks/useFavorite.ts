import { useDispatch, useSelector } from 'react-redux';

import PokemonDTO from '../dtos/PokemonDTO';
import {
  add,
  remove,
  selectFavorites,
} from '../redux/favorites/favoritesSlice';

interface Response {
  favorites: PokemonDTO[];
  onFavoriteClick: (pokemon: PokemonDTO) => void;
}

export default function useFavorite(): Response {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  function onFavoriteClick(pokemon: PokemonDTO): void {
    const findIndex = favorites.findIndex(
      favorite => favorite.id === pokemon.id,
    );

    if (findIndex > -1) {
      const removedFavorite = [...favorites];
      removedFavorite.splice(findIndex, 1);

      dispatch(remove(removedFavorite));
    } else {
      const newFavorites = [...favorites, pokemon];

      dispatch(add(newFavorites));
    }
  }

  return {
    favorites,
    onFavoriteClick,
  };
}
