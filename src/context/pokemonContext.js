import axios from "axios";
import React from "react";
import { useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/pokemonReducer";

import {
  GET_POKEMON_LIST,
  GET_SINGLE_POKEMON,
  SINGLE_POKEMON_SUCCESS,
  SEARCH_SINGLE_POKEMON,
} from "../action";

const pokemon_all = "https://pokeapi.co/api/v2/pokemon?limit=1118";
const urls = "https://pokeapi.co/api/v2/pokemon/";

const initialState = {
  pokemon_loading: false,
  pokemons: [],
  single_pokemon: {
    id: "",
    name: "",
    img: "",
    base: "",
    height: "",
  },
};

const PokemonContext = React.createContext();

export const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchList = async (url) => {
    const response = await axios.get(url);
    const data = response.data.results;
    dispatch({ type: GET_POKEMON_LIST, payload: data });
  };

  // const fetchSingle = (e) => {
  //   const newList = state.pokemons.filter(
  //     (pokes) => pokes.name === state.single_pokemon.name
  //   );
  //   console.log(e);
  //   console.log(newList);

  //   dispatch({ type: SINGLE_POKEMON_SUCCESS, payload: newList });
  // };

  const handleChange = (e) => {
    const name = e.target.value;
    const url = "https://pokeapi.co/api/v2/pokemon/" + name;

    dispatch({ type: SEARCH_SINGLE_POKEMON, payload: { name, url } });
  };

  useEffect(() => {
    fetchList(pokemon_all);
  }, []);

  return (
    <PokemonContext.Provider value={{ ...state, handleChange }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => {
  return useContext(PokemonContext);
};
