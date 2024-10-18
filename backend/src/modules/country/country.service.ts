import type { AxiosError } from "axios";
import type {
  TCountry,
  TCountryFlag,
  TCountryInfo,
  TCountryPopulation,
} from "../../@types";
import { countriesNowAPI, dateNagerAPI } from "../../services/apis";

class CountryService {
  async getAllCountries() {
    return (await dateNagerAPI.get<TCountry[]>("/AvailableCountries")).data;
  }

  async getOneCountry(countryCode: string) {
    return await dateNagerAPI
      .get<TCountryInfo>(`/CountryInfo/${countryCode}`)
      .then((res) => {
        return res.data;
      })
      .catch((err: AxiosError) => {
        return null;
      });
  }

  async getCountryPopulation(countryName: string) {
    return await countriesNowAPI
      .get<{
        msg: string;
        data: TCountryPopulation[];
      }>("/population")
      .then((res) => {
        const countryPopulation = res.data.data.find(
          (x) => x.country.toLowerCase() === countryName.toLowerCase(),
        );

        return countryPopulation;
      })
      .catch((err: AxiosError) => {
        return null;
      });
  }

  async getCountryFlag(countryCode: string) {
    return await countriesNowAPI
      .get<{
        msg: string;
        data: TCountryFlag[];
      }>("/flag/images")
      .then((res) => {
        const countryFlag = res.data.data.find(
          (x) => x.iso2.toLowerCase() === countryCode.toLowerCase(),
        );

        return countryFlag;
      })
      .catch((err: AxiosError) => {
        return null;
      });
  }

  async getCountryFlags() {
    return await countriesNowAPI
      .get<{
        msg: string;
        data: TCountryFlag[];
      }>("/flag/images")
      .then((res) => {
        return res.data.data;
      })
      .catch((err: AxiosError) => {
        return [];
      });
  }
}

const countryService = new CountryService();

export default countryService;
