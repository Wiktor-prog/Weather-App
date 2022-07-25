import { BrowserRouter, Routes, Route} from "react-router-dom"
import React from "react"; 
import './App.css';
import Search from "./components/Search";
import Details from "./components/Details";



export default function App() {
  return (
    <div className="App">
      
    <BrowserRouter>   
      <Routes>
        <Route path="/" element={<Search />} exact/>
        <Route path="/details" element={<Details />} exact/>
      </Routes>
    </BrowserRouter> 
    </div>


  )
}