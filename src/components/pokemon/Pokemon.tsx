import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  pokemonIndex: string;
}

interface Props extends RouteComponentProps<MatchParams> {
}

type Pokemon = {
  name: string,
}

export const Pokemon: React.FC<Props> = ({ match }) => {
  const pokemonType: Pokemon = { name: "" };
  const [pokemon, updatePokemon] = React.useState(pokemonType);
  const { pokemonIndex } = match.params;
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`

  useEffect(() => {
    async function anyNameFunction() {
      await fetch(url)
        .then(result => result.json())
        .then(result => { updatePokemon(result); })
    }

    anyNameFunction();
  }, []);

  if (pokemon.name) {
    return (
      <div >
        {pokemon.name}
      </div>)
  } else {
    return (
      <div>loading</div>
    )
  }
}

export default Pokemon;