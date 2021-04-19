import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from 'react-loading';
import { Link } from 'react-router-dom';

import { Pokemon } from '../../types/Pokemon';
import Card from '../Card';
import FavIcon from '../FavIcon';

import { CardsList, FloatingButton, ImageContainer, Item } from './styles';

interface IPokedexProps {
  pokemons: Pokemon[] | null;
  isLoading: boolean;
  onUpdatePage: () => void;
  favoritePokemons: Pokemon[];
  onFavoriteClick: (pokemon: Pokemon) => void;
}

const Pokedex: React.FC<IPokedexProps> = ({
  pokemons,
  isLoading,
  onUpdatePage,
  favoritePokemons,
  onFavoriteClick,
}) => (
  <>
    <CardsList id="scroll-container">
      {!!pokemons && pokemons.length > 0 && (
        <InfiniteScroll
          dataLength={pokemons.length}
          next={onUpdatePage}
          loader={<Loading />}
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
  </>
);

export default Pokedex;
