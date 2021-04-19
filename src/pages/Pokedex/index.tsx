import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import PokeList from '../../components/PokeList';
import SearchBar from '../../components/SearchBar';
import {
  getFavoritePokemonsFromCache,
  selectFavorites,
  updateFavoritePokemons,
} from '../../redux/favorites';
import { getPokemons, selectPokemons } from '../../redux/pokemons';
import { Pokemon } from '../../types/Pokemon';
import { AnimationContainer, PokedexContainer } from './styles';

const Pokedex: React.FC = () => {
  const dispatch = useDispatch();

  const { isLoading, pokemons } = useSelector(selectPokemons);
  const { favoritePokemons, showOnlyFavorites } = useSelector(selectFavorites);

  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(getFavoritePokemonsFromCache());
  }, [dispatch]);

  useEffect(() => {
    if (!showOnlyFavorites) {
      dispatch(getPokemons({ page, concat: true }));
    }
  }, [dispatch, page]);

  const handleUpdatePage = useCallback(() => {
    const newPage = showOnlyFavorites ? 0 : page + 1;

    setPage(newPage);
  }, [page, showOnlyFavorites]);

  const handleFavoriteClick = (pokemon: Pokemon): void => {
    dispatch(updateFavoritePokemons(pokemon));
  };

  return (
    <PokedexContainer>
      <AnimationContainer>
        <Header />
        <SearchBar favoritePokemons={favoritePokemons} />

        <PokeList
          pokemons={pokemons}
          isLoading={isLoading}
          onUpdatePage={handleUpdatePage}
          favoritePokemons={favoritePokemons}
          onFavoriteClick={handleFavoriteClick}
        />
      </AnimationContainer>
    </PokedexContainer>
  );
};

export default Pokedex;
