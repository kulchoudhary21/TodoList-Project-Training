import { useState } from "react";
import "../css/country.css";
export function CountryDetails() {
  const [c,getC]=useState({})
  
//   const getCity=()=>{
//     const countries={
//         india:["Indore,ujjain,Dewas,mumbai"],
//         australia:["melbourne,sydney"],
//         newzealand:["1","2"]
//       };
//       let v=document.getElementById().value;
//   }  
  let getCt=(e)=>{
      let countries = [
        {country: 'india', cities: ['Indore','ujjain','Dewas','mumbai']},
        {country: 'australia', cities: ['Indore','ujjain','Dewas','mumbai']},
        {country: 'pakistan', cities: ['Islamabad','lahore','karachi']},
      ]
    
      countries.map((list)=>{
        console.log(list);
      })

  }
  return (
    <div className="country">
      <label  style={{padding:"10px"}}>Choose a Country:</label>
      <div>
      
        <select name="Country">
          <option value="india" onChange={getCt}>India</option>
          <option value="australia" onChange={getCt}>Australia</option>
          <option value="newzealand" onChange={getCt} name="newzealand">New Zealand</option>
        </select>
      </div>
    </div>
  );
}
