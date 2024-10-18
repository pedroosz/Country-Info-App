import axios from "axios";

const dateNagerAPI = axios.create({
  baseURL: process.env.DATE_NAGER_API,
});

const countriesNowAPI = axios.create({
  baseURL: process.env.COUNTRIES_NOW_API,
});

export { dateNagerAPI, countriesNowAPI };
