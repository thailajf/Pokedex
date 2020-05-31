export function AddPokemonState(pokemon) {
  return {
    type: '@Pokemon/ShowPokemon',
    payload: pokemon,
  };
}
