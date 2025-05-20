import Country from "../models/country.model.js";

export const findAllCountries = () => Country.find({});
export const findCountryById = (id) => Country.findById(id);
export const insertCountry = (data) => new Country(data).save();
export const updateCountryById = (id, data) =>
  Country.findByIdAndUpdate(id, data, { new: true, runValidators: true });
export const deleteCountryById = (id) => Country.findByIdAndDelete(id);
