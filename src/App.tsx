import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import DashBoard from './components/layout/Dashboard'
import Panel from './components/layout/Panel'
import './App.css'
import { render } from '@testing-library/react';
const Resistances = {
  fairy: 0,
  bug: 0,
  dark: 0,
  dragon: 0,
  electric: 0,
  fighting: 0,
  fire: 0,
  flying: 0,
  ghost: 0,
  grass: 0,
  ground: 0,
  ice: 0,
  normal: 0,
  poison: 0,
  psychic: 0,
  rock: 0,
  steel: 0,
  water: 0
}
interface Props {

}
interface State {
  weaknesses: {},
  selectedPokemon: selectedPokemon,
  pokemon: Pokemon[]
}

interface selectedPokemon {
  selectedTypes: string[],
  imageUrl: string,
  name: string,
}

type Pokemon = {
  name: string,
  url: string,
  hide: boolean
}

class App extends React.Component<Props, State>{
  baseUrl = "https://pokeapi.co/api/v2/";
  permPokemon : Pokemon[] = [];
  state = {
    weaknesses: Resistances,
    selectedPokemon: {selectedTypes:["grass","poison"], imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png?raw=true", name:"Bulbasaur"},
    pokemon: [],
  }

  filterPokemon = (filter: string) => {
    this.permPokemon.map(pokemon => {
      if(!pokemon.name.startsWith(filter.toLowerCase())){
        pokemon.hide = true;
      } else {
        pokemon.hide = false;
      }
    })
    this.setState({pokemon: this.permPokemon})
  }

  componentDidMount() {
    //get Pokemon
    const url = "https://pokeapi.co/api/v2/pokemon?limit=30";
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({ pokemon: result.results })
        this.permPokemon = result.results;
    })
    this.getWeakness(["grass","poison"])
  }

  typeHandler = (pokemonType: string[], imageUrl: string, selectedName: string) => {
    //console.log(pokemonType);
    this.getWeakness(pokemonType);
    this.setState({ selectedPokemon: {selectedTypes: pokemonType, imageUrl: imageUrl, name: selectedName} })
  }

  getWeakness = async (pokemonType: string[]) => {
    let weakness = Object.assign({}, Resistances);
    pokemonType.map((type) => fetch(`${this.baseUrl}type/${type}`)
    .then(result => result.json())
    .then(function(result) {
      result.damage_relations.double_damage_from.map((weaknessType:{name:string}) =>  {
        (weakness as any)[weaknessType.name] = (weakness as any)[weaknessType.name] + 1;}) 
      result.damage_relations.half_damage_from.map((weaknessType:{name:string}) => {
        (weakness as any)[weaknessType.name] = (weakness as any)[weaknessType.name] - 1;})
      result.damage_relations.no_damage_from.map((weaknessType:{name:string}) => {
        (weakness as any)[weaknessType.name] = (weakness as any)[weaknessType.name] - 4;})
        return weakness
      }).then(result => {
        console.log("setting weakness")
        this.setState({weaknesses: result})})
      )
  }

  render() {
    return (
      <div className="App">
        <div className='container' style={{minWidth:'90%'}}>
          <div className="row">
            <div className="col-12" style={{ backgroundColor: 'gray', minHeight: '70px' }}>
              Hello
          </div>
          </div>
          <div className="row mt-3">
            <div className="col-9 pl-0" style={{ backgroundColor: 'white', minHeight: '85vh', maxHeight: '85vh' }}>
              <div className="container px-5 py-3 overflow-auto card" style={{ backgroundColor: 'white', minHeight: '100%', maxHeight: '100%' }}>
                <div className="row justify-content-md-center">
                  <DashBoard pokemon={this.state.pokemon} typeHandler={this.typeHandler} />
                </div>
              </div>
            </div>
            <Panel filterPokemon = {this.filterPokemon} weakness={this.state.weaknesses} selectedPokemon={this.state.selectedPokemon}></Panel>
          </div>
        </div>
      </div>)
  }
}

export default App;
