import { BrowserRouter, Routes, Route} from "react-router-dom"
import React from "react"; 
import "./components/Search/Search.css"
import Search from "./components/Search/Search";

export default function App() {
  return (
    <div className="App">
      
    <BrowserRouter>   
      <Routes>
        <Route path="/" element={<Search />} exact/>
      </Routes>
    </BrowserRouter> 
    </div>


  )
}