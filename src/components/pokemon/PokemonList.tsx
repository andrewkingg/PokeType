import React, {useState, useEffect}from 'react';
import PokemonCard from './PokemonCard'
type Pokemon = {
  name: string,
  url: string,
  hide: boolean
}
interface Props{
  typeHandler: (pokemonType: string[], imageUrl: string, selectedName: string)=>void,
  pokemon: Pokemon[]
}
export const PokemonList: React.FC<Props> = ({typeHandler, pokemon}) => {

  return (
    <div className = "row" style={{minWidth: '100%'}}>
      {pokemon.map(pokemon => <PokemonCard
      key = {pokemon.name}
      url = {pokemon.url}
      name = {pokemon.name}
      hide = {pokemon.hide}
      typeHandler = {typeHandler}
      />)}
    </div>)
}

export default PokemonList;