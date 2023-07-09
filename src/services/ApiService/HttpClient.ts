import Axios from 'axios';

const HttpClient = Axios.create({
  baseURL: 'https://picsum.photos',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default HttpClient;
