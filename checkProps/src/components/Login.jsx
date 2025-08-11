import React, { useState } from 'react'

const Login = ({login}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault()
    if(email==login.email && password==login.password){
      alert('user successfully login')
    }else{
      alert('invalid input field');
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder='Enter Email' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input 
          type="password" 
          placeholder='Enter Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
