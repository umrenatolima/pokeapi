import React, { useEffect } from 'react';
import Loading from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { PokemonDTO, getPokemons, selectPokemons } from '../../redux/pokemons';
import {
  getFavoritePokemonsFromCache,
  selectFavorites,
  updateFavoritePokemons,
} from '../../redux/favorites';

import Card from '../Card';
import FavIcon from '../FavIcon';

import { CardsList, FloatingButton, ImageContainer, Item } from './styles';

const PokeList: React.FC = () => {
  const dispatch = useDispatch();

  const { isLoading, pokemons } = useSelector(selectPokemons);
  const { favoritePokemons } = useSelector(selectFavorites);

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getFavoritePokemonsFromCache());
  }, [dispatch]);

  const onFavoriteClick = (pokemon: PokemonDTO): void => {
    dispatch(updateFavoritePokemons(pokemon));
  };

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading &&
        (!!pokemons && pokemons.length > 0 ? (
          <CardsList>
            {pokemons.map((pokemon: PokemonDTO) => (
              <Item key={pokemon.name}>
                <Card>
                  <FloatingButton
                    type="button"
                    onClick={() => onFavoriteClick(pokemon)}
                  >
                    <FavIcon favorites={favoritePokemons} pokemon={pokemon} />
                  </FloatingButton>
                  <ImageContainer>
                    <img src={pokemon.imgURL} alt={`${pokemon.name} sprite`} />
                  </ImageContainer>
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
