import React, { useState } from 'react';
import { useNavigate } from "react-router";


const Login = () => {

    const [user,setUser] = useState({email:"",password:""});

    let navigate = useNavigate();
    const changeHandler = (e) => {
        setUser({...user,[e.target.name] : e.target.value});
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        const storedData = JSON.parse(localStorage.getItem('userData'));
        if(storedData && user.email === storedData.email && user.password === user.password){
            alert('login successfully');
        }else{
            alert("Invalid Inputs");
        }
    }

  return (
    <div>
      <form action="" onSubmit={handlerSubmit}>
        <input type="email" onChange={changeHandler} placeholder='Enter Email'/>
        <input type="password" placeholder='Enter Password' onChange={changeHandler}/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login
