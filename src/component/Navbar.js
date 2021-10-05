import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../logo.svg";
import Navpic from "../nav.png";
import { usePokemonContext } from "../context/pokemonContext";

const Navbar = () => {
  const { single_pokemon } = usePokemonContext();

  return (
    <Wrapper>
      <navbar>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <Link to={`/pokemon/${single_pokemon.name}`}>
          <h1>Details</h1>
        </Link>
      </navbar>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  navbar {
    background-image: url(${Navpic});
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    padding-bottom: 50px;
    h1 {
      margin: 50px;
    }
  }
`;

export default Navbar;
