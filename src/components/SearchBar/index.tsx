import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { CgCardHearts } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';

import { usePokedex } from '../../hooks/usePokedex';
import { get, selectFavorites } from '../../redux/favorites/favoritesSlice';
import Input from '../Input';

import { SearchForm, Button, FavoritesButton } from './styles';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const { fetch, fetchByName, updateData } = usePokedex();

  const [pokemonName, setPokemonName] = useState('');

  useEffect(() => {
    dispatch(get());
  }, [dispatch]);

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
        placeholder="Search for a pokemon by his name"
        onChange={handleInputChange}
      />

      <>
        <Button type="submit">Send</Button>
        <FavoritesButton type="button" onClick={handleShowFavoritesClick}>
          <CgCardHearts size={55} color="#ffdd56" />
        </FavoritesButton>
      </>
    </SearchForm>
  );
};

export default SearchBar;
