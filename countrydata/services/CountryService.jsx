import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries';

const getAllNames = () => {
    const response = axios.get(`${baseUrl}/api/all`);
    return response.then(response => response.data);

    /*
    const data = axios.get(`${baseUrl}/api/all`).then(response => response.data);
    console.log(data);
    return data;
    */
}

export default {getAllNames}