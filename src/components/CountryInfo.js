import { useContext } from "react";

import { themeContext } from "../context/CountryProvider";


import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import "../css/CountryInfo.css";
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

import 'leaflet-defaulticon-compatibility';

const CountryInfo = () => {
  const context = useContext(themeContext);
  const { countriesData } = context;
  const {
    altSpellings,
    capital,
    flags,
    region,
    borders,
    population,
    currencies,
    maps,
    latlng,
  } = countriesData && countriesData[0] ? countriesData[0] : {};


  const ChangeMapView = ({ center, zoom }) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  };
  
  const getCurrencyInfo = (currencies) => {
    if (!currencies) {
      return '';
    }

    const currency = Object.values(currencies)[0];
    return `${currency.name} (${currency.symbol})`;
  };

  const countryData = {
    countryName: altSpellings && altSpellings[1],
    capital,
    flagImg: flags && flags.png,
    flagAlt: flags && flags.alt,
    region,
    borders: borders && borders.join(", "),
    population,
    currencies: getCurrencyInfo(currencies),
    googleMaps: maps && maps.openStreetMaps,
    latlng: latlng && latlng
  };


 
  return (
    <article className="countryInfoContainer">
      <header>
        <h2>{countryData.countryName}</h2>
      </header>
        <figure>
          <img src={countryData.flagImg} alt={countryData.flagAlt} />
          <figcaption>{countryData.flagAlt}</figcaption>
        </figure>
      <section className="countryInfo">
        <p>
          Capital: <strong>{capital}</strong>
        </p>
        <p>
          Region: <strong>{region}</strong>
        </p>
        <p>
          Population : <strong>{population}</strong>
        </p>
        <p>
          Country Borders: <strong>{borders && borders.join(", ")}</strong>
        </p>
        <p>
          Currencies: <strong>{countryData.currencies}</strong>
        </p>
      </section>
      
      <div className="mapContainer">
        {countryData.latlng && (
          <MapContainer
            center={countryData.latlng}
            zoom={3}
            className="leaflet-container"
          >
            <ChangeMapView center={countryData.latlng} zoom={3} />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={countryData.latlng}>
              <Popup>{countryData.countryName}</Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </article>
  );
};

export default CountryInfo;
