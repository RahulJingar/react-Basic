import React, { useState } from 'react'
import { useNavigate } from "react-router";


const Signup = () => {

  const [data,setData] = useState({name:"",email:"",password:""});

  let navigate = useNavigate();

  const changeHandler = (e) => {
    e.preventDefault();
    setData({...data,[e.target.name]:e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData',JSON.stringify(data));
    alert("SignUp Successfully!!");
    navigate('/login');
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={changeHandler} placeholder='Enter Name'/>
        <input type="email" placeholder='Enter Email' onChange={changeHandler}/>
        <input type="password" placeholder='Enter Password'onChange={changeHandler}/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Signup
