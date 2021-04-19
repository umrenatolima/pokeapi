import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { CgCardHearts } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import { updateShowOnlyFavorites } from '../../redux/favorites';

import {
  getPokemons,
  getPokemonsByName,
  updatePokemons,
} from '../../redux/pokemons';
import { Pokemon } from '../../types/Pokemon';
import Input from '../Input';

import { Button, FavoritesButton, SearchForm } from './styles';

interface ISearchBarProps {
  favoritePokemons: Pokemon[];
}

const SearchBar: React.FC<ISearchBarProps> = ({ favoritePokemons }) => {
  const dispatch = useDispatch();

  const [pokemonName, setPokemonName] = useState('');

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  }, []);

  const handleOnSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (pokemonName) {
        dispatch(updateShowOnlyFavorites(true));
        dispatch(getPokemonsByName(pokemonName));
      } else {
        dispatch(updateShowOnlyFavorites(false));
        dispatch(getPokemons({ page: 0 }));
      }
    },
    [pokemonName, dispatch],
  );

  const handleShowFavoritesClick = useCallback(() => {
    dispatch(updateShowOnlyFavorites(true));
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
