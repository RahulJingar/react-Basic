import React, { useState } from 'react'

const Signup = ({signup}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandle = (e) => {
    e.preventDefault()
    const data = {email,password};
    signup(data);
    alert('signup successfully!!')
    setEmail('');
    setPassword('');
  }

  return (
    <form onSubmit={submitHandle}>
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

      <button type="submit">Signup</button>
    </form>
  )
}

export default Signup
