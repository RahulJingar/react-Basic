import React from 'react'
import { useState } from 'react'
import Child from './components/Child';
import { useCallback } from 'react';


const App = () => {

  const [count,setCount] = useState(0);

  const changeHandler = useCallback(
    () => {
    setCount(count+1);
  },[]
  )

  // useCallback function ko freeze kr skte hain ek br chalega fr nahi chalega esa kaam krta hain useCallback

  return (
    <div>
      <div>
      <h1>{count}</h1>
      <button onClick={changeHandler}>Increase</button>
    </div>
    <button>
      <Child childComponent={changeHandler} />
    </button>
    </div>
  )
}

export default App
