import CountryWeather from './CountryWeather';

const CountryInfo = ({country}) => {
    return(
        <div>
            <h1>{country.name.common}</h1>
            <div>Capital: {country.capital[0]}</div>
            <div>Area: {country.area}</div>
            <h4>Languages</h4>
            <ul>
                {Object.values(country.languages).map(language => {
                    return <li key={language}>{language}</li>
                })}
            </ul>
            <img src={country.flags.png}/>
            <CountryWeather country={country}/>
        </div>
    )
}

export default CountryInfo