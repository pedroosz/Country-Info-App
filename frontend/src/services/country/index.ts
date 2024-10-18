import { TCountry, TCountryInfo, TCountryPopulation } from "@/@types";
import api from "../api";

class CountryService {
  async getAllCountries() {
    return (await api.get<TCountry[]>("/countries")).data;
  }

  async getCountry(countryCode: string) {
    return (await api.get<TCountryInfo>(`/countries/${countryCode}`)).data;
  }

  async getCountryPopulation(countryName: string) {
    return (
      await api.get<TCountryPopulation>(`/countries/${countryName}/population`)
    ).data;
  }
}

const countryService = new CountryService();

export default countryService;
