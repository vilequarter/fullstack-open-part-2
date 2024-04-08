const CountriesList = ({countries}) => {
    if(countries.length === 0) return;

    return(countries.length > 10 ? <div>Too many matches, make your search more specific</div> : 
        <table>
            <tbody>
                {countries.map(country => {
                    return <tr key={country.name.common}><td>{country.name.common}</td></tr>
                })}
            </tbody>
        </table>
    )
}

export default CountriesList