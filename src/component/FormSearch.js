import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { usePokemonContext } from "../context/pokemonContext";

const FormSearch = () => {
  const {
    handleChange,
    single_pokemon: { name },
  } = usePokemonContext();

  return (
    <Wrapper>
      <div className="box">
        <form>
          <input
            type="text"
            placeholder="search your pokemon"
            value={name}
            onChange={handleChange}
          />
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .box {
    display: flex;
    justify-content: center;
    margin: 20px;
    input {
      padding: 0.5rem;
      background: hsl(210, 36%, 96%);
      border-radius: 0.25rem;
      border-color: transparent;
      width: 400px;
      height: 40px;
      font-size: 40px;
    }
    button {
      height: 50px;
    }
  }
`;

export default FormSearch;
