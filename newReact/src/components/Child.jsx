import React from 'react'

const Child = React.memo(
    ({childComponent}) => {

    console.log(`print the child component`)

  return (
    <div>
      <button>{childComponent}</button>
    </div>
  )
}
);

export default Child

// memo main re-render nahi hota hain or karna hain to usi case main re-render hoga jis case main hamne props ki value change ki ho
//React.memo -> wrap -> component -> component re-render tabhi hoga jab props change honge nahi to re-render nahi hoga
// if u r sending a function then React.memo want be able to save you from re-rendering