import {
  GET_POKEMON_LIST,
  GET_SINGLE_POKEMON,
  SINGLE_POKEMON_SUCCESS,
  SEARCH_SINGLE_POKEMON,
} from "../action";

const pokemonReducer = (state, action) => {
  if (action.type === GET_POKEMON_LIST) {
    return { ...state, pokemons: action.payload };
  }

  if (action.type === SEARCH_SINGLE_POKEMON) {
    const { name, url } = action.payload;
    return {
      ...state,
      single_pokemon: { name, url },
    };
  }

  // if (action.type === SINGLE_POKEMON_SUCCESS) {
  //   return { ...state, pokemons: action.payload };
  // }
  return state;
};

export default pokemonReducer;
