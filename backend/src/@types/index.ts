export type TCountry = {
  countryCode: string;
  name: string;
};

export type TCountryInfo = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: TCountryBorder[];
};

export type TCountryBorder = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: null;
};

export type TCountryPopulation = {
  country: string;
  code: string;
  iso3: string;
  populationCounts: TCountryPopulationHistory[];
};

export type TCountryPopulationHistory = {
  year: number;
  value: number;
};

export type TCountryFlag = {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
};
