 import React from 'react';

 export default function Main() {
   return (
    
<div className="App">
   <main>
     <h2>Simple Weather App</h2>
     <div className ="search">
       <p>Location</p>
       <div className ="search-container">
         <input  
           type ="text" 
           placeholder="Enter a city"
           value={city}
           onChange={(event) => setCity(event.target.value)}
           />
           <button onClick={useEffect}>Search</button>
       </div>
       <div className ="location-container">
         <div className ="location">Warsaw</div>
       </div>
       <div className ="weather-box">
         <div className ="weather">24°C</div>
       </div>

     </div>
  </main>
 </div>
  )
}


