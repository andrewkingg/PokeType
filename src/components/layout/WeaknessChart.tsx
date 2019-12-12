import React, { useState, useEffect } from 'react';
import './WeaknessChart.css'
interface Props {
  weakness: {}
  selectedTypes: string[]
}

interface State {
  weakness: {}
  selectedTypes: string[]
}

class WeaknessChart extends React.Component<Props,State> {
  constructor(props: Props){
    super(props)
    this.state = {
      weakness: props.weakness,
      selectedTypes: props.selectedTypes,
    }
  }

  render(){
    return (
      <div className="col card" style={{}}>
        <div className = "container">
        <div className='row mx-auto'>
        
        {Object.keys(this.props.weakness).map(type => <div>
            <div className="badge badge-info cell" >{type.substring(0,3)}</div>
            <div className="badge badge-info cell" >{(this.props.weakness as any)[type]}</div>
          </div>)}
        </div>
        </div>

      </div>)
    }
}

export default WeaknessChart;