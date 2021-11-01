export const setPokeName = (pokemon: string) => {
  return {
    type: "SET_POKEMON_NAME",
    payload: pokemon,
  };
};
