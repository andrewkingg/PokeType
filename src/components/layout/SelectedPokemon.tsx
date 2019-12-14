import React from 'react';
import './WeaknessChart.css'

const Colors = {
  bug: '#9CAB17',
  dark: '#3D2F22',
  dragon: '#6C5AC4',
  electric: '#F8B718',
  fairy: '#ECA2EC',
  fighting: '#6C2E19',
  fire: '#ED3F0E',
  flying: '#A5B3F2',
  ghost: '#5858A0',
  grass: '#73BD37',
  ground: '#CEB057',
  ice: '#95E2FB',
  normal: '#C6BEB8',
  poison: '#863C87',
  psychic: '#E13A70',
  rock: '#A28741',
  steel: '#ACACB8',
  water: '#3191F5'
}

interface Props {
  selectedPokemon: {
    selectedTypes: string[],
    imageUrl: string,
    name: string,
  },
  shiny: boolean
}

interface State {
  weakness: {}
  selectedPokemon: {}
}

const SelectedPokemon: React.FC<Props> = ({ selectedPokemon, shiny}) => {

  const upperCaseFirstLetter = (word: string) => {
    return word.toLowerCase()
      .split(" ")
      .map(letters => letters.charAt(0).toUpperCase() + letters.substring(1))
  }

  const shinyUrlConverter = (url: string, shiny: boolean) => {
    if(shiny){
      if(!url.includes("shiny")){
      let array = url.split("/");
      array.splice(array.length-1,0,"shiny")
      return array.join("/");
      }else {
        return url;
      }
    } else {
      if(url.includes("shiny")){
        let array = url.split("/");
        array.splice(array.length-2,1)
        return array.join("/");
        }else {
          return url;
        }
    }
  }
  
  return (
    <div className="col" style={{minHeight: '150px'}}>

      <div className="container p-0" style={{ maxWidth: '90%', minWidth: '100px' }}>
      <h6 className = 'text-center mb-0 text-capitalize'>{selectedPokemon.name}</h6>
        <div className="row">
          <img className = "mx-auto" src={shinyUrlConverter(selectedPokemon.imageUrl, shiny)}
          alt="Loading"></img>
        </div>
        <div className="d-flex justify-content-center">{selectedPokemon.selectedTypes.map(type =>
          <h6 key = {type} className="col col-centered text-center badge badge-pill badge-secondary mx-2"
            style={{ backgroundColor: `${(Colors as any)[type]}`, maxWidth: '120px' }}>{upperCaseFirstLetter(type)}</h6>)}</div>

      </div>

    </div>)

}

export default SelectedPokemon;