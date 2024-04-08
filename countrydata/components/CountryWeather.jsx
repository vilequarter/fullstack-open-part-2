import weatherService from '../services/WeatherService';
import { useEffect, useState } from 'react';

const CountryWeather = ({country}) => {
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        weatherService
            .getWeather(country)
            .then(weather => setWeather(weather))
            .catch(error => console.log(error));
    }, [])
    if(weather === null){
        return null;
    }
    return(
        <>
            <h2>Weather in {country.capital}</h2>
            <div>Temperature: {weather.main.temp} C</div>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
            <div>Wind: {weather.wind.speed} m/s</div>
        </>
    )
}

export default CountryWeather;