import React from 'react';
import './ShinyToggler.css'
interface Props{
  toggleShiny : (toggledValue: boolean) => void
}

export const ShinyToggler: React.FC<Props> = ({toggleShiny}) => {
  const [checked,setChecked] = React.useState(false);
  const handleClick = () =>{
    toggleShiny(!checked);
    setChecked(!checked);
  }
  return ( 
    <div className="col">
      <div className="row">
        <div className="row mx-auto">
      <h6 className ="mx-2">Shiny</h6>
    <label className="switch">
       <input type="checkbox" onChange={handleClick}/>
      <span className="slider round"></span>
    </label>
    </div>
    </div>
    </div>)
}

export default ShinyToggler;