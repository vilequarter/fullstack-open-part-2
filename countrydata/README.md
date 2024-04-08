This project practices fetching externally-hosted data and rendering it conditionally.
It uses the axios library to fetch data from an external JSON REST API containing info
about various countries, and this data can be filtered by country name. When more than 10
countries contain the search string, the user is asked to make their search more specific.
When 10 or less countries match, the names are displayed with a "Show" button that, when
clicked, shows basic data about the country. The app also makes an API call to 
OpenWeatherMap.org to get basic current weather data about the country's capital. If only
one country matches the search, the data is automaticlly displayed.
