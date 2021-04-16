import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { CgCardHearts } from 'react-icons/cg';

import useFavorite from '../../hooks/useFavorite';
import { usePokedex } from '../../hooks/usePokedex';
import Input from '../Input';
import { Button, FavoritesButton, SearchForm } from './styles';

const SearchBar: React.FC = () => {
  const { favorites } = useFavorite();

  const { fetch, fetchByName, updateData } = usePokedex();

  const [pokemonName, setPokemonName] = useState('');

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  }, []);

  const handleOnSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (pokemonName) {
        fetchByName(pokemonName);
      } else {
        fetch();
      }
    },
    [pokemonName, fetchByName, fetch],
  );

  const handleShowFavoritesClick = useCallback(() => {
    updateData(favorites);
  }, [favorites, updateData]);

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
