import React, {useState, useEffect}from 'react';
import WeaknessChart from './WeaknessChart'
import SearchBar from './SearchBar'
import SelectedPokemon from './SelectedPokemon'
interface Props{
  weakness: {},
  selectedPokemon: {
    selectedTypes: string[],
    imageUrl: string,
    name: string,
  },
  filterPokemon: (filter: string)=>void
}

export const Panel: React.FC<Props> = ({weakness, selectedPokemon, filterPokemon}) => {
  return ( 
      <div className="col-3 card" style={{ minWidth: '170px', maxWidth: '300px' }}>
        <div className="row"><SearchBar filterPokemon = {filterPokemon}/></div>
        <div className="row my-2"><SelectedPokemon selectedPokemon = {selectedPokemon}></SelectedPokemon></div>
        <div className="row my-2">
          <WeaknessChart weakness = {weakness}></WeaknessChart>
        </div>
      </div>)
}

export default Panel;