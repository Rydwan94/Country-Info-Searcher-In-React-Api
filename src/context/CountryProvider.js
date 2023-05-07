import { createContext, useState } from "react";
import axios from "axios";

export const themeContext = createContext();

const CountryProvider = ({ children }) => {
  const [countriesData, setCountriesData] = useState(null);
  const [countryName, setCountryName] = useState("");

  const fetchData = async (country) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${country}`
      );
      console.log(response.data);
      setCountriesData(response.data);
    } catch (error) {
      console.error(`something went wrong ${error}`);
    }
  };

  return (
    <themeContext.Provider
      value={{ countriesData, countryName, setCountryName, fetchData }}
    >
      {children}
    </themeContext.Provider>
  );
};

export default CountryProvider;