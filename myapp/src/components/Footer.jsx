import React from 'react'

const Footer = ({userF}) => {
  return (
    <div>
        {userF.map((product,index)=>{
          return <div key={index}>
            <h1>Phone: {product.phone}</h1>
            <h1>Address: {product.address}</h1>
          </div>
        })} 
       
    </div>
  )
}

export default Footer
