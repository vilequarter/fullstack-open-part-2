import axios from 'axios';
const api_key = import.meta.env.VITE_WEATHER_KEY;

const getWeather = (country) => {
    const latlng = country.capitalInfo.latlng;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=${api_key}&units=metric`;
    const response = axios.get(url);
    return response.then(response => response.data);
}

export default {getWeather};