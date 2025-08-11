import React from 'react'

const Header = ({user}) => {
  return (
    <div>
      {user.map((item,index)=>{
        return <div key={index}>
              <h1>Name: {item.name}</h1>
            <h1> Email: {item.email}</h1>
        </div>
      })}
   
    </div>
  )
}

export default Header
