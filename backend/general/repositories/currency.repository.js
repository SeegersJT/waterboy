import Currency from "../models/currency.model.js";

export const findAllCurrencies = () => Currency.find({});
export const findCurrencyById = (id) => Currency.findById(id);
export const insertCurrency = (data) => new Currency(data).save();
export const updateCurrencyById = (id, data) =>
  Currency.findByIdAndUpdate(id, data, { new: true, runValidators: true });
export const deleteCurrencyById = (id) => Currency.findByIdAndDelete(id);
