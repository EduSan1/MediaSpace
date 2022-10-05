import React from 'react';
import SpaceBackground from './components/SpaceBackground';
import LoginPage from './pages/Login/Login';
import SucessRegister from './pages/SucessRegister/SucessRegister';
import { Routes, Route, Link, useNavigate} from 'react-router-dom';
import RegisterPage from './pages/Register';
import RegisteredPage from './pages/SucessRegister/SucessRegister';

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/registered' element={<RegisteredPage/>}/>
      </Routes>

      {/* <PageLogin/> */}
      {/* <SpaceBackground/>      */}
    
    </>
  );
}

export default App;
