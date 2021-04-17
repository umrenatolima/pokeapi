import { Pokemon } from '../types/Pokemon';

interface Params {
  pokemon: Pokemon;
  favoritePokemons: Pokemon[];
}

export default function isAFavoritePokemon({
  pokemon,
  favoritePokemons,
}: Params): boolean {
  const isFavorite = !!favoritePokemons.find(
    favoritePokemon => favoritePokemon.id === pokemon.id,
  );

  return isFavorite;
}
