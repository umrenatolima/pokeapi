import React, { useCallback } from 'react';
import Loading from 'react-loading';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import PokemonDTO from '../../dtos/PokemonDTO';
import { add, remove } from '../../redux/favorites/favoritesSlice';
import Card from '../Card';
import FavIcon from '../FavIcon';
import { CardsList, FloatingButton, Item } from './styles';

interface PokeListProps {
  isLoading: boolean;
  pokemons: PokemonDTO[];
  favorites: PokemonDTO[];
}

const PokeList: React.FC<PokeListProps> = ({
  isLoading,
  pokemons,
  favorites,
}) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = useCallback(
    (pokemon: PokemonDTO) => {
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
    },
    [dispatch, favorites],
  );

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading &&
        (pokemons.length > 0 ? (
          <CardsList>
            {pokemons.map((pokemon: PokemonDTO) => (
              <Item key={pokemon.name}>
                <Card>
                  <FloatingButton
                    type="button"
                    onClick={() => handleFavoriteClick(pokemon)}
                  >
                    <FavIcon favorites={favorites} pokemon={pokemon} />
                  </FloatingButton>
                  <img src={pokemon.imgURL} alt={`${pokemon.name} sprite`} />
                  <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
                </Card>
              </Item>
            ))}
          </CardsList>
        ) : (
          <p>No results found!</p>
        ))}
    </>
  );
};

export default PokeList;
