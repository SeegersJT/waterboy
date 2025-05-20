import express from "express";
import {
  deleteCountry,
  getAllCountries,
  getCountry,
  insertCountry,
  updateCountry,
} from "../general/controllers/country.controller.js";

const countryRouter = express.Router();

countryRouter.get("/", getAllCountries);
countryRouter.get("/:id", getCountry);
countryRouter.post("/", insertCountry);
countryRouter.put("/:id", updateCountry);
countryRouter.delete("/:id", deleteCountry);

export default countryRouter;
