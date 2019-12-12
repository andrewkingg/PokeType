import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/card'

function App() {
  function handleClick(message){
    console.log(message)
  }
  return (
    <div className='container'>
      <div className="row">

        <div className="col-12" style={{ backgroundColor: 'gray', minHeight: '10vh' }}>
          Hello
        </div>


      </div>
      <div className="row mt-3">

        <div className="col-9" style={{ backgroundColor: 'white', minHeight: '85vh', maxHeight: '85vh' }}>
          <div className = "container overflow-auto" style ={{backgroundColor:'skyblue', minHeight: '100%', maxHeight:'100%'}}>
            <div className="row justify-content-md-center">
              <Card handler = {handleClick}/>
              </div>
          </div>
        </div>
        <div className="col-3" style={{ backgroundColor: 'green' }}>
          Hello
        </div>

      </div>
    </div>
  );
}

export default App;
