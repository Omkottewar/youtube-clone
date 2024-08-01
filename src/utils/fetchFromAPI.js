import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'x-rapidapi-key': '87023029e9mshcbe196bef0499d2p1245a9jsnb8996949dcad',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  },
};
console.log(process.env.REACT_APP_RAPID_API_KEY)
export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };