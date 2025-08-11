import React from 'react'
import { useState } from 'react';

const App = () => {

  const [user,setUser] = useState(
 [
     {
  india: {
    states: {
      Maharashtra: ["Mumbai", "Pune", "Nagpur"],
      Karnataka: ["Bengaluru", "Mysuru", "Mangalore"],
      TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
      Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
      Rajasthan: ["Jaipur", "Udaipur", "Jodhpur"],
      WestBengal: ["Kolkata", "Siliguri", "Durgapur"],
      Punjab: ["Chandigarh", "Amritsar", "Ludhiana"],
      Haryana: ["Gurugram", "Faridabad", "Panipat"],
      Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
      UttarPradesh: ["Lucknow", "Kanpur", "Agra"],
      Bihar: ["Patna", "Gaya", "Bhagalpur"],
      Odisha: ["Bhubaneswar", "Cuttack", "Rourkela"],
    },
  },
  usa: {
    states: {
      California: ["Los Angeles", "San Francisco", "San Diego"],
      NewYork: ["New York City", "Buffalo", "Rochester"],
    },
  },
  germany: {
    states: {
      Bavaria: ["Munich", "Nuremberg", "Augsburg"],
      Berlin: ["Berlin", "Potsdam", "Cottbus"],
    },
  },
}
 ]
  )


 

  return (
    <div>
     {user.map(item=>
    <div>
       <h1>India States</h1>
     <h4>State:- {item.india.states.Maharashtra}</h4> 
     <h4>State:- {item.india.states.Karnataka}</h4> 
     <h4>State:- {item.india.states.TamilNadu}</h4> 
     <h4>State:- {item.india.states.Gujarat}</h4> 
     <h4>State:- {item.india.states.Rajasthan}</h4> 
     <h4>State:- {item.india.states.WestBengal}</h4> 
     <h4>State:- {item.india.states.Punjab}</h4> 
     <h4>State:- {item.india.states.Haryana}</h4> 
     <h4>State:- {item.india.states.Telangana}</h4> 
     <h4>State:- {item.india.states.UttarPradesh}</h4> 
     <h4>State:- {item.india.states.Bihar}</h4> 
     <h4>State:- {item.india.states.Odisha}</h4> 
     <hr />

     <h1>Usa States</h1>
     <h2>State:- {item.usa.states.California}</h2>
     <h2>Stste:- {item.usa.states.NewYork}</h2>

     <hr />

     <h1>Germany States</h1>

     <h3>State:- {item.germany.states.Bavaria}</h3>
     <h3>State:- {item.germany.states.Berlin}</h3>
    </div>
      
     )} 
    </div>
  )
}

export default App
