import "../css/convert.css";
import { useEffect } from "react";
import { useState } from "react";
import CardConvert from "./CardConvert";
function Convert() {
  let [Dollarmoney, setDollarMoney] = useState(0);
  let [Rupeesmoney, setRupeesMoney] = useState(0);
  let [celcius, setCelcius] = useState(32);
  let [fahrenheit, setFahrenheit] = useState(0);
  function convertDollar() {
    let dollar = document.getElementById("dollar").value;
    setDollarMoney(82.44 * dollar);
  }

  function convertRupees() {
    let rupees = document.getElementById("rupees").value;
    setRupeesMoney(rupees/82.44);
  }

  function convertCelcuis()
  {
    let celcius=document.getElementById("celcius").value;
    let c = (9/5 * celcius) + 32
    setCelcius(c);
  }

  function convertFahrenheit()
  {
    let fahrenheit=document.getElementById("fahrenheit").value;
    let f = (fahrenheit-32) * (5/9)
    setFahrenheit(f);
  }
  return (
    <div>
      <div>
        <div className="input-group">
          <label className="lb">Enter Money In $ To convert in ₹</label>
          <span className="input-group-text sm">$</span>
          <input
            id="dollar"
            type="text"
            class="form-control"
            aria-label="Amount (to the nearest dollar)"
            placeholder="0"
          />
          <button type="button" class="btn btn-primary" onClick={convertDollar}>
            Convert
          </button>
          <span className="money_container">{Dollarmoney} ₹</span>
        </div>
      </div>

      <div>
        <div className="input-group">
          <label className="lb">Enter Money In ₹ To convert in $</label>
          <span className="input-group-text sm">$</span>
          <input
          placeholder="0"
            id="rupees"
            type="text"
            class="form-control"
            aria-label="Amount (to the nearest dollar)"
          />
          <button type="button" class="btn btn-primary" onClick={convertRupees}>
            Convert
          </button>
          <span className="money_container">{Rupeesmoney} $</span>
        </div>
      </div>

      <div>
        <div className="input-group">
          <label className="lb">Enter temprature In C To convert in F</label>
          <span className="input-group-text sm">℃</span>
          <input
          placeholder="0"
            id="celcius"
            type="text"
            class="form-control"
            aria-label="Amount (to the nearest dollar)"
          />
          <button type="button" class="btn btn-primary" onClick={convertCelcuis}>
            Convert
          </button>
          <span className="money_container">{celcius} ℉</span>
        </div>
      </div>

      <div>
        <div className="input-group">
          <label className="lb">Enter Temprature In F To convert in C</label>
          <span className="input-group-text sm">℉</span>
          <input
          placeholder="0"
            id="fahrenheit"
            type="text"
            class="form-control"
            aria-label="Amount (to the nearest dollar)"
          />
          <button type="button" class="btn btn-primary" onClick={convertFahrenheit}>
            Convert
          </button>
          <span className="money_container">{fahrenheit} ℃</span>
        </div>
      </div>
      <div>
        <CardConvert/>
      </div>
    </div>
  );
}
export default Convert;
