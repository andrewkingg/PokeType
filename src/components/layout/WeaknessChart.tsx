import React from 'react';
import './WeaknessChart.css'
import styled from 'styled-components'

const Card = styled.div`
    min-height: 30px;
    min-width: 30px;
    max-width: 30px;
    max-height: 30px;
    padding: 0;
    margin: 1px;
    font-size: 11px;
    font-weight: 600;
    padding-top: 9px;
    border-radius: 6px;
    border: .5px solid gray;
    background-color: gray;
    text-shadow: 2px 2px 2px rgba(104,104,97,0.54);
`;

const TypeValuePair = styled.div`
   border: .5px solid #d6d6d6;
   border-radius: 6px;
`;

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

const multiplierColors = {
  '0': '#a7a7c7',
  '1': '#009900',
  '2': '#00e600',
  '-1': '#b30000',
  '-2': '#660000',
  '-3': '#1a000d',
  '-4': '#1a000d',
  '-5': '#1a000d',
}

interface Props {
  weakness: {}
}

interface State {
  weakness: {}
}

class WeaknessChart extends React.Component<Props,State> {
  constructor(props: Props){
    super(props)
    this.state = {
      weakness: props.weakness,
    }
  }

  upperCaseFirstLetter = (word: string) => {
    return word.toLowerCase()
    .split(" ")
    .map(letters => letters.charAt(0).toUpperCase() + letters.substring(1))
  }
  getMultipliers = (count: number) => {
    if(count===0){ return 1;}
    if(count===1){ return 2;}
    if(count===2){ return 4;}
    if(count===-1){ return .5;}
    if(count===-2){ return .25;}
    if(count<=-3){ return 0;}
  }

  render(){
    return (
      <div className="col" >
        <h6 className = 'text-center mb-2'>Type Resistances: </h6>
        <div className='row mb-3 mx-auto' style={{maxWidth:'220px'}}>
        
        {Object.keys(this.props.weakness).map(type => <TypeValuePair key = {type} className="mr-1 mx-auto">
            <Card className="badge badge-secondary" style = {{backgroundColor: `${(Colors as any)[type]}`}}>{type.substring(0,3).toUpperCase()}</Card>
            <Card className="badge badge-secondary" style = {{backgroundColor: `${(multiplierColors as any)[(this.props.weakness as any)[type]]}`}}>{this.getMultipliers((this.props.weakness as any)[type])}</Card>
          </TypeValuePair>)}
          
        </div>
      </div>)
    }
}

export default WeaknessChart;