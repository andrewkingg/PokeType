import React, {useState, useEffect}from 'react';
import WeaknessChart from './WeaknessChart'
import SearchBar from './SearchBar'
interface Props{
  weakness: {},
  selectedTypes: string[],
  filterPokemon: (filter: string)=>void
}

export const Panel: React.FC<Props> = ({weakness, selectedTypes, filterPokemon}) => {
  return ( 
      <div className="col-3 card" style={{ }}>
        <div className="row"><SearchBar filterPokemon = {filterPokemon}/></div>
        <div className="row">Row2</div>
        <div className="row">
          <WeaknessChart weakness = {weakness} selectedTypes = {selectedTypes}></WeaknessChart>
        </div>
      </div>)
}

export default Panel;