import Form from "./MyComponent/Form";
import Header from "./MyComponent/Header"
import About from './MyComponent/About'
import React from "react";
import Footer from "./MyComponent/Footer"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Convert from "./MyComponent/Convert";
import { CustomerData } from "./MyComponent/CustomerData";
import { CountryDetails } from "./MyComponent/CountryDetails";

function App() {
  return ( 
    <div>
        <BrowserRouter>
        <Header/>    
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/about" element={<About />} />
            <Route path="/convert" element={<Convert/>}/>
            <Route path="/customer" element={<CustomerData/>}/>
            <Route path="/country" element={<CountryDetails/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}
export default App;
