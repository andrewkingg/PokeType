import React from 'react';

type Pokemon = {
  name: string,
  url: string
}

interface Props {
  filterPokemon: (filter: string)=>void,
}

export const SearchBar: React.FC<Props>= ({filterPokemon}) => {
  const handleOnChange = (text: string) => {
    filterPokemon(text);
  }

  return (
    <div className='col'>
      <div className="input-group my-3">
    <input type="text" onChange = {e => handleOnChange(e.target.value)} className="form-control" placeholder="Search Pokemon"/>
    </div>
    </div>)
}

export default SearchBar;