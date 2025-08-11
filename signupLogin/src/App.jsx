// App.jsx or main.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home';


function App() {
  return (

    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
