import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';



function App() {
  
  useEffect(()=>{
    fetch('http://localhost:3000/regex/create');
    console.log("yes i am running");
  })


  return (
    <>
      <div>
        <div>
    <h1>Signup</h1>
      </div>  

        <div>
          {/* input feild */}
          <input type="text" placeholder='Enter Email'/> <br /><br />
          <input type="text" placeholder='Enter Phone' /> <br /><br />
          <input type="text" placeholder='Enter Password'/> <br /><br />

          <button>Submit</button>

        </div>

      </div>    


    </>
  )
}

export default App;
