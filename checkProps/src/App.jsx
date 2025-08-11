import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import { useState } from 'react'

const App = () => {

  const [user,setUser] = useState(null);

  return (
    <div>
      <Signup signup={setUser}/>
      <Login login={user}/>
    </div>
  )
}

export default App
