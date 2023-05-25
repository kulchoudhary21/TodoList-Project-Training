import { useState } from "react";
import "../css/country.css";
import { countries } from "./daa";
export function CountryDetails() {
  const [city, setCity] = useState([]);

  const selectCountry = (e) => {
    setCity(countries[e.target.value].cities);
  };

  return (
    <div className="country">
      <label style={{ padding: "10px" }}>Choose a Country:</label>
      <div>
        <select id="select" onChange={selectCountry}>
          {countries.map((i, index) => {
            return (
              <option name={i.country} key={i.country} value={index}>
                {i.country}
              </option>
            );
          })}
        </select>

        <select id="select">
          {city.map((list)=>{
          return(
          <option key="k">{list}</option>
          );
        })}
        </select>
      </div>
    </div>
  );
}
