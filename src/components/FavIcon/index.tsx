import React from 'react';
import { RiHeartAddLine, RiHeartFill } from 'react-icons/ri';

import PokemonDTO from '../../dtos/PokemonDTO';
import isAFavoritePokemon from '../../utils/isAFavoritePokemon';

interface FavIconProps {
  favorites: PokemonDTO[];
  pokemon: PokemonDTO;
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
