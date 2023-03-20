import { useState } from "react";
import "../css/country.css";
let count = true;
export function CountryDetails() {
  const [country, setCountry] = useState(["Select Option"]);
  let countries = [
    { country: "india", cities: ["Indore", "ujjain", "Dewas", "mumbai"] },
    { country: "australia", cities: ["Indore", "ujjain", "Dewas", "mumbai"] },
    { country: "pakistan", cities: ["Islamabad", "lahore", "karachi"] },
  ];
  let getCt = () => {
    const select = document.getElementById("select").value;
    console.log(count);
    countries.map((l, i) => {
      if (count) {
        setCountry((arr) => [...arr, l.country]);
      }
      if (countries.length == i + 1) count = false;

      if (l.country == select) {
        console.log(countries[i].cities);
      }
    });
  };

  return (
    <div className="country">
      <label style={{ padding: "10px" }}>Choose a Country:</label>
      <div>
        <select id="select" name="d1" onClick={getCt}>
          {country.map((i) => {
            return <option value={i}>{i}</option>;
          })}
        </select>
      </div>
    </div>
  );
}
