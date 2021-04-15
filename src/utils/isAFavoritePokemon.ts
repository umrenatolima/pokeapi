import PokemonDTO from '../dtos/PokemonDTO';

interface Params {
  pokemon: PokemonDTO;
  favoritePokemons: PokemonDTO[];
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
