import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import DashBoard from './components/layout/Dashboard'
import Panel from './components/layout/Panel'
import './App.css'
import { render } from '@testing-library/react';
const Resistances = {
  bug: 0,
  dark: 0,
  dragon: 0,
  electric: 0,
  fairy: 0,
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
  selectedTypes: string[]
  pokemon: Pokemon[]
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
    selectedTypes: [""],
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
    const url = "https://pokeapi.co/api/v2/pokemon?limit=400";
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({ pokemon: result.results })
        this.permPokemon = result.results;
    })
  }

  typeHandler = (pokemonType: string[]) => {
    //console.log(pokemonType);
    this.getWeakness(pokemonType);
    this.setState({ selectedTypes: pokemonType })
  }

  getWeakness = async (pokemonType: string[]) => {
    const weakness = Resistances;
    pokemonType.map(async (type) => await fetch(`${this.baseUrl}type/${type}`)
      .then(result => result.json())
      .then(result => {
        result.damage_relations.double_damage_from.map((weaknessType: { name: string }) =>
          this.setState((prevState: State) => {
            let weaknesses = Object.assign({}, prevState.weaknesses);  // creating copy of state variable jasper
            (weaknesses as any)[weaknessType.name] = (weaknesses as any)[weaknessType.name] + 1;                     // update the name property, assign a new value   
            return { weaknesses };                                 // return new object jasper object
          }))
        result.damage_relations.half_damage_from.map((weaknessType: { name: string }) =>
          this.setState((prevState: State) => {
            let weaknesses = Object.assign({}, prevState.weaknesses);  // creating copy of state variable jasper
            (weaknesses as any)[weaknessType.name] = (weaknesses as any)[weaknessType.name] - 1;                     // update the name property, assign a new value   
            return { weaknesses };                                 // return new object jasper object
          })
        )
      }
      ));
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <div className="row">
            <div className="col-12" style={{ backgroundColor: 'gray', minHeight: '70px' }}>
              Hello
          </div>
          </div>
          <div className="row mt-3">
            <div className="col-9" style={{ backgroundColor: 'white', minHeight: '85vh', maxHeight: '85vh' }}>
              <div className="container px-5 py-3 overflow-auto card" style={{ backgroundColor: 'white', minHeight: '100%', maxHeight: '100%' }}>
                <div className="row justify-content-md-center">
                  <DashBoard pokemon={this.state.pokemon} typeHandler={this.typeHandler} />
                </div>
              </div>
            </div>
            <Panel filterPokemon = {this.filterPokemon} weakness={this.state.weaknesses} selectedTypes={this.state.selectedTypes}></Panel>
          </div>
        </div>
      </div>)
  }
}

export default App;
