import React, { useState, useEffect } from 'react';
import './App.css';
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl';
import * as MapboxGL from 'mapbox-gl';
import { fetchData } from './api';


const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiYmlrYXNoNjM3IiwiYSI6ImNrOHhvdWV2ZjE5c2gzZm1odWw4dTRnNW4ifQ.dciD6bok1ANU-Ht0Ingjwg'
    
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
  'circle-radius': ['round', ['log2', ['+', 1, ['number', ['get', 'deaths'], 0]]]],
  'circle-color': 'red',
  'circle-opacity': 0.8,
  'circle-stroke-width': 1,
  'circle-stroke-color': '#333',
};

const onClickCircle = (evt) => {
  console.log(evt);
};

function App() {
  const [geodata, setgeodata] = useState(null);

  useEffect(() => {
    async function getdata() {
      const data = await fetchData();
      // const stateData = fetchDataStatewise();
      // console.log('in App', data);
      if(data){ 
        setgeodata(data);
      }
    }
    getdata();
    
  }, []);

  console.log('geodata', geodata);

  return (
    <div className="App">
      <header className="App-header">
        <Map
          style = "mapbox://styles/bikash637/ck9066nwq12ak1ip5vng79u15"
          containerStyle = {{
            height: '100vh',
            width: '100vw'
          }}
          center = {[-90.30356, 38.6586022]}
          zoom = {['3.5']}
        >
          <GeoJSONLayer
            data={geodata}
            circleLayout={circleLayout}
            circlePaint={circlePaint}
            circleOnClick={(e) => onClickCircle(e)}
            symbolLayout={symbolLayout}
            symbolPaint={symbolPaint}
          />

          {/* <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
            {
              geodata && geodata.features.map((feature) =>
                <Feature 
                  key={feature.properties.country} 
                  coordinates={[feature.geometry.coordinates[0], feature.geometry.coordinates[1]]} 
                />
              )
            }
          </Layer> */}
        </Map>

      </header>
    </div>
  );
}

export default App;
