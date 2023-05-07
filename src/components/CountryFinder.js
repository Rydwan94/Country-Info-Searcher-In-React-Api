import { useContext, useEffect, useRef } from "react";
import { themeContext } from "../context/CountryProvider";

import "../css/CountryFinder.css";

const CountryFinder = () => {
  const inputRef = useRef();
  const context = useContext(themeContext);
  const { countryName, setCountryName, fetchData } = context;

  useEffect(() => {
    inputRef.current.focus();
  });


  const handleInput = (e) => setCountryName(e.target.value);

  const handleClick = () => {
    fetchData(countryName);
    setCountryName("");
  };

  const handleSubmit = (e) => e.preventDefault();

  return (
    <form className="countrySearcher" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="...Find country"
        value={countryName}
        onChange={handleInput}
      />
      <button type="submit" onClick={handleClick}>
        Search
      </button>
    </form>
  );
};

export default CountryFinder;
