import type { Request, Response } from "express";
import countryService from "./country.service";

class CountryController {
  async listCountries(req: Request, res: Response) {
    const availableCountries = await countryService.getAllCountries();

    return res.status(200).json(availableCountries);
  }

  async getCountry(req: Request, res: Response) {
    const { countryCode } = req.params;

    if (!countryCode) {
      return res.status(400).json({
        message: "You need to provide a country code!",
      });
    }

    const country = await countryService.getOneCountry(countryCode);

    if (!country) {
      return res.status(404).json({
        message: "Country not found.",
      });
    }

    const populationData = await countryService.getCountryPopulation(
      country.commonName,
    );

    const countryFlag = await countryService.getCountryFlag(
      country.countryCode,
    );

    const allFlags = await countryService.getCountryFlags();

    const countryBorders = country.borders.map((borderCountry) => {
      const flag = allFlags.find(
        (flag) =>
          flag.iso2.toLowerCase() === borderCountry.countryCode.toLowerCase(),
      );

      return {
        commonName: borderCountry.commonName,
        countryCode: borderCountry.countryCode,
        flag,
      };
    });

    return res.status(200).json({
      commonName: country.commonName,
      officialName: country.officialName,
      countryCode: country.countryCode,
      region: country.region,
      borders: countryBorders,
      population: populationData,
      flag: countryFlag,
    });
  }

  async getCountryPopulation(req: Request, res: Response) {
    const { countryName } = req.params;

    const countryPopulationData =
      await countryService.getCountryPopulation(countryName);

    if (!countryPopulationData) {
      return res.status(404).json({
        message: "Unable to get country population",
      });
    }

    return res.json(countryPopulationData);
  }
}

const countryController = new CountryController();

export default countryController;
