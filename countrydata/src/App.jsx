import { useState, useEffect } from 'react'
import SearchForm from '../components/SearchForm'
import CountriesList from '../components/CountriesList';
import CountryInfo from '../components/CountryInfo';

import countryService from '../services/CountryService';

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [showCountry, setShowCountry] = useState(null);

  useEffect(() => {
    countryService
      .getAllNames()
      .then(initialCountries => {
        setAllCountries(initialCountries.map(country => {
          return country;
        }));
      })
      .catch(error => console.log(`error in getAllNames: ${error}`));
  }, [])

  const handleSearchChange = (event) => {
    const newSearch = event.target.value;
    const filteredCountries = allCountries.filter(country =>
      country.name.common.toLowerCase().includes(newSearch.toLowerCase()) ||
      country.name.official.toLowerCase().includes(newSearch.toLowerCase())
    );
    setCountries(filteredCountries);
    setShowCountry(null);
  }

  const handleShow = (country) => {
    setShowCountry(country);
  }

  return(
    <div>
      <SearchForm onChange={handleSearchChange}/>

      {countries.length === 1 ? 
        <CountryInfo country={countries[0]}/> :
        <>
          <CountriesList countries={countries} handleShow={handleShow}/>
          {showCountry ? <CountryInfo country={showCountry}/> : <></>}
        </>
      }
    </div>
  )
}

export default App
