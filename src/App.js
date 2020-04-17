import React, { useState, useEffect } from 'react';
import './App.css';
import ReactMapboxGl, { GeoJSONLayer, Popup } from 'react-mapbox-gl';
import * as MapboxGL from 'mapbox-gl';
import { fetchData, fetchCountOnly, fetchCountriesList } from './api';
import {  Select, Tag } from 'antd';

const { Option } = Select;

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiYmlrYXNoNjM3IiwiYSI6ImNrOHhvdWV2ZjE5c2gzZm1odWw4dTRnNW4ifQ.dciD6bok1ANU-Ht0Ingjwg'
    
});

function App() {
  const [stat, setStat] = useState(null);
  const [countries, setCountry] = useState(null);
  const [geodata, setgeodata] = useState(null);
  const [selectedMethod, setMethod] = useState({
    method: 'confirmed',
    color: 'yellow'
  });
  const [clickedValue, setValue] = useState(null);
  let [viewport, setViewport] = useState({
    center: [-102.845452, 40.149178],       
    zoom: ['3.7']
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

  async function getCountries() {
    const data = await fetchCountriesList();
    if(data){
      const { countries = [] } = data;
      // console.log('countries', countries);
      setCountry(countries);
    }
  }

  async function getdata(...args) {
    let country = args[0];
    getStat(country);
    const data = await fetchData(...args);
    if(data){ 
      // console.log('data', data.features);
      if(data.features.length > 0 && country !== 'US') {
          setViewport({
            zoom: ['4'],
            center: data.features[0].geometry.coordinates
          })
      }
      else {
        setViewport({
          center: [-102.845452, 40.149178],       
            zoom: ['3.7']
        });
      }
      setgeodata(data);
    }
  }

  async function getStat(country) {
    const data = await fetchCountOnly(country);
    // console.log('data', data);
    setStat(data);
  }

  useEffect(() => { 
    getCountries();
    getdata('US');
    
  }, []);


  const onClickCircle = (e) => {
    e.preventDefault();

    let regionName = e.features[0].properties.combinedKey;
    let value = e.features[0].properties[selectedMethod.method];
    // console.log(regionName, value);

    let targetValue = {
      lng: e.lngLat.lng,
      lat: e.lngLat.lat,
      region: regionName,
      count: value
    }
    setValue(targetValue);
  };
  
  const handleChange = (val) => {
    // console.log(val);
    setValue(null);
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

  const handleCountryChange = (val) => {
    getdata(val);
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
          {...viewport}
          onZoomEnd={e => {
            setViewport({
              zoom: [e.getZoom()],
              center: [e.getCenter().lng, e.getCenter().lat]
            })
          }}
        >
          <GeoJSONLayer
            data={geodata}
            circleLayout={circleLayout}
            circlePaint={circlePaint}
            circleOnClick={onClickCircle}
            symbolLayout={symbolLayout}
            symbolPaint={symbolPaint}
          />
          {
            clickedValue ? (
              <Popup
                coordinates={[clickedValue.lng, clickedValue.lat]}
                onClick={() => {
                  setValue(null);
                }}
              >
                <div>
                  <h3>{clickedValue.region}</h3>
                  <h4>{selectedMethod.method.toUpperCase()}: {clickedValue.count}</h4>
                </div>
              </Popup>
            ) : null
          }

        </Map>
        
        <div className="select-btn">
        <Select
          showSearch
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          defaultValue="US" 
          style={{ width: 140 }} 
          onChange={handleCountryChange}
          >
            {
              countries && countries.length > 0 ? countries.map((item) => 
                <Option key={item.name} value={item.name}>{item.name}</Option>
              ) : null
            }
          </Select>
          <Select defaultValue="confirmed" style={{ width: 120 }} onChange={handleChange}>
            <Option value="confirmed">Total Cases</Option>
            <Option value="active">Active Cases</Option>
            <Option value="deaths">Deaths</Option>
            {/* <Option value="recovered">Recovered</Option> */}
          </Select>
        </div>
        

        
        {
          stat ? (
            <div className='custom-tag'>
              <Tag color="gold">
                <p>Confirmed</p>
                {stat.confirmed}
              </Tag>
              <Tag color="red">
                <p>Deaths</p>
                {stat.deaths}
                </Tag>
              <Tag color="green">
                <p>Recovered</p>
                {stat.recovered}
                </Tag>
            </div>
          ) : null
        }
        
        

      </header>
    </div>
  );
}

export default App;
