import axios from 'axios';
import { getGeosonData } from '../data';

// url = 'https://corona.lmao.ninja/countries';

export const fetchCountriesList = async () => {
  let response;
  let url = `https://covid19.mathdro.id/api/countries/`;
  try {
    response = await axios.get(url);
  } catch(e) {
    console.log(`Failed to fetch countries: ${e.message}`, e);
    return;
  }
  const { data = {} } = response;
  return data;
}

export const fetchCountOnly = async (country = 'USA') => {
  let response;
  let url = `https://covid19.mathdro.id/api/countries/${country}`;
  try {
    response = await axios.get(url);
  } catch(e) {
    console.log(`Failed to fetch countries: ${e.message}`, e);
    return;
  }

  const { data = {} } = response;
  const count = {
    confirmed: data.confirmed.value,
    deaths: data.deaths.value,
    recovered: data.recovered.value
  }

  return count;
}

export const fetchData = async (country = 'USA', type = 'confirmed') => {
  let response;
  let url = `https://covid19.mathdro.id/api/countries/${country}/${type}`;
  try {
    response = await axios.get(url);
    // console.log('response', response);
  } catch(e) {
    console.log(`Failed to fetch countries: ${e.message}`, e);
    return;
  }

  const geodata = getGeosonData(response);
  return geodata;
}

export const fetchDataStatewise = async () => {
  let response;

  try {
    response = await axios.get('https://corona.lmao.ninja/v2/states?sort=cases');
    console.log('statewise response', response);
  } catch(e) {
    console.log(`Failed to fetch countries: ${e.message}`, e);
    return;
  }

}
