import "../css/convert.css";
import { useState } from "react";
import CardConvert from "./CardConvert";
const Convert = () => {
  let [Dollarmoney, setDollarMoney] = useState(0);
  let [Rupeesmoney, setRupeesMoney] = useState(0);
  let [celcius, setCelcius] = useState(32);
  let [fahrenheit, setFahrenheit] = useState(0);
  function convertDollar() {
    let dollar = document.getElementById("dollar").value;
    setDollarMoney(82.44 * dollar);
  }

  function convertRupees(name, value) {
    let rupees = document.getElementById("rupees").value;  
    setRupeesMoney(rupees / 82.44);
    // console.log("value,",value,"Name",name);
  }

  function convertCelcuis() {
    let celcius = document.getElementById("celcius").value;
    let c = (9 / 5) * celcius + 32;
    setCelcius(c);
  }

  function convertFahrenheit() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    let f = (fahrenheit - 32) * (5 / 9);
    setFahrenheit(f);
  }
  return (
    <div>
      <div>
        <CardConvert
          title_msg={"Money Convertor $ to ₹"}
          input_msg={"$"}
          onConvert={convertDollar}
          output_msg={Dollarmoney + " ₹"}
          id={"dollar"}
          name='dollar'
        />
        <CardConvert
          title_msg={"Money Convertor ₹ to $"}
          input_msg={"₹"}
          onConvert={convertRupees}
          output_msg={Rupeesmoney + " $"}
          id={"rupees"}
        />
        <CardConvert
          title_msg={"Temprature Convertor ℃ to ℉"}
          input_msg={"℃"}
          onConvert={convertCelcuis}
          output_msg={celcius + " ℉"}
          id={"celcius"}
        />
        <CardConvert
          title_msg={"Temprature Convertor ℉ to ℃"}
          input_msg={"℉"}
          onConvert={convertFahrenheit}
          output_msg={fahrenheit + " ℃"}
          id={"fahrenheit"}
        />
      </div>
    </div>
  );
};
export default Convert;
