import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { CgCardHearts } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';

import { selectFavorites } from '../../redux/favorites';
import {
  getPokemons,
  getPokemonsByName,
  updatePokemons,
} from '../../redux/pokemons';
import Input from '../Input';

import { Button, FavoritesButton, SearchForm } from './styles';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  const { favoritePokemons } = useSelector(selectFavorites);

  const [pokemonName, setPokemonName] = useState('');

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  }, []);

  const handleOnSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (pokemonName) {
        dispatch(getPokemonsByName(pokemonName));
      } else {
        dispatch(getPokemons());
      }
    },
    [pokemonName, dispatch],
  );

  const handleShowFavoritesClick = useCallback(() => {
    dispatch(updatePokemons(favoritePokemons));
  }, [favoritePokemons, dispatch]);

  return (
    <SearchForm onSubmit={handleOnSubmit}>
      <Input
        type="text"
        placeholder="Search for a pokemon by its name"
        onChange={handleInputChange}
      />

      <>
        <Button type="submit">Search</Button>
        <FavoritesButton type="button" onClick={handleShowFavoritesClick}>
          <CgCardHearts size={55} color="#ffdd56" />
        </FavoritesButton>
      </>
    </SearchForm>
  );
};

export default SearchBar;
