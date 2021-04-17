import React from 'react';
import { RiHeartAddLine, RiHeartFill } from 'react-icons/ri';

import { Pokemon } from '../../types/Pokemon';
import isAFavoritePokemon from '../../utils/isAFavoritePokemon';

interface FavIconProps {
  favorites: Pokemon[];
  pokemon: Pokemon;
}

const FavIcon: React.FC<FavIconProps> = ({
  favorites,
  pokemon,
}: FavIconProps) =>
  isAFavoritePokemon({
    favoritePokemons: favorites,
    pokemon,
  }) ? (
    <RiHeartFill size={35} color="#ffdd56" />
  ) : (
    <RiHeartAddLine size={35} color="#ffdd56" />
  );

export default FavIcon;
