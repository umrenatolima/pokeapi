import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

import {
  getFavoritePokemonsFromCache,
  selectFavorites,
  updateFavoritePokemons,
} from '../../redux/favorites';
import { getPokemons, selectPokemons } from '../../redux/pokemons';
import { Pokemon } from '../../types/Pokemon';
import Card from '../Card';
import FavIcon from '../FavIcon';

import {
  CardsList,
  FloatingButton,
  ImageContainer,
  Item,
  Loading,
} from './styles';

const PokeList: React.FC = () => {
  const dispatch = useDispatch();

  const { isLoading, pokemons } = useSelector(selectPokemons);
  const { favoritePokemons } = useSelector(selectFavorites);

  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(getFavoritePokemonsFromCache());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPokemons(page));
  }, [page, dispatch]);

  const onFavoriteClick = (pokemon: Pokemon): void => {
    dispatch(updateFavoritePokemons(pokemon));
  };

  const updatePage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  return (
    <>
      <CardsList id="scroll-container">
        {!!pokemons && pokemons.length > 0 && (
          <InfiniteScroll
            dataLength={pokemons.length}
            next={updatePage}
            loader={<Loading isLoading={isLoading} />}
            endMessage={<p>Thats all folks!</p>}
            scrollableTarget="scroll-container"
            hasMore
          >
            {pokemons.map((pokemon: Pokemon) => (
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
          </InfiniteScroll>
        )}
      </CardsList>
      {!isLoading && !pokemons && <p>No results found!</p>}
      <Loading isLoading={isLoading} />
    </>
  );
};

export default PokeList;
