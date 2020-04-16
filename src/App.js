import React, { useState, useEffect } from 'react';
import './App.css';
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl';
import * as MapboxGL from 'mapbox-gl';
import { fetchData } from './api';
import {  Select } from 'antd';

const { Option } = Select;

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiYmlrYXNoNjM3IiwiYSI6ImNrOHhvdWV2ZjE5c2gzZm1odWw4dTRnNW4ifQ.dciD6bok1ANU-Ht0Ingjwg'
    
});

function App() {
  const [geodata, setgeodata] = useState(null);
  const [selectedMethod, setMethod] = useState({
    method: 'confirmed',
    color: 'yellow'
  });

  const symbolLayout: MapboxGL.SymbolLayout = {
    'text-field': '{place}',
    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
    'text-offset': [0, 0.6],
    'text-anchor': 'top'
  };
  const symbolPaint: MapboxGL.SymbolPaint = {
    'text-color': 'white'
  };
  
  const circleLayout: MapboxGL.CircleLayout = { visibility: 'visible' };
  const circlePaint: MapboxGL.CirclePaint = {
    'circle-radius': ['round', ['log2', ['+', 1, ['number', ['get', selectedMethod.method], 0]]]],
    'circle-color': selectedMethod.color,
    'circle-opacity': 0.8,
    'circle-stroke-width': 1,
    'circle-stroke-color': '#333',
  };

  async function getdata(...args) {
    console.log('args', ...args);
    const data = await fetchData(...args);
    if(data){ 
      setgeodata(data);
    }
  }

  useEffect(() => { 
    getdata();
    
  }, []);

  console.log('geodata', geodata);

  const onClickCircle = (evt) => {
    console.log(evt);
  };
  
  const handleChange = (val) => {
    console.log(val);
    let newState = {};

    if(val === 'active') {
      newState = {
        method: val,
        color: 'orange'
      }
    }
    else if(val === 'deaths') {
      newState = {
        method: val,
        color: 'red'
      }
    }
    else if(val === 'recovered') {
      getdata(val);
      newState = {
        method: val,
        color: 'green'
      }
    }
    else {
      newState = {
        method: val,
        color: 'yellow'
      }
    }

    setMethod(newState);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Map
          style = "mapbox://styles/bikash637/ck9066nwq12ak1ip5vng79u15"
          containerStyle = {{
            height: '100vh',
            width: '100vw'
          }}
          center = {[-102.845452, 40.149178]}
          zoom = {['3.7']}
        >
          <GeoJSONLayer
            data={geodata}
            circleLayout={circleLayout}
            circlePaint={circlePaint}
            circleOnClick={onClickCircle}
            symbolLayout={symbolLayout}
            symbolPaint={symbolPaint}
          />

        </Map>

        <Select defaultValue="confirmed" className="select-btn" style={{ width: 120 }} onChange={handleChange}>
          <Option value="confirmed">Total Cases</Option>
          <Option value="active">Active Cases</Option>
          <Option value="deaths">Deaths</Option>
          {/* <Option value="recovered">Recovered</Option> */}
        </Select>
      </header>
    </div>
  );
}

export default App;
