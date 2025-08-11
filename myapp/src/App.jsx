import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {

  const data = [
    {
    name: "Rahul",
    email: 'rjingarnsd@gmail.com',
    phone: 7297998875,
    address: "gopalpura jaipur"
    }
  ]

  return (
    <div>
     <Header user={data}/> 
     <Footer userF={data}/>     
    </div>
  )
}

export default App
