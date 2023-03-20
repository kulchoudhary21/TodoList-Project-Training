import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import "../css/CustomerData.css";
export function CustomerData() {
    

    let [user,setUser]=useState({});
    let addUser=(e)=>
    {
        console.log(e.target.value+"  "+e.target.name)
        setUser({...user,[e.target.name]: e.target.value})
        console.log({user});
        // name : 'arpiy' , age: 10 , name : 'prashant' ==> age: 10 , name : 'prashant' 
    }

    const submitButton = () => {
        // setUser({...user, name: 'K'})
        console.log(user)
    }
    return (
    <div>
      <form className="form_contianer">
        <div className="form_cn">
            <label style={{color:"blue"}}>Employee Details</label>
          <div className="tf1">
            <TextField
              label="Employee Name"
              variant="outlined"
              name="name"
              value={user.name}
              onChange={addUser}
            />
          </div>
          <div className="tf1">
            <TextField label="Age" variant="outlined" onChange={addUser} name="age"/>
          </div>
          <div className="tf1">
            <TextField  label="Designtion" variant="outlined" name="designation"/>
          </div>
          <div className="tf1">
            <TextField label="Salary" variant="outlined" name="salary"/>
          </div>
          <div>
            <Button onClick={submitButton} variant="outlined" style={{background:"#0dcaf0"}} >Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
