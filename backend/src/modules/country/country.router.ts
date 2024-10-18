import { Router } from "express";
import countryController from "./country.controller";

const countryRouter = Router();

countryRouter.get("/", countryController.listCountries);
countryRouter.get("/:countryCode", countryController.getCountry);

export default countryRouter;
