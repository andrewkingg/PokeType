import React from 'react';
import WeaknessChart from './WeaknessChart'
import SearchBar from './SearchBar'
import SelectedPokemon from './SelectedPokemon'
import ShinyToggler from './ShinyToggler'
interface Props{
  weakness: {},
  selectedPokemon: {
    selectedTypes: string[],
    imageUrl: string,
    name: string,
  },
  filterPokemon: (filter: string)=>void
  toggleShiny: (toggledValue: boolean) => void,
  shiny: boolean,
}

export const Panel: React.FC<Props> = ({weakness, selectedPokemon, filterPokemon, toggleShiny, shiny}) => {
  return ( 
      <div className="col-3 card" style={{ minWidth: '170px', maxWidth: '300px' }}>
        <div className="row"><SearchBar filterPokemon = {filterPokemon}/></div>
        <div className="row mt-2 mb-0"><SelectedPokemon selectedPokemon = {selectedPokemon}
        shiny={shiny}></SelectedPokemon></div>
        <div className="row mt-2 mb-2">
          <WeaknessChart weakness = {weakness}></WeaknessChart>
        </div>
        <div className="row my-0">
          <ShinyToggler toggleShiny={toggleShiny}/>
        </div>
      </div>)
}

export default Panel;