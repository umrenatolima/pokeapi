import React, { useCallback, useEffect } from 'react';
import Loading from 'react-loading';
import { Link } from 'react-router-dom';

import PokemonDTO from '../../dtos/PokemonDTO';
import { usePokedex } from '../../hooks/usePokedex';
import Card from '../Card';
import FavIcon from '../FavIcon';
import { CardsList, FloatingButton, Item, ImageContainer } from './styles';
import useFavorite from '../../hooks/useFavorite';

const PokeList: React.FC = () => {
  const { favorites, onFavoriteClick } = useFavorite();
  const { data, isLoading, fetch } = usePokedex();

  const initialDataLoad = useCallback(async () => {
    if (!data) {
      await fetch();
    }
  }, [data, fetch]);

  useEffect(() => {
    initialDataLoad();
  }, [initialDataLoad]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading &&
        (!!data && data.length > 0 ? (
          <CardsList>
            {data.map((pokemon: PokemonDTO) => (
              <Item key={pokemon.name}>
                <Card>
                  <FloatingButton
                    type="button"
                    onClick={() => onFavoriteClick(pokemon)}
                  >
                    <FavIcon favorites={favorites} pokemon={pokemon} />
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
