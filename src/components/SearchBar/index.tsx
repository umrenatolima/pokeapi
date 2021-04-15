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
import pokeAPI from '../../services/pokeAPI';
import parsePokeAPIFactory from '../../utils/parsePokeAPIFactory';
import Input from '../Input';
import { SearchForm, Button, FavoritesButton } from './styles';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const { fetch, updateData } = usePokedex();

  const [pokemonName, setPokemonName] = useState('');

  useEffect(() => {
    dispatch(get());
  }, [dispatch]);

  const fetchPokemonByName = useCallback(
    async (pokemon: string) => {
      const { data } = await pokeAPI.get(`pokemon/${pokemon}`);

      const { parseByName } = parsePokeAPIFactory();
      const parsedPokemonData = parseByName(data);

      updateData(parsedPokemonData);
    },
    [updateData],
  );

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  }, []);

  const handleOnSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (pokemonName) {
        fetchPokemonByName(pokemonName);
      } else {
        fetch();
      }
    },
    [pokemonName, fetchPokemonByName, fetch],
  );

  const handleShowFavoritesClick = useCallback(() => {
    updateData(favorites);
  }, [favorites, updateData]);

  return (
    <SearchForm onSubmit={handleOnSubmit}>
      <Input
        type="text"
        placeholder="Search for a pokemon by his name"
        name="searchBar"
        onChange={handleInputChange}
      />

      <>
        <Button type="submit" className="">
          Enviar
        </Button>
        <FavoritesButton type="button" onClick={handleShowFavoritesClick}>
          <CgCardHearts size={55} color="#ffdd56" />
        </FavoritesButton>
      </>
    </SearchForm>
  );
};

export default SearchBar;
