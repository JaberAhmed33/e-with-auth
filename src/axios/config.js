
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dummyjson.com/',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});


const api = axios.create({
  baseURL: 'https://api-yeshtery.dev.meetusvr.com/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },

  // withCredentials: "include",

});

export { api, instance };
