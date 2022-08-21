import * as axios from 'axios';

let instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export const getPEople = async () => {
  return await instance.get('people');
};
