import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/Login';
import RegisterPage from './pages/Register';
import ProviderUserRegisterPage from './pages/ProviderUserRegister';
import RegisteredPage from './pages/SucessRegister/SucessRegister';
import RecoveryPasswordPage from './pages/Recoverypassword';
import SendingEmailRecoveryPage from './pages/SendingEmailRecovery';
import MailConfirmedPage from './pages/ConfirmEmailWarningPage';
import RecoveringPasswordPage from './pages/RecoveringPasswordPage';
import ChangePasswordPage from './pages/RecoveringPasswordPage';
import SpaceBackground from './components/SpaceBackground';
import PasswordWarningPage from './pages/PasswordWarningPage';
import HomePage from './pages/Home';
import RegisterFreelancer from './pages/RegisterFreelancer';
import CreateProject from './pages/CreateProject';
import Projects from './pages/Projects';
import Eventes from './pages/Eventes';
import Menssagens from './pages/Menssage';
import Perfil from './pages/Perfil';
//import SpaceBackground from './components/SpaceBackground';

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/register/provideruserregister' element={<ProviderUserRegisterPage />} />
        <Route path='/confirmRegister' element={<MailConfirmedPage />} />
        <Route path='/register/registerFreelancer' element={<SpaceBackground component={<RegisterFreelancer />} />} />
        <Route path='/register/registered' element={<RegisteredPage />} />
        <Route path='/recoverpassword' element={<RecoveryPasswordPage />} />
        <Route path='/home'                             element={<HomePage/>}/>
        <Route path='/changePassword' element={<SpaceBackground component={<RecoveringPasswordPage />} />} />
        <Route path='/changePassword/sucess' element={<SpaceBackground component={<PasswordWarningPage />} />} />
        <Route path='recoverpassword/recoveryemailsent' element={<SendingEmailRecoveryPage />} />
        <Route path='/projects/createProjects' element={<CreateProject />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/Eventes' element={<Eventes/>} />
        <Route path='/Menssagens' element={<Menssagens/>} />
        <Route path='/Perfil' element={<Perfil/>} />

      </Routes>



    </>
  );
}

export default App;
