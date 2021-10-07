import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { usePokemonContext } from "../context/pokemonContext";
import { Details } from "../component";
import { useParams } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";

const urls = "https://pokeapi.co/api/v2/pokemon/";

const SinglePage = () => {
  const [names, setNames] = useState("");
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  const fetchPokemon = async (url) => {
    const response = await axios.get(`${url}${names}`);
    const pokemon = response.data;
    console.log(pokemon);
    const { base_experience: base, height, id, name, weight } = pokemon;

    setDetail({ base, height, id, name, weight });
  };

  useEffect(() => {
    setNames(id);
    fetchPokemon(urls);
  }, [names]);
  return (
    <Wrapper>
      <div className="container">
        <Link to="/">
          <button>Back</button>
        </Link>

        <div className="page">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${detail.id}.png`}
            alt=""
          />
          <article className="detail">
            <h1>{names.toUpperCase()}</h1>
            <h3>No : {detail.id}</h3>
            <h3>Base Exp : {detail.base}</h3>
            <h3>Height : {detail.height}</h3>
            <h3>Weight : {detail.weight}</h3>
          </article>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    display: flex;

    align-items: center;
    flex-direction: column;

    button {
      margin-top: 30px;
      font-size: 20px;
      border: 2px solid black;
      padding: 15px;
      background-color: #fccf00;
      color: #2468b1;
      border-radius: 50px;
    }
  }

  .page {
    display: flex;
    align-items: center;
    background-color: #bb8fce;
    margin: 50px;
    padding: 20px;
    border: 6px solid black;
    border-radius: 5%;
    .detail {
      margin: 50px;
    }
    img {
      height: 350px;
      width: 350px;
    }
  }
`;

export default SinglePage;
