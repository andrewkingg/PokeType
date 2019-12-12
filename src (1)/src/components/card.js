import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import './card.css'

const Card = ({handler}) => {
  const [selected, setSelected] = React.useState(false);
  const handleClick = () => {
      handler("LOL")
  }
  return (
        <div id = "card" className={"col-2 m-2 " + (selected? 'selected' : "") } style={{ backgroundColor: 'gray', minHeight: '200px' }}
        onClick = {handleClick}>
          Pokemon
        </div>
  );
}

export default Card;
