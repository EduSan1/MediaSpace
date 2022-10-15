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
import RegisterFreelancer from './pages/RegisterFreelancer';
import HomePage from './pages/Home';
//import SpaceBackground from './components/SpaceBackground';

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<LoginPage  />}  />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/register/provideruserregister/:userId' element={<ProviderUserRegisterPage />} />
        <Route path='/confirmRegister' element={<MailConfirmedPage />} />
        <Route path='/register/registerFreelancer/:userId' element={<SpaceBackground component={<RegisterFreelancer />} />} />
        <Route path='/register/registerFreelancer' element={<SpaceBackground component={<RegisterFreelancer />} />} />
        <Route path='/register/registered' element={<RegisteredPage />} />
        <Route path='/recoverpassword' element={<RecoveryPasswordPage />} />
        <Route path='/changePassword' element={<SpaceBackground component={<RecoveringPasswordPage />} />} />
        <Route path='/changePassword/sucess' element={<SpaceBackground component={<PasswordWarningPage />} />} />
        <Route path='recoverpassword/recoveryemailsent' element={<SendingEmailRecoveryPage />} />
        <Route path='/home'                             element={<HomePage/>}/>
      </Routes>

      {/* <PageLogin/> */}
      {/* <SpaceBackground/>      */}

    </>
  );
}

export default App;
