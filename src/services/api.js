/* eslint-disable linebreak-style */
const KEY = 'e5f67703d1864046b94225659220706';

const fetchData = async (city) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=yes`;

  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();

  return data;
};

export default fetchData;
