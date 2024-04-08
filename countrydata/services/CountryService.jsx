import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries';

const getAllNames = () => {
    const response = axios.get(`${baseUrl}/api/all`);
    return response.then(response => response.data);
}

export default {getAllNames}