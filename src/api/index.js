import axios from 'axios';
import { getGeosonData } from '../data';

// url = 'https://corona.lmao.ninja/countries';

export const fetchData = async (type = 'confirmed', country = 'USA') => {
  let response;
  let url = `https://covid19.mathdro.id/api/countries/${country}/${type}`;
  try {
    response = await axios.get(url);
    console.log('response', response);
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
