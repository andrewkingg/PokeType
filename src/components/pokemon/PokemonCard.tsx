import React, {useEffect} from 'react';
import styled from 'styled-components';

const Sprite = styled.img`
  width: 5em;
  height: 5em;
`;

const Card = styled.div`
  box-shadow: -1px 9px 10px -7px rgba(161,161,161,0.65);
  transition: all 0.3s cubic-bezier(0.25,0.8,0.25,1);
  &:hover {
    box-shadow: -1px 16px 10px -2px rgba(161,161,161,0.75);
  }
  min-width: 130px;
  max-width: 150px;
`;

interface Props{
  name: string,
  url: string,
  typeHandler: (pokemonType: string[], imageUrl: string, selectedName: string)=>void,
  hide: boolean,
}
interface Type{
  name: string,
}
type Types = {
  slot: number,
  type: Type
}

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
export const PokemonCard: React.FC<Props> = ({name, url, typeHandler, hide}) => {
  const pokemonIndex = url.split("/")[url.split("/").length - 2];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png?raw=true`
  const [pokemonType, setType] = React.useState([""]);
 
  useEffect (() => {

    async function formatTypes(types: Types[]){
      let finalType : string[] = []
      //types.sort(sortTypes);
      types.map(type => finalType.push(type.type.name));
      setType(finalType)
      return;
    }

    function sortTypes(a: Types, b: Types){
      if ( a.slot < b.slot ){
        return -1;
      }
      if ( a.slot > b.slot ){
        return 1;
      }
      return 0;
    }

    function getTypes() {
      fetch(url, {cache: "force-cache"})
     .then(result => result.json())
     .then(async (result) =>
      await formatTypes(result.types))
     }

      getTypes();   
     
  },[url]);

  function handleClick(){
    typeHandler(pokemonType, imageUrl, name);
  }

  return (
    <div className="col-md-3 col-sm-6 mb-3 " style={{minWidth: '135px', display: hide? 'none' : ''}}>
      <Card className="card mx-auto" onClick={handleClick}>
        <h6 className="card-header py-0 pl-2" style = {{backgroundColor: '#C3C3E1'}}>
          {pokemonIndex}
        </h6>
        <Sprite className="card-img-top rounded mx-auto mt-2"
        src={imageUrl}/>
        <h6 className="card-body mx-auto py-0 text-capitalize">{name}</h6>
        <div className="mx-auto mb-3">
        {pokemonType.map((type : string) => (<span key = {type} className="mx-1 badge badge-pill badge-danger"
        style = {{backgroundColor: `${(Colors as any)[type]}`}}>{type}</span>))}
        </div>
      </Card>
    </div>)
}

export default PokemonCard;