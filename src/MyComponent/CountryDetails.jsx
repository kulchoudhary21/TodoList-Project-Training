import { useState } from "react";
import "../css/country.css";
import { countries } from "./daa";
export function CountryDetails() {
  const [city, setCity] = useState([]);

  const selectCountry = (e) => {
    console.log(countries)
    // const city = e.target.value
    const a = countries.filter(res => res.country === e.target.value)
    console.log(a[0].cities)

    setCity(a[0].cities)
  }

  return (
    <div className="country">
      <label style={{ padding: "10px" }}>Choose a Country:</label>
      <div>
        <select id="select" onChange={selectCountry}>
          {countries.map((i) => {
            return (
              <option name={i.country} key={i.country} value={i.country}>
                {i.country}
              </option>
            );
          })}
        </select>

        <select id="select"  >
            return (
              <option key="k">
                {city}
              </option>
            );
        </select>
      </div>
    </div>
  );
}
