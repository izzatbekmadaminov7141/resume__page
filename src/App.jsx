import React from 'react'
import { useState } from 'react'
import "./App.css";

function App() {
  const [state,setState]=useState("Tashkent");
  return (
    <div>
         {/* <h1>Welcome to react jsx</h1> 
         <h1>{state}</h1>
         <button onClick={()=>Setstate(state+1)}>+1 click</button>
         <button onClick={()=>Setstate(state-1)}>-1 click</button> */}
         <h1>react Location :</h1>
         <hr />
         <button onClick={()=>setState("Tashkent")}>Uzbekistan</button>
        <button onClick={()=>setState("Ottava")}>Canada</button>
        <button onClick={()=>setState("Masskov")}>Russia</button>
        <hr />
        <h2>{state}</h2>
    </div>
  )
}

export default App