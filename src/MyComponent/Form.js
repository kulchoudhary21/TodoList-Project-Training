import Display from "./Display";
import { useState } from "react";
import { Edit } from "./Edit";
function Form() {
  const [list, updatelist] = useState([]);
  const [underline,setUnderline]=useState([false]);
  const [bold,setbold]=useState([false]);
  const [italic,setItalic]=useState([false]);
  const [color,setColor]=useState([false]);
  const [toggle,setToggle]=useState(true);
  function add() {
    if(document.getElementById("name").value){
    let name = document.getElementById("name").value;
    updatelist((arr) => [...arr, name]);
    document.getElementById("name").value = "";
    }
  }
  function delet(i)
  {
    list.splice(i,1);
  }
  function under()
  {
    console.log(underline)
    if(underline===true)
    {
      setUnderline(false);
    }
    else
    {
      setUnderline(true);
      
    }
  }

  function bolding()
  {
    console.log(bold)
    if(bold===true)
    {
      setbold(false);
    }
    else
    {
      setbold(true);
    }
  }
  function italing()
  {
    console.log(italic)
    if(italic===true)
    {
      setItalic(false);
    }
    else
    {
      setItalic(true);
    }
  }
  const handleChange=(e)=>{
    console.log("color",color)
    if(color)
    {
      setColor(false);
      setToggle(false);
    }
    else
    {
      setColor(true);
      setToggle(true);
    }
  }

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          id="name"
        />
        <button className="btn btn-outline-secondary" type="button" onClick={add}>
          Add
        </button>
      </div>
      <Edit onUnderline={under} onBold={bolding} onItalic={italing} onhandleChange={handleChange} toggle={toggle}/>
      <Display list={list} delet={delet} ul={underline} b={bold} it={italic} c={color}/>
      
    </div>
  );
}
export default Form;
