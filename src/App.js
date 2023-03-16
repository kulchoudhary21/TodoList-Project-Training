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

function App() {
  return ( 
    <div>
        <BrowserRouter>
        <Header/>    
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/about" element={<About />} />
            <Route path="/convert" element={<Convert/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}
export default App;
