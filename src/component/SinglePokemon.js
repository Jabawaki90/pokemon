import axios from "axios";
import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";
import defaultImg from "../pokeball.png";

import { usePokemonContext } from "../context/pokemonContext";

// purple #bb8fce;
// green #a3e4d7;
//black border #17202a;
//white #e8f8f5;

const SinglePokemon = ({ name, url }) => {
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);
  // let img =
  //   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
  //   "id" +
  //   ".png";
  const fetchImage = async (urls) => {
    const response = await axios.get(urls);
    const data = response.data.id;
    setId(data);
  };
  const isLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    isLoading();
    fetchImage(url);
  }, [url]);

  return (
    <Wrapper>
      <article className="card">
        <img
          src={defaultImg}
          alt=""
          style={{ display: loading ? "block" : "none" }}
        />
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt="name"
          style={{ display: loading ? "none" : "block" }}
        />

        <div className="container">
          <h1>{name}</h1>
          <h2>{id}</h2>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .card {
    background-color: #a3e4d7;
    width: 250px;
    border: 2px solid #17202a;
    margin: 5px;
    .container {
      display: flex;
      justify-container: space-between;
      background-color: #e8f8f5;
    }
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
`;

export default SinglePokemon;
