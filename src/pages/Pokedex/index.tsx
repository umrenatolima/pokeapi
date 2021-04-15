import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PokeList from '../../components/PokeList';
import SearchBar from '../../components/SearchBar';
import { usePokedex } from '../../hooks/usePokedex';
import {
  get as getFavorites,
  selectFavorites,
} from '../../redux/favorites/favoritesSlice';

const Pokedex: React.FC = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const { data, isLoading, fetch } = usePokedex();

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  return (
    <section>
      <h1>Pokedex</h1>
      <SearchBar />

      <PokeList pokemons={data} isLoading={isLoading} favorites={favorites} />
    </section>
  );
};

export default Pokedex;
