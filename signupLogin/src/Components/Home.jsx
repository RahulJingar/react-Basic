import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const Home = () => {
  return (
  <>
      <div className='flex justify-center gap-10 mt-10 border w-1/6 m-auto'>
      <Link className=' text-center p-1 w-full rounded-lg hover:bg-blue-800 cursor-pointer' to='/signup'>SignUp</Link>
      <Link className=' text-center p-1 w-full rounded-lg hover:bg-blue-800 cursor-pointer' to='/login'>Login</Link>
    </div>

  </>
  )
}

export default Home
