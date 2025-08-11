import React from 'react'
import { useState } from 'react';
import Signup from './Component/Signup';
import Login from './Component/Login';
import {Routes,Route, Link} from 'react-router-dom';

const App = () => {
    return (
        <div>

            <nav>
                <Link to='/signup'>SignUp</Link>
                <Link to='login'>login</Link>
            </nav>
            
            <Routes>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>

        </div>
    )
}
export default App
