import axios from 'axios';
import { getGeosonData } from '../data';

// url = 'https://corona.lmao.ninja/countries';
const url = "https://covid19.mathdro.id/api/countries/USA/confirmed";

export const fetchData = async (country) => {
  let response;

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
