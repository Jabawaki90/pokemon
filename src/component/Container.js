import React from "react";
import styled from "styled-components";
import { SinglePokemon } from ".";
import { usePokemonContext } from "../context/pokemonContext";
import { Link } from "react-router-dom";
import Rare from "../rare.png";

const Container = () => {
  const { pokemons, single_pokemon } = usePokemonContext();

  if (single_pokemon.name) {
    const { name, url } = single_pokemon;
    return (
      <Wrapper>
        <div className="container">
          <Link to={`./pokemon/${name}`}>
            <SinglePokemon name={name} url={url} />
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="container">
        {pokemons.map((poke, id) => {
          const { name, url } = poke;
          return (
            <Link to={`./pokemon/${name}`}>
              <SinglePokemon key={id} name={name} url={url} />
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
  }
`;

export default Container;
