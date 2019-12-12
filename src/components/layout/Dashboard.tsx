import React from 'react';
import PokemonList from '../pokemon/PokemonList'

type Pokemon = {
  name: string,
  url: string,
  hide: boolean
}

interface Props {
  typeHandler: (pokemonType: string[])=>void,
  pokemon: Pokemon[]
}

export const Dashboard: React.FC<Props>= ({typeHandler, pokemon}) => {
  return (
    <div className='row'>
      <div className='col'>
        <PokemonList pokemon = {pokemon} typeHandler ={typeHandler}/>
      </div>
    </div>)
}

export default PokemonList;